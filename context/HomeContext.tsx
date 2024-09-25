"use client";
import React, { createContext, ReactNode, useContext } from "react";

import { CategoryType, NewsSchemaType } from "@/types";

interface HomeContextType {
  news: { [key in CategoryType]: NewsSchemaType[] } | null;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider: React.FC<{
  news: { [key in CategoryType]: NewsSchemaType[] };
  children: ReactNode;
}> = ({ news, children }) => {
  return (
    <HomeContext.Provider value={{ news }}>{children}</HomeContext.Provider>
  );
};

export const useHomeNews = () => {
  const context = useContext(HomeContext);

  return context?.news;
};
