import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();

  const user = await User.findOne({ email });

  if (!user) return Response.json({ error: "User not found" }, { status: 404 });

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) return Response.json({ error: "Invalid password" }, { status: 401 });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

  return Response.json({ success: true, token });
}

