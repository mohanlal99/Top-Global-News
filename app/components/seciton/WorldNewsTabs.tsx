import { Card, CardBody, Image, Link, Tab, Tabs } from "@nextui-org/react";
import React from "react";

import { CategoryType, NewsSchemaType } from "@/types";

const WorldNewsTabs: React.FC<{
  news: { [key in CategoryType]: NewsSchemaType[] };
}> = ({ news }) => {
  if (!news) return <div>Not Found</div>;

  return (
    <div className="flex w-full  px-3 flex-col py-6" id="world">
      <div className="relative text-center mb-8">
        <div className="inline-flex items-center space-x-2">
          <div className="h-0.5 w-16 bg-primary" />
          <h2 className="text-4xl font-bold text-primary">News in Focus</h2>
          <div className="h-0.5 w-16 bg-primary" />
        </div>
        <p className="text-pink-600 mt-2">
          Explore the pivotal stories shaping our global landscape.
        </p>
      </div>

      <Tabs
        aria-label="World News Categories"
        color="success"
        radius="none"
        variant="bordered"
      >
        {/* World News Tab */}
        <Tab key="world" title="World News">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {news.world.map((item, index) => (
              <Link key={index} href={`/news/${item.category}/${item.slug}`}>
                <Card
                  className="relative hover:shadow-lg transition-shadow"
                  radius="none"
                >
                  <Image
                    removeWrapper
                    alt={item.title}
                    className="w-full h-52 md:h-36 object-cover"
                    radius="none"
                    src={item.imageUrl || "/tgnews.png"}
                  />
                  <p className="absolute z-10 top-2 left-2 capitalize bg-gray-100 dark:bg-slate-900  w-fit px-2">
                    {item.category}
                  </p>
                  <CardBody>
                    <h3 className="text-sm line-clamp-2">{item.title}</h3>
                    <div className="text-sm text-gray-400">
                      {item.createdAt && (
                        <p>
                          Publish On:{" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </Tab>

        <Tab key="national" title="National News">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {news.national.map((item, index) => (
              <Link key={index} href={`/news/${item.category}/${item.slug}`}>
                <Card
                  className="relative hover:shadow-lg transition-shadow"
                  radius="none"
                >
                  <Image
                    removeWrapper
                    alt={item.title}
                    className="w-full h-52 md:h-36 object-cover"
                    radius="none"
                    src={item.imageUrl || "/tgnews.png"}
                  />
                  <p className="absolute z-10 font-medium top-2 left-2 capitalize bg-purple-500 w-fit px-2">
                    {item.category}
                  </p>
                  <CardBody>
                    <h3 className="text-sm line-clamp-2">{item.title}</h3>
                    <div className="text-sm text-gray-400">
                      {item.createdAt && (
                        <p>
                          Published on:{" "}
                          {new Date(item.createdAt).toDateString()}
                        </p>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </Tab>

        {/* Political News Tab */}
        <Tab key="political" title="Political News">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {news.political.slice(0, 12).map((item, index: number) => (
              <Link key={index} href={`/news/${item.category}/${item.slug}`}>
                <Card
                  className="relative hover:shadow-lg transition-shadow"
                  radius="none"
                >
                  <Image
                    removeWrapper
                    alt={item.title}
                    className="w-full h-52 md:h-36 oject-cover"
                    radius="none"
                    src={item.imageUrl || "/tgnews.png"}
                  />
                  <p className="absolute z-10 font-medium top-2 left-2 capitalize bg-purple-500 w-fit px-2">
                    {item.category}
                  </p>
                  <CardBody className="">
                    <h3 className="text-sm line-clamp-2">{item.title}</h3>

                    <div className="text-sm text-gray-400">
                      {item.createdAt && (
                        <p>
                          Publish On :{" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default WorldNewsTabs;
