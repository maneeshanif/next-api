

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,res: NextResponse) {
    return NextResponse.json({
        message: "Hello world 🦀",
        status: 200
    })
}




// export async function GET(req:any,res:any){

//     return new Response('hello world from next api route 👋🏻')

// }

