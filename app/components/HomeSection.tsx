import { Link } from "@nextui-org/link";
import { Clock, Moon, TrendingUp } from "lucide-react";

import SocialMediaIcon from "./SocialMediaIcon";

import { NewsSchemaType } from "@/types";
import { SunFilledIcon } from "@/components/icons";
const HomeSection: React.FC<{ news: NewsSchemaType }> = ({ news }) => {
  const date = new Date();
  const hours = date.getHours();

  return (
    <section className="flex justify-between  text-nowrap items-start font-serif md:items-center px-2 py-1 border-b">
      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-2">
          {hours >= 6 && hours <= 18 ? (
            <SunFilledIcon className="text-orange-500 animate-spin" />
          ) : (
            <Moon />
          )}
        </div>
        <div>
          {date.getHours()}:{date.getMinutes()}
          {""}
        </div>
        <div className="text-default-500 font-bold text-medium">New Dheli</div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 " />
          <div>{date.toDateString()}</div>
        </div>
      </div>

      <div className="hidden lg:flex  justify-between items-center gap-2">
        <div className="flex gap-2 items-center text-sm text-white font-bold bg-red-600 px-1 ">
          Breaking News <TrendingUp className="bg-red-600 font-bold" />
        </div>
        {news && news.title && (
          <Link
            className="block dark:text-pink-100 text-sm line-clamp-1  lg:w-72 overflow-hidden"
            href={`/news/${news.category}/${news.slug}`}
          >
            {news?.title || ""}
          </Link>
        )}
      </div>
      <div className="hidden sm:flex">
        <SocialMediaIcon />
      </div>
    </section>
  );
};

export default HomeSection;
