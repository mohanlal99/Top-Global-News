import { NextRequest, NextResponse } from "next/server";

import { getNewsModel } from "@/models/NewsSchema";
import { CategoryType, NewsSchemaType } from "@/types";
import { Connect } from "@/utils/connect";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { _id, category }: NewsSchemaType = await req.json();

    // Validate the inputs
    if (!_id && !category) {
      return NextResponse.json(
        { message: "News ID is required for deletion." },
        { status: 400 },
      );
    }

    // Establish database connection
    await Connect();

    // Get the corresponding News Model based on the category
    const NewsModel = getNewsModel(category as CategoryType);

    if (!NewsModel) {
      return NextResponse.json(
        { error: "Invalid category provided." },
        { status: 400 },
      );
    }

    // Find and delete the news item by its ID
    const deletedNews = await NewsModel?.findByIdAndDelete(_id);

    // Check if the news item was found and deleted
    if (!deletedNews) {
      return NextResponse.json(
        { error: "News item not found." },
        { status: 404 },
      );
    }

    // Return a success response
    return NextResponse.json(
      { message: "News item deleted successfully.", deletedNews },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while deleting the news item.", error },
      { status: 500 },
    );
  }
}
