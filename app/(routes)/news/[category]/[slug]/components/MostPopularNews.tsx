"use client";
import { Button, Image } from "@nextui-org/react";
import {
  ArrowDownLeftFromSquare,
  LoaderIcon,
  LucideArrowBigDownDash,
} from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Liner from "../../../components/Liner";

import SocialMediaIcon from "@/app/components/SocialMediaIcon";
import { useNews } from "@/context/NewsContext";

const MostPopularNews: React.FC<{ slug: string }> = ({ slug }) => {
  const news = useNews();
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});
  const toggleReadMore = (slug: string) => {
    setIsExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  if (!news) return <div>News Not Found</div>;

  return (
    <section className="py-10">
      {!news.length ? (
        <div className="flex justify-center items-center h-64">
          <LoaderIcon className="animate-spin text-primary-500 w-8 h-8" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:gap-8">
          {news
            .filter((i) => i.slug !== slug)
            .slice(0, 10)
            .map((item, index) => (
              <React.Fragment key={item.slug + index}>
                {index !== 0 && (
                  <div className="flex text-primary flex-col items-center justify-center text-center px-2 text-md">
                    <Liner name="Next story " />{" "}
                    <span className="animate-bounce">
                      <LucideArrowBigDownDash />{" "}
                    </span>
                  </div>
                )}
                <div className="relative border overflow-hidden hover:z-10 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <Image
                      alt={item.title}
                      className="w-full relative flex items-center justify-center h-full sm:h-48 object-cover rounded-t-lg"
                      src={item.imageUrl}
                    />
                    {item.createdAt && (
                      <p className="absolute top-2 right-2 z-20 bg-default-50 border p-1 rounded-full text-primary-900 font-medium">
                        {new Date(item.createdAt).toDateString()}
                      </p>
                    )}
                  </div>

                  <div className="p-2 flex flex-col relative  justify-center">
                    <h1 className="text-xl font-bold text-primary-900  leading-tight mb-2 line-clamp-2">
                      {item.title}
                    </h1>

                    <div className="flex flex-wrap sm:flex-row space-x-3 items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <p className="text-xs px-3 py-1 rounded-full uppercase shadow-md bg-purple-500 text-white font-bold">
                        {item.category}
                      </p>
                      {/* <p className="flex items-center gap-2">
                        <span className="font-medium capitalize">
                          {item.author}
                        </span>
                        <CheckCircle className="w-4 h-4 text-primary-400" />
                      </p> */}
                      <SocialMediaIcon />
                      <p className="text-xs text-gray-500 dark:text-gray-300">
                        {item.updatedAt
                          ? `Published on ${new Date(item.updatedAt).toDateString()}`
                          : ""}
                      </p>
                    </div>

                    <div
                      className={`text-sm text-default-700 dark:text-default-300  font-bold flex flex-col gap-6 leading-6  transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded[item.slug] ? "max-h-none" : "max-h-24"
                      }`}
                    >
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {item.content}
                      </ReactMarkdown>
                    </div>

                    <Button
                      className=" absolute right-2 bg-default bottom-2 dark:bg-primary-50 px-5 mt-4 self-start text-primary-900 dark:text-primary-400"
                      size="sm"
                      variant="bordered"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent Card onClick from triggering
                        toggleReadMore(item.slug);
                      }}
                    >
                      {isExpanded[item.slug] ? "Show Less" : "Read More"}{" "}
                      <ArrowDownLeftFromSquare />
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      )}
    </section>
  );
};

export default MostPopularNews;
