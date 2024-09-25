import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import { BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";

import SeeMoreButton from "../SeeMoreButton";

import { NewsSchemaType } from "@/types";

const SportsNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({ news }) => {
  const router = useRouter();

  return (
    <section className="py-6 px-6">
      {/* Sports News Section Header */}
      <div className="flex items-center justify-center gap-2 text-center mb-6">
        <div className="h-0.5 w-16 bg-primary" />

        <h2 className="text-2xl font-bold md:text-3xl text-center">
          Sports News
        </h2>
        <BadgeCheck className="text-blue-500 w-6 h-6" />
        <div className="h-0.5 w-16 bg-primary" />
      </div>

      {/* News Items in a Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.slice(0, 10).map((item, index) => (
          <Card
            key={index}
            className="grid grid-cols-3 gap-2 items- md:items-start p-1"
          >
            <Image
              removeWrapper
              alt={item.title}
              className="md:w-48 md:h-fit object-cover col-span-1"
              src={item.imageUrl || "/tgnews.png"}
            />
            <div className="flex flex-col justify-between col-span-2">
              {/* News Label or Category */}
              {/* <span className="text-sm uppercase text-blue-500 font-semibold">
                {item.category}
              </span> */}

              {/* News Title */}
              <h3 className="text-sm md:text-lg line-clamp-2 h-fit ">
                {item.title}
              </h3>

              {/* Read More Link */}
              <Button
                className="hover:underline w-fit"
                color="primary"
                size="sm"
                variant="bordered"
                onClick={() =>
                  router.push(`/news/${item.category}/${item.slug}`)
                }
              >
                READ MORE
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* 'Read More' Button */}
      <SeeMoreButton category="sports" />
    </section>
  );
};

export default SportsNewsSection;
