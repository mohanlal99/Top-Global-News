"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import SeeMoreButton from "../SeeMoreButton";

import { NewsSchemaType } from "@/types";
import { title } from "@/components/primitives";

const IndiaNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({ news }) => {
  const router = useRouter();

  return (
    <section className="mb-6">
      {/* Top India News Header */}

      <div className="relative text-center mb-3">
        <div className="inline-flex items-center space-x-2">
          <div className="h-0.5 w-16 bg-primary" />
          <h2 className="text-4xl font-bold text-primary">Top India News</h2>
          <div className="h-0.5 w-16 bg-primary" />
        </div>
      </div>

      {/* Main News Item */}
      <div className="flex flex-col ">
        <Card isBlurred className="col-span-2 bg-none " radius="none">
          <CardHeader className="">
            <Image
              removeWrapper
              alt={"inida news Image"}
              className="col-span-1 md:col-span-3  w-fit h-fit md:h-72 objectcover "
              src={news[0].imageUrl || "/tgnews.png"}
            />
          </CardHeader>

          <CardBody className="flex flex-col gap-3">
            {/* Mobile View: Image on the left, title on the right */}
            <div className="gap-6 flex items-center">
              <span className=" bg-secondary-100 text-md rounded-md font-medium capitalize w-fit px-3 py-1 ">
                {news[0].category}
              </span>
              <span>{new Date(String(news[0].updatedAt)).toDateString()}</span>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className={`${title({ size: "lg" })} font-bold`}>
                {news[0].title}
              </h1>
            </div>

            {/* Desktop View: Title at the top, image in the middle, content at the bottom */}

            <Button
              className="p-0 mb-1 col-span-3 md:col-span-1 flex items-center justify-center rounded-md w-full text-center border-default-500 border"
              color="primary"
              variant="bordered"
              onClick={() =>
                router.push(`/news/${news[0].category}/${news[0].slug}`)
              }
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardBody>
        </Card>

        {/* Secondary News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3  items-center mb-6 gap-6 md:gap-3 ">
          {news.slice(1, 4).map((item, index) => (
            <Card key={index} isBlurred radius="none">
              <Link
                className="text-default-500"
                href={`/news/${item.category}/${item.slug}`}
              >
                <CardBody className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-0">
                  <Image
                    removeWrapper
                    alt={String(item.content).slice(0, 100)}
                    className="w-full md:mb-2 h- col-span-1  rounded object-cover"
                    src={item.imageUrl || "/tgnews.png"}
                    width={270}
                  />
                  <h2 className="col-span-2 text-sm line-clamp-3">
                    {item.title}
                  </h2>
                </CardBody>
              </Link>
            </Card>
          ))}
        </div>

        {/* 'See More' Button */}
        <SeeMoreButton category="india" />
      </div>
    </section>
  );
};

export default IndiaNewsSection;
