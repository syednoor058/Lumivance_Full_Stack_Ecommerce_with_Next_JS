import dbConnect from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const {userId} = getAuth(request);
        await dbConnect();
        const addresses = await Address.find({userId: userId}).sort({createdAt: -1});
        return NextResponse.json({success: true, addresses}, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false, message: error.message}, {status: 500});
    }
}