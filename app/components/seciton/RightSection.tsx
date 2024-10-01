"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { LucideTelescope } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { categories } from "@/lib/fetchNews";
import { CategoryType, NewsSchemaType } from "@/types";

const RightSection: React.FC<{
  news: { [key in CategoryType]: NewsSchemaType[] };
}> = ({ news }) => {
  const router = useRouter();

  // Handle case when no news is available
  if (!news) return null;

  // Ensure we are accessing valid news data; map and check if news exists for that category
  const newsItem = categories
    .map((category) => news[category]?.[1]) // Safely access the first news item
    .filter((item) => item); // Filter out undefined or null items

  return (
    <div className=" mb-3">
      <h2 className="text-3xl w-full justify-center text-fuchsia-400 font-bold mb-3 flex gap-2 items-center">
        Latest News <LucideTelescope />
      </h2>
      <div className="w-full shadow-lg  mb-3 pb-4">
        {/* News list */}
        <ul className="space-y-4 px-6 list-disc ">
          {newsItem.map((item, index) => (
            <li key={index} className="">
              <Link
                className="flex items-center gap-2"
                href={`/news/${item?.category}/${item?.slug}`}
              >
                {/* Timestamp */}

                {/* News title */}
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-medium line-clamp-3 h-fit text-default-800 hover:text-blue-600 transition-colors">
                    {item?.title}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* 'See All' Button */}
        <div className="mt-6 text-center">
          <Button
            color="secondary"
            radius="none"
            variant="shadow"
            onClick={() => router.push(`/news/${"world"}`)}
          >
            See All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
