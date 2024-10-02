import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  return NextResponse.json(
    { data, message: "api is working in production and much more" },
    { headers: { "Access-Control-Allow-Origin": "*" }, status: 200 },
  );
}
