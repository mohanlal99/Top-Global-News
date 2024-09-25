"use client";

import { Button, Card, CardBody, Image, Progress } from "@nextui-org/react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Share2,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import { categories } from "@/lib/fetchNews";
import { CategoryType, NewsSchemaType } from "@/types";

const WebShortsSection: React.FC<{
  news: { [key in CategoryType]: NewsSchemaType[] };
}> = ({ news }) => {
  const router = useRouter();

  const [currentStory, setCurrentStory] = useState<NewsSchemaType | null>(null);
  const [isPlay, setIsPlay] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(7);

  const handlePush = (currentStory: NewsSchemaType) => {
    setCurrentStory(null);
    router.push(`/news/${currentStory.category}/${currentStory.slug}`);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlay && currentStory) {
      setTimeLeft(timeLeft);
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleNext();

            return 7;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [currentStory, isPlay]);

  const handlePlayTogle = () => setIsPlay(!isPlay);

  const handleStoryClick = (story: NewsSchemaType) => {
    setCurrentStory(story);
  };

  const handleNext = () => {
    const currentIndex = cricketNews.findIndex(
      (item) => item._id === currentStory?._id,
    );
    const nextIndex = (currentIndex + 1) % cricketNews.length;

    setCurrentStory(cricketNews[nextIndex]);
    setTimeLeft(7);
  };

  const handlePrevious = () => {
    const currentIndex = cricketNews.findIndex(
      (item) => item._id === currentStory?._id,
    );
    const previousIndex =
      (currentIndex - 1 + cricketNews.length) % cricketNews.length;

    setCurrentStory(cricketNews[previousIndex]);
    setTimeLeft(7);
  };

  if (!news) return <Loader />;
  const cricketNews = categories.map((item) => news[item][0]);

  return (
    <div className="container mx-auto p-3 py-6 " id="shorts">
      <div className="relative text-center mb-8">
        <div className="inline-flex items-center space-x-2">
          <div className="h-0.5 w-16 bg-primary" />
          <h2 className="text-4xl font-bold text-primary">Web Short Story</h2>
          <div className="h-0.5 w-16 bg-primary" />
        </div>
        <p className="text-pink-500 mt-2">
          Stay updated with the latest trending stories in the All world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        {cricketNews.slice(0, 8).map((item) => (
          <Card
            key={item._id}
            className="border-none h-[500px] bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg"
            onClick={() => router.push(`/news/${item.category}/${item.slug}`)}
          >
            <CardBody
              className="relative cursor-pointer h-full items-center flex justify-center"
              onClick={() => handleStoryClick(item)}
            >
              <Image
                isBlurred
                isZoomed
                alt={item.title}
                className="rounded-lg object-contain w-full"
                src={item.imageUrl}
              />
              <div className="absolute bottom-0 text-white left-0 p-2  z-10 m-3 backdrop-blur-xl">
                <p className="px-2 mt-2 bg-gradient-to-r from-black to-violet-950 w-fit capitalize">
                  {item.category}
                </p>
                <p className="text-sm font-semibold line-clamp-2">
                  {item.title}
                </p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      {currentStory && (
        <div className="fixed inset-0 backdrop-blur-2xl flex items-center justify-center z-50">
          <Card
            className={
              "flex items-center z-0 max-w-full md:max-w-sm mx-auto relative w-full h-full"
            }
            radius="none"
            onMouseDown={handlePlayTogle}
            onMouseUp={handlePlayTogle}
            onTouchEnd={handlePlayTogle}
            onTouchStart={handlePlayTogle}
          >
            <div className="h-full flex flex-col items-center justify-center">
              <Image
                isZoomed
                removeWrapper
                alt={currentStory.title}
                className="w-full h-fit object-cover -z-10 "
                radius="none"
                src={currentStory.imageUrl || '/tgnews.png'}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50">
              <div className="absolute top-4 left-4">
                <Image
                  alt="Logo"
                  className="rounded "
                  height={40}
                  src="/tgnews.png"
                  width={40}
                />
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  className="text-white p-2 rounded-full bg-black/30"
                  onClick={handlePlayTogle}
                >
                  {isPlay ? <Pause className="w-6 h-6" /> : <Play />}
                </Button>
                <Button className="text-white p-2 rounded-full bg-black/30">
                  <Share2 className="w-6 h-6" />
                </Button>
                <Button
                  className="p-2 rounded-full"
                  color="danger"
                  variant="ghost"
                  onClick={() => setCurrentStory(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <Progress
                aria-label="Loading..."
                className="absolute top-0 left-0"
                color="secondary"
                size="sm"
                value={(timeLeft * 100) / 7}
              />
              <div className="absolute bottom-20 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {currentStory.title}
                </h2>
                <p className="text-sm">
                  By {currentStory.author} |{" "}
                  <span className="font-medium text-default-900 ">
                    {currentStory.updatedAt
                      ? `Published on ${new Date(currentStory.updatedAt).toDateString()}`
                      : ""}
                  </span>
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
                <Button
                  className="p-2 rounded-full bg-black/30"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  className="animate-pulse p-2 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  color="secondary"
                  variant="bordered"
                  onClick={() => handlePush(currentStory)}
                >
                  Read More
                </Button>
                <Button
                  className="p-2 rounded-full bg-black/30"
                  onClick={handleNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
              <div className="absolute top-4 right-4 text-white" />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WebShortsSection;
