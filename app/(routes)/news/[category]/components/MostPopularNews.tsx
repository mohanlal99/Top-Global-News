"use client";
import { Button, Card, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { NewsSchemaType } from "@/types";

const MostPopularNews: React.FC<{ news: NewsSchemaType[] }> = ({ news }) => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-3 md:gap-6">
      {news.slice(0, 20).map((item) => (
        <Card
          key={item.title}
          className="grid grid-cols-3 gap-2 items-start p-1"
        >
          <Image
            removeWrapper
            alt={item.title}
            className="md:w-48 h-fit object-cover col-span-1"
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
              onClick={() => router.push(`/news/${item.category}/${item.slug}`)}
            >
              READ MORE
            </Button>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default MostPopularNews;
