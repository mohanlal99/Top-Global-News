import { Image, Link } from "@nextui-org/react";
import React from "react";

import SeeMoreButton from "../SeeMoreButton";

import { NewsSchemaType } from "@/types";
const CricketNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({ news }) => {
  return (
    <section className="py-8 px-3">
      {/* Top Heading */}

      <div
        className="flex flex-col gap-6 items-center p-6 justify-center  shadow-md"
        id="cricket"
      >
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center space-x-2">
            <div className="h-0.5 w-16 bg-success-500" />
            <h2 className="text-purple-500 text-3xl font-bold">Cricket</h2>
            <div className="h-0.5 w-16 bg-success-500" />
          </div>
        </div>
        <div className="text-xl text-blue-700 dark:text-warning-300">
          Latest Updates on Environmental News and Global Trends
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Left Column: Full display of the first cricket news */}
        <div className="relative col-span-2 overflow-hidden bg-gradient-to-t from-cyan-400 to-blue-500">
          <Link
            className="block w-full group"
            href={`/news/${news[0].category}/${news[0].slug}`}
          >
            {/* Image */}
            <Image
              removeWrapper
              alt={news[0].title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={news[0].imageUrl || "/tgnews.png"}
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full capitalize border border-white">
              {news[0].category}
            </div>

            {/* Title and Updated Date */}
            <div className="absolute z-10 bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-6 w-full">
              <h3 className="text-xl font-semibold line-clamp-2 group-hover:underline">
                {news[0].title}
              </h3>
              <div className="text-sm text-white mt-2">
                {news[0].updatedAt && (
                  <span className="font-medium ">
                    {news[0].updatedAt
                      ? `Published on ${new Date(news[0].updatedAt).toDateString()}`
                      : ""}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column: Smaller news articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2  col-span-3 gap-2">
          {news.slice(1, 5).map((item) => (
            <Link
              key={item._id}
              className="group flex items-center overflow-hidden dark:bg-gray-900 border border-gray-300 dark:border-gray-700  transition-shadow duration-300"
              href={`/news/${item.category}/${item.slug}`}
            >
              <Image
                isBlurred
                isZoomed
                removeWrapper
                alt={item.title}
                className="object-cover h-full w-full "
                radius="none"
                src={item.imageUrl || "/tgnews.png"}
              />
              <div className="absolute z-10 bottom-0 left-0 bg-gradient-to-tr dark:from-black from-white to-transparent text-default-900 p-2 w-full">
                <h3 className="text-xl font-semibold line-clamp-2 group-hover:underline">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-300 mt-2">
                  {item.updatedAt && (
                    <span className="font-medium text-default-900 ">
                      {item.updatedAt
                        ? `Published on ${new Date(item.updatedAt).toDateString()}`
                        : ""}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <SeeMoreButton category="cricket" />
    </section>
  );
};

export default CricketNewsSection;
