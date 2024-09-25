import React from "react";
import Link from "next/link";
import {
  usePagination,
  PaginationItemType,
  Image,
  Button,
} from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { NewsSchemaType } from "@/types";

const FreshNewsSection: React.FC<{ news: NewsSchemaType[] }> = ({ news }) => {
  // Setup pagination (4 items per page)
  const itemsPerPage = 4;
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: totalPages,
    showControls: true,
    siblings: 2,
  });

  // Slice news for the current page
  const displayedNews = news.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage,
  );

  return (
    <div className="flex flex-col items-center py-3 md:px-16 bg-default-200  dark:bg-gray-950">
      {/* Fresh News Header */}
      <div className="flex items-center justify-between w-full py-6">
        <hr className="flex-grow border-gray-300" />
        <h2 className="px-4 font-bold text-lg">Fresh News</h2>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* News Cards */}
      <div className="grid md:grid-cols-4 gap-4 py-2">
        {displayedNews.map((item, index) => (
          <Link
            key={index}
            className="text-sm "
            href={`/news/${item.category}/${item.slug}`}
          >
            <div className="grid grid-cols-3 gap-2 hover:shadow-lg dark:bg-gray-900 bg-default-300 rounded-md p-2 pt-3">
              <Image
                removeWrapper
                alt={item.title}
                className="w-32 h-auto  rounded-md object-cover mb-2"
                height={60}
                src={item.imageUrl || "/tgnews.png"}
              />
              <h3 className="text-sm col-span-2 mb-1 line-clamp-3 h-fit">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex gap-3 items-center">
          {range.map((page) => {
            if (page === PaginationItemType.NEXT) {
              return (
                <li
                  key={page}
                  aria-label="next page"
                  className="flex items-center justify-center"
                >
                  <Button
                    className="w-8 h-8 flex items-center justify-center "
                    size="md"
                    variant="ghost"
                    onClick={onNext}
                  >
                    Next <ArrowRight className="text-gray-600" />
                  </Button>
                </li>
              );
            }

            if (page === PaginationItemType.PREV) {
              return (
                <li
                  key={page}
                  aria-label="previous page"
                  className="flex items-center justify-center"
                >
                  <Button
                    className="w-8 h-8 flex items-center justify-center"
                    size="md"
                    variant="ghost"
                    onClick={onPrevious}
                  >
                    <ArrowLeft className="text-gray-600" /> Prev
                  </Button>
                </li>
              );
            }

            if (page === PaginationItemType.DOTS) {
              return (
                <li
                  key={page}
                  className="flex items-center justify-center text-gray-600"
                >
                  <span className="text-lg">...</span>
                </li>
              );
            }

            return (
              <li
                key={page}
                aria-label={`page ${page}`}
                className="flex items-center w-6 h-6  justify-center"
              >
                <button
                  className={`w-full h-full flex items-center justify-center rounded-sm text-sm ${
                    activePage === page
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  } transition`}
                  onClick={() => setPage(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FreshNewsSection;
