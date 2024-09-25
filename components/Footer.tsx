"use client"; // Ensures the component is used on the client side

import { Link } from "@nextui-org/link";
import { Button, Input } from "@nextui-org/react";
import { ArrowBigUp } from "lucide-react";
import React from "react";

import { Logo } from "./icons";

import Liner from "@/app/(routes)/news/components/Liner";
import SocialMediaIcon from "@/app/components/SocialMediaIcon";
import { siteConfig } from "@/config/site";

const Footer: React.FC = () => {
  // Handler for smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-8 bg-gray-900">
      <div className="container mx-auto px-2 md:px-4">
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row items-center w-full justify-between mb-2 md:mb-4">
          <div className="flex sm:flex-row flex-col items-center justify-center md:px-6 px-2">
            <Logo />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5 mb-2 lg:mb-8 px-3">
          <div className="sm:border-r-2">
            <h2 className="text-lg font-semibold mb-2 text-center">
              <Liner name="Follow Us" />
            </h2>
            <ul className="grid grid-cols-3 px-2 lg:grid-cols-5 gap-4">
              {siteConfig.navMenuItems.map((item) => (
                <li key={item.label} className="text-sm">
                  <Link
                    className="hover:underline text-gray-300"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:border-l-2">
            <h2 className="text-lg font-semibold mb-2 text-center">
              <Liner name="Legal" />
            </h2>
            <ul className="grid grid-cols-2 px-2 lg:grid-cols-3 gap-4">
              {siteConfig.footerItem.map((item) => (
                <li key={item.href} className="text-sm">
                  <Link
                    className="hover:underline text-gray-300"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mb-8 space-x-4">
          <SocialMediaIcon />
        </div>

        {/* Newsletter Signup */}
        <form className="flex gap-2 items-center justify-center mb-8">
          <Input
            aria-label="Enter your email"
            className="w-full max-w-md"
            placeholder="Enter your email"
            radius="none"
            type="email"
          />
          <Button color="primary" radius="none" type="submit">
            Subscribe
          </Button>
        </form>

        {/* Back to Top Button */}
        <div className="absolute right-10 bottom-8 text-center">
          <Button
            isIconOnly
            className="text-gray-900 border rounded-full p-2 hover:text-white hover:bg-gray-700"
            onClick={scrollToTop}
          >
            <ArrowBigUp aria-hidden="true" className="w-6 h-6 inline" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-white">
          &copy; 2024 Top Global News. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
Button;
