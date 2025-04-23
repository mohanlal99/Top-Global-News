"use client";
import { fetchNewsApiOnSite } from "@/lib/newsapi/newsapi";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Image } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export type NewsApiData = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface NewsApiDataType {
  articles: NewsApiData[];
}

const NewsApiSection = () => {
  const [data, setData] = useState<NewsApiDataType | null>(null);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const fetchedData: NewsApiDataType = await fetchNewsApiOnSite();
        console.log(fetchedData);
        setData(fetchedData); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    dataFetching(); // Call the fetching function
  }, []);

  return (
    <div>
      {data &&
        data.articles.map((item, index) => (
          <Card
            isBlurred
            className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 "
            radius="none"
            key={index} // Move key to Card component
          >
            <CardBody className="flex flex-col gap-6">
              <Image
                removeWrapper
                alt={item.title}
                className="w-full h-48 md:h-64 object-cover "
                src={item.urlToImage || "/tgnews.png"}
              />
              <div className="flex flex-col justify-center line-clamp-2 h-20">
                <h2 className={`font-bold`}>{item.title}</h2>
              </div>
              <div className="hidden md:block">
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="text-sm line-clamp-2 sm:text-base capitalize text-default-500"
                />
              </div>
              <Button
                className="p-0 mb-1 col-span-3 md:col-span-1 flex items-center justify-center rounded-md w-full text-center border-default-500 border"
                color="primary"
                variant="bordered"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default NewsApiSection;
