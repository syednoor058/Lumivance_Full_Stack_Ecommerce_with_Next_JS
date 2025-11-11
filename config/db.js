import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/lumivance`, opts).then((mongoose) => {
        return mongoose;
    });
  }
  
  console.log("Connecting to database...");
  cached.conn = await cached.promise;
  console.log("Connected to database.");
  return cached.conn;
}

export default dbConnect;