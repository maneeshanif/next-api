import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,res: NextResponse) {
    return NextResponse.json({
        message: "Hello world asad bhi",
        status: 200
    })
}