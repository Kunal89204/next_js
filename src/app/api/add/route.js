import { NextResponse } from "next/server";


export async function GET(request){
    // let data= request.json()
    console.log("hello world")
    return NextResponse.json({success: true, data:"yes"})
}