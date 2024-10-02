import { NextResponse } from "next/server";

import { NewsData } from "./newsActions";

export const saveImageAWS = async (image: File) => {
  try {
    const formData = new FormData();

    formData.append("image", image);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/news/imageupload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      return NextResponse.json({ error: "image saving in error" });
    }
    const result = await response.json();


    return result;
  } catch (error) {
    return NextResponse.json({
      error: String(error) || "something went worng",
    });
  }
};

export const saveNewsData = async (newsData: NewsData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL!}/api/news/save`,
      {
        method: "POST",
        cache: "force-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsData),
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 401 },
      );
    }

    return await res.json();
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
};
