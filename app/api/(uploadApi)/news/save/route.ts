import { NextRequest, NextResponse } from "next/server";

import { NewsData } from "@/app/(admin)/admin/news/components/newsActions";
import { getNewsModel } from "@/models/NewsSchema";
import { Connect } from "@/utils/connect";

export async function POST(req: NextRequest) {
  const { title, content, imageUrl, category, keywords }: NewsData =
    await req.json();

  if (!title || !content || !keywords || !imageUrl || !category) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  const NewsModel = getNewsModel(category);

  if (!NewsModel) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  const slug = title
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^a-z0-9-]/g, "");

  try {
    await Connect();
    const newNews = new NewsModel({
      title,
      content,
      category,
      keywords,
      author: "mohanlal",
      imageUrl,
      slug,
    });

    await newNews.save();

    return NextResponse.json(
      { message: "News article saved successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Invalid Entry: ${error}` },
      { status: 400 },
    );
  }
}
