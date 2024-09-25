import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { Logo } from "@/components/icons";

const AdminNavbar = () => {
  type navItemType = {
    label: string;
    href: string;
  }[];
  const navItem: navItemType = [
    {
      label: "Home",
      href: "/admin",
    },
    {
      label: "Save News",
      href: "/admin/news",
    },
  ];

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href="/admin"
          >
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="" justify="center">
        <ul className="hidden md:flex gap-4 justify-center ml-2">
          {navItem.map((item, index) => (
            <NavbarItem key={item.href + index}>
              <NextLink
                className={`flex items-center justify-center bg-primary-600 text-transparent bg-clip-text capitalize font-medium`}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem />
      </NavbarContent>
    </NextUINavbar>
  );
};

export default AdminNavbar;
