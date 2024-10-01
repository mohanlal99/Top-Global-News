"use client";
import { useEffect } from "react";

import NewsSection from "./NewsSection";
import CricketNewsSection from "./seciton/CricketNewsSection";
import EnvironmentNewsSection from "./seciton/EnvironmentNewsSection";
import FreshNewsSection from "./seciton/FreshNewsSection";
import RightSection from "./seciton/RightSection";
import SportsNewsSection from "./seciton/SportsNewsSection";
import WebShortsSection from "./seciton/WebShortsSection";

import { useHomeNews } from "@/context/HomeContext";

const HomePage = () => {
  const news = useHomeNews();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (!news) return null;

  return (
    <div className="flex flex-col gap-6 px- space-y-3">
      <FreshNewsSection news={news?.trending} />
      <section className="grid gap-2 grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 md:col-span-4">
          <NewsSection news={news} />
        </div>
        <div className="flex col-span-1 md:col-span-2 h-fit">
          <RightSection news={news} />
        </div>
      </section>

      <EnvironmentNewsSection news={news?.environment} />
      <SportsNewsSection news={news?.sports} />
      <CricketNewsSection news={news?.cricket} />
      <WebShortsSection news={news} />
    </div>
  );
};

export default HomePage;
