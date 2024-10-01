"use client";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { NewsSchemaType } from "@/types";

const EnvironmentNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({
  news,
}) => {
  const router = useRouter();

  return (
    <div className="py-6">
      {/* Container for the news section */}
      <div className="bg-secondary-100 dark:bg-primary-50 w-full h-full md:px-6 px-3 py-4">
        {/* Section Title */}
        <div className="relative text-center mb-8">
          <div className="flex items-center text-center justify-center space-x-2">
            <div className="h-0.5 w-16 bg-red-500" />
            <h2 className="text-red-500 text-3xl font-bold">Environment</h2>
            <div className="h-0.5 w-16 bg-red-500" />
          </div>
          <p className="text-gray-900 dark:text-success-900 mt-2">
            Explore the latest news and updates in the environment sector.
          </p>
        </div>

        {/* Featured News Section */}
        <Card isFooterBlurred className="relative w-full h-72 md:h-96 mb-8">
          {/* Image with overlay */}
          <CardBody>
            <Link
              className="block h-full w-full"
              href={`/news/${news[0]?.category}/${news[0]?.slug}`}
            >
              <Image
                removeWrapper
                alt={news[0]?.title}
                className="h-full w-full object-cover rounded-md"
                src={news[0]?.imageUrl || "/tgnews.png"}
              />
              <div className="z-10 absolute inset-0  rounded-md p-6 flex flex-col justify-end">
                <span className="border bg-slate-100 dark:bg-slate-900 text-xs capitalize w-fit px-3 py-1 ">
                  {news[0]?.category}
                </span>
                <span className="font-medium text-default-900 ">
                  {news[0]?.updatedAt
                    ? `Published on ${new Date(news[0]?.updatedAt).toDateString()}`
                    : ""}
                </span>
                <h3 className="font-bold text-2xl mt-1 md:w-10/12">
                  {news[0]?.title}
                </h3>
              </div>
            </Link>
          </CardBody>
        </Card>

        {/* Other News Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.slice(1, 9).map((item, index) => (
            <Link
              key={index}
              className="text-sm "
              href={`/news/${item?.category}/${item?.slug}`}
            >
              <div className="grid grid-cols-3 gap-2 hover:shadow-lg justify-between dark:bg-gray-900 bg-default-300 rounded-md p-2 pt-3">
                <Image
                  removeWrapper
                  alt={item?.title}
                  className="w-full h-auto  rounded-md object-cover mb-2"
                  height={70}
                  src={item?.imageUrl || "/tgnews.png"}
                />
                <div className="col-span-2 flex flex-col justify-">
                  <h3 className="text-sm font-medium mb-1 line-clamp-2 overflow-hidden">
                    {item?.title}
                  </h3>
                  <span className="bg-blue-600 w-fit text-white text-xs capitalize px-2 py-1">
                    {item?.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Button
          className="flex bg-blue-700 hover:opacity-90 text-white gap-3 w-fit items-center text-center border p-2 rounded-md"
          color="secondary"
          variant="bordered"
          onClick={() => router.push("/news/environment")}
        >
          See More <ArrowUpRightFromSquare className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default EnvironmentNewsSection;
