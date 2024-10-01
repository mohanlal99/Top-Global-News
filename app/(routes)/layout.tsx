import React from "react";

import Sidebar from "./news/components/Sidebar";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { getMultipleCategoriesNews } from "@/lib/api";
import { CategoryType } from "@/types";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const categories: CategoryType[] = [
    "india",
    "sports",
    "national",
    "cricket",
    "business",
  ];
  const categories2: CategoryType[] = ["political", "world", "environment"];

  const [newsData, newsData2] = await Promise.all([
    getMultipleCategoriesNews(categories),
    getMultipleCategoriesNews(categories2),
  ]);

  return (
    <section>
      <Navbar />
      <div className="px-2 py-2 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Main Content */}
          <section className="lg:col-span-2">
            <div className="flex flex-col gap-4 md:pl-8">
              {children}
              <section className="mt-6 text-center">Advertisement</section>
            </div>
            {/* Additional Content Below Main Content */}
            <div className="mt-6">Additional Content Below Main Content</div>
          </section>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1">
            <div className="w-full flex gap-2 flex-col justify-between items-center ">
              <Sidebar newsData={newsData} />
            </div>
            <div className="w-full flex gap-2 flex-col justify-between items-center ">
              <Sidebar newsData={newsData2} />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
