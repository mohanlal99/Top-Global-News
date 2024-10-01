"use client";
import { Link } from "@nextui-org/link";
import { Button, Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

import Liner from "./Liner";

import { NewsSchemaType } from "@/types";

interface SidebarProps {
  newsData: { [key: string]: NewsSchemaType[] };
}

const Sidebar: React.FC<SidebarProps> = ({ newsData }) => {
  const categories = Object.keys(newsData);
  const pathName = usePathname();

  // Get the current category from the pathname
  const currentCategory = pathName.split("/")[2];

  return (
    <aside className="sticky max-w-sm top-0 px-2 rounded-lg dark:bg-gray-900">
      {categories
        .filter(
          (category) =>
            category !== currentCategory && newsData[category]?.length > 0, // Show only categories with news
        )
        .map((category) => (
          <div
            key={category}
            className="space-y-2 mb-6 shadow-2xl p-2 rounded-md "
          >
            <h2 className="text-lg capitalize font-semibold dark:text-primary-dark  md:text-xl md:font-medium">
              <Liner name={`${category} News`} />
            </h2>
            {newsData[category]?.slice(0, 5).map((news, index) => (
              <div
                key={news._id}
                className="border-b border-gray-300 pb-3 mb-3 hover:shadow-md rounded-md transition-shadow dark:border-gray-700"
              >
                <Link href={`/news/${category}/${news.slug}`}>
                  <div className="flex flex-col gap-2 cursor-pointer">
                    {index === 0 && news.imageUrl && (
                      <div className="flex-shrink-0">
                        <Image
                          alt={news.title}
                          className="object-cover rounded-md w-full"
                          height={200} // Adjust the height as needed
                          src={news.imageUrl}
                          width={300} // Adjust the width as needed
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-1 rounded-md dark:hover:bg-gray-800 transition-colors">
                      {index !== 0 && news.imageUrl && (
                        <div className="flex-shrink-0">
                          <Image
                            alt={news.title}
                            className="object-cover rounded-md w-full h-full"
                            height={50} // Set a fixed height for the image
                            src={news.imageUrl}
                            width={70} // Adjust the width as needed
                          />
                        </div>
                      )}
                      <h3 className="text-[12px] font-medium text-default-500  hover:underline hover:text-default-600 py-2 dark:hover:text-primary-hover transition-colors line-clamp-3 overflow-hidden text-ellipsis">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {/* "See More" Button */}
            {newsData[category]?.length > 5 && (
              <div className="flex justify-end mt-3">
                <Button
                  as={Link}
                  className="text-primary dark:text-primary-dark"
                  href={`/news/${category}`}
                  size="sm"
                  variant="ghost"
                >
                  See More
                </Button>
              </div>
            )}
          </div>
        ))}
    </aside>
  );
};

export default Sidebar;
