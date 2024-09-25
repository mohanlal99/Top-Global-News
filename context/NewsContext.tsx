"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { NewsSchemaType } from "@/types";

type NewsContextType = {
  news: NewsSchemaType[];
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({
  initialNews,
  children,
}: {
  initialNews: NewsSchemaType[];
  children: ReactNode;
}) => {
  const [news] = useState<NewsSchemaType[]>(initialNews);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);

  return context?.news;
};
