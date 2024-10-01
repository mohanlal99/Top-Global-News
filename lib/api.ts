import { unstable_cache } from "next/cache";

import { CategoryType, NewsSchemaType } from "@/types";

export const fetchNewsByCategory = async (category: CategoryType) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${category}`,
      {
        method: "GET",
        cache: "default",
      },
    );

    if (!response.ok) {
      return [];
    }
    const { news }: { news: NewsSchemaType[] } = await response.json();

    return news || [];
  } catch {
    return [];
  }
};

export const fetchNewsBySlug = async ({
  category,
  slug,
}: {
  category: CategoryType;
  slug: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${category}/${slug}`,
      {
        method: "GET",
        cache: "default",
      },
    );

    if (!response.ok) {
      return [];
    }
    const { news } = await response.json();

    return news;
  } catch {
    return [];
  }
};

export async function fetchMultipleCategories(
  categories: string[],
): Promise<{ [key: string]: NewsSchemaType[] }> {
  const promises = categories.map((category) =>
    getNewsByCategory(category as CategoryType),
  );
  const results = await Promise.all(promises);

  return categories.reduce(
    (acc, category, index) => {
      acc[category] = results[index];

      return acc;
    },
    {} as { [key: string]: NewsSchemaType[] },
  );
}

export const getNewsByCategory = unstable_cache(
  async (category: CategoryType) => {
    return await fetchNewsByCategory(category);
  },
  ["news", "category"], // Cache key tags
  { revalidate: 30, tags: ["news"] }, // Revalidate every 3600 seconds (1 hour)
);

export const getNewsBySlug = unstable_cache(
  async ({ category, slug }: { category: CategoryType; slug: string }) => {
    return await fetchNewsBySlug({ category, slug });
  },
  ["news", "slug"], // Cache key tags
  { revalidate: 360, tags: ["news"] }, // Revalidate every hour
);

export const getMultipleCategoriesNews = unstable_cache(
  async (categories: CategoryType[]) => {
    return await fetchMultipleCategories(categories);
  },
  ["news", "multiple-categories"], // Cache key tags
  { revalidate: 30, tags: ["news"] }, // Revalidate every 3600 seconds
);

// delete api
