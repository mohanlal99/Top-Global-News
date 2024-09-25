import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import SocialMediaIcon from "@/app/components/SocialMediaIcon";
import { Logo, SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          TG
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <>
      <NextUINavbar className="border-b-2 px-6" maxWidth="xl" position="static">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="" justify="start">
          <ul className="hidden md:flex gap-4 justify-center ml-2">
            {siteConfig.navItems.map((item, index) => (
              <NavbarItem key={item.href + index}>
                <NextLink
                  className={`flex items-center justify-center bg-primary-600 text-transparent bg-clip-text font-medium`}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent className=" basis-1 pl-4" justify="end">
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Link
              className={`px-4 py-1 rounded-md text-base font-medium md:w-auto border-2 text-default-900`}
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </NavbarItem>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>
        {/* Navbar Menu Items  */}
        <NavbarMenu className="max-w-7xl mx-auto p-4">
          <div className="md:flex gap-4 h-screen">
            <div className="w-full md:w-1/2 pb-5">
              {searchInput}
              <div className="flex flex-col gap-3">
                <div className="mt-4 grid gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:text-end">
                  {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem
                      key={`${item.label}-${index}`}
                      className="border-r-2 pr-1"
                    >
                      <Link
                        className={`px-4 py-2 rounded-md text-base font-bold w-full md:w-fit 
                        ${index === 1 ? "" : ""}
                        ${
                          index === 0
                            ? "bg-gradient-to-r from-[#ff8239] via-[#ffe207] to-[#01c4ff] text-transparent bg-clip-text"
                            : index === 2
                              ? "text-success-00 bg-primary-00"
                              : index === siteConfig.navMenuItems.length - 1
                                ? "text-danger bg-danger-100"
                                : index === 6
                                  ? "bg-gradient-to-t to-[#ce27fd] via-[#894524] from-[#922222] bg-clip-text text-transparent"
                                  : "text-foreground "
                        }`}
                        href={item.href}
                        size="lg"
                      >
                        {item.label}
                      </Link>
                    </NavbarMenuItem>
                  ))}
                </div>
                <div className="flex flex-col justify-center items-center p-1 gap-2 rounded-md bg-gradient-to-r dark:from-[#ff5cc0] from-[#a7ff19] via-primary-900 dark:to-[#199956] to-[#984541]">
                  <NextLink
                    className="flex justify-start items-center gap-1"
                    href="/"
                  >
                    <Logo />
                  </NextLink>
                  <div className="flex items-center justify-center gap-6">
                    <NavbarItem className="flex gap-6">
                      <SocialMediaIcon />
                      <Link
                        className={`px-4 py-1 rounded-md text-base font-medium md:w-auto border-2 text-default-900`}
                        href={"/sign-in"}
                      >
                        Sign In
                      </Link>
                    </NavbarItem>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <span className="">NEws adding </span>
            </div>
          </div>
        </NavbarMenu>
      </NextUINavbar>
      {/* // Second Navbar */}
      <NextUINavbar height={"35px"} maxWidth="full" position="static">
        <div className="flex gap-2 font-serif items-center overflow-x-auto whitespace-nowrap scroll-smooth pt-2 pb-1 scrollbar-hide">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarItem
              key={`${item.label}-${index}`}
              className="flex-shrink-0"
            >
              <Link
                className={`px-3 rounded-md text-base font-serif md:w-auto
            ${
              index === 0
                ? "bg-gradient-to-r from-[#ff8239] via-[#ffe207] to-[#01c4ff] text-transparent bg-clip-text"
                : index === 2
                  ? ""
                  : index === siteConfig.navMenuItems.length - 1
                    ? "text-danger"
                    : index === 6
                      ? "bg-gradient-to-t from-[#922222] via-[#894524] to-[#ce27fd] text-transparent bg-clip-text"
                      : "text-foreground"
            }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NextUINavbar>
    </>
  );
};
