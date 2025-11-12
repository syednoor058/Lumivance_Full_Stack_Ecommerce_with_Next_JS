import dbConnect from "@/config/db";
import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);

    if (!isSeller) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unauthorized Access. Only sellers are allowed to add products.",
        },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const offerPrice = formData.get("offerPrice");
    const category = formData.get("category");

    const files = formData.getAll("images");
    if (!files || files.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please upload at least one product image.",
        },
        { status: 400 }
      );
    }

    const result = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          );
          stream.end(buffer);
        });
      })
    );

    const image = result.map((res) => res.secure_url);
    await dbConnect();

    const newProduct = await Product.create({
      userId,
      name,
      description,
      price: Number(price),
      offerPrice: offerPrice ? Number(offerPrice) : Number(price),
      category,
      images: image,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product added successfully.",
        newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
