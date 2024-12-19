import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,res : NextResponse) {
  // Step 1: Parse the request URL from Next.js Request object
  const { searchParams } = new URL(req.url);

  // Step 2: Extract query parameters

//here we use get method to get the query parameters and by default it will return string like "all" category and "not specified" price

  const category = searchParams.get("category") || "all";     // Get 'category'
  const price = searchParams.get("price") || "not specified";   // Get 'price'

  // Step 3: Return a response
  return NextResponse.json({
    message: "Query parameters received 🎉",
    category,
    price,
    status: 200,
  });
}
