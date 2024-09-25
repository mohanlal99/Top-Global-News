import React from "react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

import SeeMoreButton from "../SeeMoreButton";

import { NewsSchemaType } from "@/types";

const EducationNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({
  news,
}) => {
  const router = useRouter();

  return (
    <section className="py-6">
      {/* Education News Section Header */}
      <div className="flex items-center justify-center gap-2 py-3 text-center">
        <div className="h-0.5 w-16 bg-primary" />
        <BookOpen className="text-blue-500 w-6 h-6" />

        <h2 className="text-2xl font-bold md:text-3xl text-center">
          Top Education News
        </h2>
        <BookOpen className="text-blue-500 w-6 h-6" />
        <div className="h-0.5 w-16 bg-primary" />
      </div>

      {/* Main Education News Item */}
      <div className="flex flex-col gap-2 mt-4">
        <Card className="mb-8 col-span-2" radius="sm">
          <CardBody className="p-6">
            <h1 className="text-md md:text-3xl  mb-4">
              {news[0]?.title || ""}
            </h1>
            <Image
              isBlurred
              alt={news[0].title}
              className="w-full h-40 md:h-64 object-cover mb-3"
              src={news[0].imageUrl || "/tgnews.png"}
            />

            <Button
              className="flex w-fit dark:text-lime-600 items-center"
              color="secondary"
              variant="bordered"
              onClick={() =>
                router.push(`/news/${news[0].category}/${news[0].slug}`)
              }
            >
              Read More <BookOpen />
            </Button>
          </CardBody>
        </Card>

        {/* Additional Education News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {news.slice(1, 11).map((item, index) => (
            <Card key={index}>
              <CardBody className="">
                <Image
                  removeWrapper
                  alt={item.title}
                  className="w-full mb-2 h-40 rounded object-cover"
                  height={200}
                  src={item.imageUrl || "/tgnews.png"}
                  width={400}
                />
                <h2 className="text-lg line-clamp-2 h-fit font-semibold mb-2">
                  {item.title}
                </h2>
                <Button
                  className="flex w-fit dark:text-lime-600 items-center"
                  color="secondary"
                  variant="bordered"
                  onClick={() =>
                    router.push(`/news/${item.category}/${item.slug}`)
                  }
                >
                  Read More <BookOpen />
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* 'See More' Button */}
      <SeeMoreButton category="education" />
    </section>
  );
};

export default EducationNewsSection;
