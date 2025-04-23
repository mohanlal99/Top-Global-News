import HomePage from "./components/HomePage";
import HomeSection from "./components/HomeSection";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { HomeProvider } from "@/context/HomeContext";
import { getAllNews } from "@/lib/fetchNews";
import NewsApiSection from "./components/seciton/NewsApiSection";

export default async function Home() {
  const news = await getAllNews();


  return (
    <HomeProvider news={news}>
      <section>
        {news && news.trending.length > 0 && (
          <HomeSection news={news.trending[0]} />
        )}
        <Navbar />
        <NewsApiSection/>
        <HomePage />
        <Footer />
      </section>
    </HomeProvider>
  );
}

{
  /* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */
}
