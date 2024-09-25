import React from "react";

import BusinessNewsSection from "./seciton/BusinessNewsSection";
import InidaNewsSection from "./seciton/InidaNewsSection";
import WorldNewsTabs from "./seciton/WorldNewsTabs";
import EducationNewsSection from "./seciton/EducationNewsSection";

import Loader from "@/components/Loader";
import { CategoryType, NewsSchemaType } from "@/types";

const NewsSection: React.FC<{
  news: { [key in CategoryType]: NewsSchemaType[] };
}> = ({ news }) => {
  if (!news) return <Loader />;

  return (
    <div className="flex flex-col gap-3 lg:gap-6  ">
      {/* India News Section  */}
      <InidaNewsSection news={news.india} />
      <BusinessNewsSection news={news.business} />
      <WorldNewsTabs news={news} />
      <EducationNewsSection news={news.education} />
      {/* Cricket News Section  */}
    </div>
  );
};

export default NewsSection;
