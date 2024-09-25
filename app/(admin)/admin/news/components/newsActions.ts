import { CategoryType } from "@/types";

// Type for news data used in state management
export type NewsData = {
  title: string;
  content: string;
  category: CategoryType;
  keywords: string;
  imageUrl: string;
};

// Define categories array more concisely
export const categories: { key: CategoryType; label: string }[] = [
  { key: "india", label: "India" },
  { key: "sports", label: "Sports" },
  { key: "national", label: "National" },
  { key: "political", label: "Political" },
  { key: "cricket", label: "Cricket" },
  { key: "world", label: "World" },
  { key: "business", label: "Business" },
  { key: "trending", label: "Trending" },
  { key: "education", label: "Education" },
  { key: "environment", label: "Environment" },
];
