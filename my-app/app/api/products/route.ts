import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req: Request) {
  const data = await req.json();
  await connectDB();
  const product = await Product.create(data);
  return Response.json(product);
}

