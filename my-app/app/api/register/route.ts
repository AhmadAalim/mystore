import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    console.log("Attempting to connect to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB successfully!");

    console.log("Checking if user exists...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    console.log("Hashing password...");
    const hashed = await bcrypt.hash(password, 10);
    
    console.log("Creating user...");
    const user = await User.create({ name, email, password: hashed });
    console.log("User created successfully:", user._id);

    return Response.json({ success: true, user });
  } catch (error: any) {
    console.error("Registration error:", error);
    return Response.json(
      { error: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}

