import { NextRequest, NextResponse } from "next/server";

import { getNewsModel } from "@/models/NewsSchema";
import { Params } from "@/types";
import { Connect } from "@/utils/connect";

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { category } = params;

  if (!category) {
    return NextResponse.json(
      { error: "category is required" },
      { status: 400 },
    );
  }

  const NewsModel = getNewsModel(category);

  if (!NewsModel) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  try {
    await Connect();
    const news = await NewsModel.find().limit(50).sort({ createdAt: -1 });

    return NextResponse.json({ news }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
