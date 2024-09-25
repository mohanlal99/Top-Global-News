"use client";

import { BreadcrumbItem, Breadcrumbs, Image, Link } from "@nextui-org/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Liner from "../../../components/Liner";

import MostPopularNews from "./MostPopularNews";

import { NewsSchemaType } from "@/types";
import { title } from "@/components/primitives";
import SocialMediaIcon from "@/app/components/SocialMediaIcon";

const NewsDetails: React.FC<{ newsInfo: NewsSchemaType }> = ({ newsInfo }) => {
  return (
    <>
      <section className="flex flex-col gap-2 shadow-md px-2 pb-6 rounded-md">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/news/${newsInfo.category}`}>{newsInfo.category}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="flex items-center justify-center">
            <p className="w-24 overflow-hidden">{newsInfo.title}</p>...
          </BreadcrumbItem>
        </Breadcrumbs>

        {/* Title */}
        <h1 className={`${title({ size: "lg" })} font-bold`}>
          {newsInfo.title}
        </h1>

        {/* Image */}
        {newsInfo.imageUrl && (
          <Image
            alt={newsInfo.title}
            className="object-cover w-fit md:w-full h-fit sm:h-72"
            src={newsInfo.imageUrl}
          />
        )}
        {/* Category, Author, and Date */}
        <div className="flex flex-col  text-sm text-gray-600 py-2">
          {/* Category */}
          <div className="flex items-center border-b pb-2 gap-3 font-mono">
            <span className="capitalize text-lg">{newsInfo.category}</span>

            {/* Author */}
            <span className="text-default-500  flex gap-2 items-center">
              By{" "}
              <Link className="hover:underline" href="/">
                TG-NEWS
              </Link>
            </span>
          </div>
          {/* Publication Date */}
          <div className="flex gap-2 justify-between items-center py-3">
            {newsInfo.createdAt && (
              <span className="text-default-500 font-bold">
                Published on {new Date(newsInfo.createdAt).toLocaleDateString()}
              </span>
            )}
            <SocialMediaIcon />
          </div>
        </div>

        {/* Content with Markdown support */}
        <div className="flex flex-col gap-6 leading-7 capitalize">
          <ReactMarkdown
            className={"flex flex-col gap-3"}
            rehypePlugins={[rehypeRaw]}
          >
            {newsInfo.content}
          </ReactMarkdown>
        </div>
      </section>
      <section className="text-center">Advertiesment</section>
      <section className="flex flex-col gap-2 shadow-md md:px-2 pb-6 rounded-md pt-2">
        <Liner name="most popular" />
        <MostPopularNews slug={newsInfo.slug} />
      </section>
    </>
  );
};

export default NewsDetails;
