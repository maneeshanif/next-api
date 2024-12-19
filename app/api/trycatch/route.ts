import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest ,res : NextResponse) {
  try {
    const shouldFail = Math.random() < 0.5;

    if (shouldFail) {
      throw new Error("Oops! Something went wrong 🛑");
    }

    return NextResponse.json({
      message: "Request was successful! ✅",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: `Error: ${error.message || "Unknown error occurred"}`,
      status: 500,
    });
  }
}
