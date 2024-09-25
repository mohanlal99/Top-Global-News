"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Image, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import SeeMoreButton from "../SeeMoreButton";

import { title } from "@/components/primitives";
import { NewsSchemaType } from "@/types";

const BusinessNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({
  news,
}) => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-3 mb-3 mt-3">
      <div className="relative text-center mb-3">
        <div className="inline-flex items-center space-x-2">
          <div className="h-0.5 w-16 bg-primary" />
          <h2 className="text-4xl font-bold text-primary">Business News</h2>
          <div className="h-0.5 w-16 bg-primary" />
        </div>
      </div>

      <Card
        isBlurred
        className="grid grid-cols-1 md:grid-cols-2 gap-3 "
        radius="none"
      >
        {news.slice(0, 2).map((item, index) => (
          <CardBody key={index} className="flex flex-col gap-6">
            {/* Mobile View: Image on the left, title on the right */}
            <Image
              removeWrapper
              alt={item.title}
              className="w-full h-60 md:h-64 object-cover "
              src={item.imageUrl || "/tgnews.png"}
            />
            <span className="border shadow-md text-xs capitalize w-fit px-3 py-1 ">
              {item.category}
            </span>
            <div className="flex flex-col justify-center line-clamp-2 h-20">
              <h2 className={`${title()} font-bold`}>{item.title}</h2>
            </div>

            {/* Desktop View: Title at the top, image in the middle, content at the bottom */}
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
              onClick={() => router.push(`/news/${item.category}/${item.slug}`)}
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardBody>
        ))}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 sm:gap-8 items-center">
        {news.slice(2, 6).map((item, index) => (
          <Card key={index} isBlurred radius="none">
            <Link
              className="text-default-500"
              href={`/news/${item.category}/${item.slug}`}
            >
              <CardBody className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-0">
                <Image
                  removeWrapper
                  alt={item.title}
                  className="w-full md:mb-2 md:h-32 col-span-1  rounded object-cover"
                  src={item.imageUrl || "/tgnews.png"}
                  width={270}
                />
                <h3 className="col-span-2 text-sm line-clamp-3">
                  {item.title}
                </h3>
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
      <SeeMoreButton category="business" />
    </section>
  );
};

export default BusinessNewsSection;
