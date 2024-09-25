import { NextRequest, NextResponse } from "next/server";

import { getNewsModel } from "@/models/NewsSchema";
import { Params } from "@/types";
import { Connect } from "@/utils/connect";

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { category, slug } = params;
  const NewsModel = getNewsModel(category);

  if (!category || !slug) {
    return NextResponse.json(
      { error: "category and slug is required" },
      { status: 400 },
    );
  }
  if (!NewsModel) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }
  try {
    await Connect();
    const news = await NewsModel.findOne({ slug });

    if (!news) {
      return NextResponse.json({ error: "News Not Found" }, { status: 400 });
    }

    return NextResponse.json({ news }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
