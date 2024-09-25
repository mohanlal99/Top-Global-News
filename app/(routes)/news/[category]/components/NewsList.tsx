"use client";

import NotFound from "@/app/not-found";
import { title } from "@/components/primitives";
import { useNews } from "@/context/NewsContext";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Image,
  Link,
} from "@nextui-org/react";
import { ArrowDownLeftFromSquare, LoaderIcon } from "lucide-react";
import { useState } from "react";
const NewsList: React.FC = () => {
  const news = useNews();
  const [visibleCount, setVisibleCount] = useState<number>(20);

  if (!news) return <NotFound />;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      <section className="w-full mx-auto px-1 sm:px-3 flex gap-2 flex-col dark:bg-gray-900">
        {news && (
          <h2
            className={title({
              size: "lg",
              color: "violet",
              className: "capitalize text-center",
            })}
          >
            {news[0]?.category} News
          </h2>
        )}
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
          <BreadcrumbItem>
            <Link className="capitalize" href={`/news/${news[0]?.category}`}>
              {news[0]?.category}
            </Link>
          </BreadcrumbItem>
        </Breadcrumbs>

        {!news.length ? (
          <div className="flex justify-center items-center h-64">
            <LoaderIcon className="animate-spin text-primary-500 w-8 h-8" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-7">
            {news.slice(0, visibleCount).map((item, index) => (
              <Card key={index}>
                <Link
                  color="foreground"
                  href={`/news/${item.category}/${item.slug}`}
                >
                  <CardBody className="">
                    <Image
                      removeWrapper
                      alt={item.title}
                      className="w-full mb-2 h-40 rounded object-cover"
                      height={200}
                      src={item.imageUrl || "/tgnews.png"}
                      width={400}
                    />
                    <div className="flex text-nowrap mb-1 gap-3 items-center text-sm text-gray-600 mt-1">
                      <p className="text-primary flex gap-3 font-medium text-md capitalize">
                        {item.category} News
                      </p>
                      {item?.createdAt && (
                        <p>
                          Published on {new Date(item.createdAt).toDateString()}
                        </p>
                      )}
                    </div>
                    <h2 className="text-lg line-clamp-2 h-fit font-semibold mb-2">
                      {item.title}
                    </h2>
                  </CardBody>
                </Link>
              </Card>
              // <Card
              //   key={item.slug}

              //   aria-label={`Read more about ${item.title}`}
              //   className="border transition-shadow text-primary"
              // >
              //   <Link href={`/news/${item.slug}`}>
              //     <div className="flex flex-col gap-2 relative">
              //       <Image
              //       removeWrapper
              //         alt={item.title}
              //         className="rounded-lg object-cover w-full h-full sm:h-32"
              //         src={item.imageUrl || "/tgnews.png"}
              //       />
              //       <div className="flex flex-col justify-between w-full">
              //         <div className="flex gap-3 items-center text-sm text-gray-600 mt-1">
              //           <p className="text-primary flex gap-3 font-medium text-md capitalize">
              //             {item.category} News
              //           </p>
              //           {item.updatedAt && (
              //             <p>
              //               Published on{" "}
              //               {new Date(item.updatedAt).toDateString()}
              //             </p>
              //           )}
              //         </div>
              //         <h2 className="text-sm line-clamp-3 h-fit text-default-900 font-medium">
              //           {item.title}
              //         </h2>
              //       </div>
              //     </div>
              //   </Link>
              // </Card>
            ))}
          </div>
        )}

        {visibleCount < news.length && (
          <div className="flex justify-center mt-6">
            <Button
              aria-label="Load more news items"
              className="flex gap-2 relative items-center justify-center px-5"
              color="primary"
              radius="full"
              variant="bordered"
              onPress={handleShowMore}
            >
              Show More <ArrowDownLeftFromSquare />
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsList;
