import { unstable_cache } from "next/cache";

import { fetchNewsByCategory } from "@/lib/api";
import { CategoryType, NewsSchemaType } from "@/types";

export const categories: CategoryType[] = [
  "india",
  "sports",
  "national",
  "political",
  "cricket",
  "world",
  "business",
  "trending",
  "education",
  "environment",
];

export const fetchAllNews = async (): Promise<{
  [key in CategoryType]: NewsSchemaType[];
}> => {
  const newsData: { [key in CategoryType]: NewsSchemaType[] } = {} as {
    [key in CategoryType]: NewsSchemaType[];
  };

  for (const category of categories) {
    const news = await fetchNewsByCategory(category);

    newsData[category] = news || [];
  }

  return newsData;
};

export const getAllNews = unstable_cache(
  async () => {
    return await fetchAllNews();
  },
  ["news"],
  { revalidate: 60, tags: ["news"] },
);
