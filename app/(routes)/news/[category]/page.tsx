import Liner from "../components/Liner";

import MostPopularNews from "./components/MostPopularNews";
import NewsList from "./components/NewsList";

import { NewsProvider } from "@/context/NewsContext";
import { getNewsByCategory } from "@/lib/api";
import { NewsSchemaType, Params } from "@/types";

export async function generateMetadata({ params }: { params: Params }) {
  const { category } = params;

  return {
    title: `${category.toUpperCase()} News |`,
    description: `Stay updated with the latest news and updates from the ${category} category. Read comprehensive coverage, in-depth articles, and trending stories on ${category} news.`,
    keywords: `latest ${category} news, breaking ${category} news, ${category} headlines, trending ${category} stories, global ${category} news, top news today , live ${category} news , live watching ${category} `,
    openGraph: {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} News`,
      description: `Explore the latest updates, stories, and articles in the ${category} News. Stay informed with top news and trends.`,
      url: `${process.env.WEBSITE_NAME}/news/${category}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} News - Latest Headlines`,
      description: `Get the most recent updates in the ${category} category. Stay informed with the latest news and trends.`,
    },
  };
}

const NewsByCategory = async ({ params }: { params: Params }) => {
  const { category } = params;
  let news: NewsSchemaType[] | null = null;

  try {
    news = await getNewsByCategory(category);
  } catch {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Failed to load news. Please try again later.</p>
      </div>
    );
  }
  const news2: NewsSchemaType[] = await getNewsByCategory("india");

  if (!news || news.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No news available for this category.</p>
      </div>
    );
  }

  return (
    <NewsProvider initialNews={news}>
      <NewsList />
      <div className="flex flex-col gap-6 py-6">
        <Liner name="top Trending News" />
        <MostPopularNews news={news2} />
      </div>
    </NewsProvider>
  );
};

export default NewsByCategory;
