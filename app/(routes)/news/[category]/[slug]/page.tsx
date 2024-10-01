import NewsDetails from "./components/NewsDetails";

import { NewsProvider } from "@/context/NewsContext";
import { getNewsByCategory, getNewsBySlug } from "@/lib/api";
import { NewsSchemaType, Params } from "@/types";

export async function generateMetadata({ params }: { params: Params }) {
  const { category, slug } = params;
  const newsInfo: NewsSchemaType = await getNewsBySlug({ category, slug });

  return {
    title: `${newsInfo.title} - ${newsInfo.category} News - ${process.env.WEBSITE_NAME}`,
    description: `Read the latest news about ${newsInfo.category}: ${newsInfo.title}. Stay informed with TG-NEWS.`,
    keywords: `${newsInfo.keywords && newsInfo?.keywords}, ${newsInfo.category}, latest news, ${newsInfo.title} today news , india culture news breaking world news,breaking world news today,international news,latest world breaking news,latest world news,world news,world news online,world news today,world news update,world breaking news,latest international news,international news headlines`,
    openGraph: {
      title: `${newsInfo.title} - ${newsInfo.category} News`,
      description: `Get the latest insights and updates on ${newsInfo.category} with this article: ${newsInfo.title}.`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${category}/${slug}`,
      images: [
        {
          url: newsInfo.imageUrl,
          alt: newsInfo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${newsInfo.title} - ${newsInfo.category} News`,
      description: `Get the latest insights and updates on ${newsInfo.category} with this article: ${newsInfo.title}.`,
      images: [
        {
          url: newsInfo.imageUrl,
          alt: newsInfo.title,
        },
      ],
    },
  };
}

const NewsBySlug = async ({ params }: { params: Params }) => {
  const { category, slug } = params;
  let newsInfo: NewsSchemaType | null;

  try {
    newsInfo = await getNewsBySlug({ category, slug });
  } catch {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Failed to load news. Please try again later.</p>
      </div>
    );
  }
  const news: NewsSchemaType[] = await getNewsByCategory(category);

  if (!news || news.length === 0 || !newsInfo) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No news available for this category.</p>
      </div>
    );
  }

  return (
    <NewsProvider initialNews={news}>
      <NewsDetails newsInfo={newsInfo} />
    </NewsProvider>
  );
};

export default NewsBySlug;
