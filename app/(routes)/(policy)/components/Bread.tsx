"use client";
import { Breadcrumbs, BreadcrumbItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const BreadPage = () => {
  const currentPath = usePathname();

  // Function to check if the current path matches
  const isActive = (path: string) => currentPath === path;

  return (
    <section className="pb-3">
      <Breadcrumbs separator="/">
        <BreadcrumbItem>
          <Link
            className={
              isActive("/contact")
                ? "text-primary font-bold text-2xl "
                : "text-default-400 font-bold text-medium"
            }
            href="/contact"
          >
            Contact
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link
            className={
              isActive("/terms-of-service")
                ? "text-primary font-bold text-2xl "
                : "text-default-400 font-bold text-medium"
            }
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link
            className={
              isActive("/privacy-policy")
                ? "text-primary font-bold text-2xl "
                : "text-default-400 font-bold text-medium"
            }
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link
            className={
              isActive("/disclaimer")
                ? "text-primary font-bold text-2xl "
                : "text-default-400 font-bold text-medium"
            }
            href="/disclaimer"
          >
            Disclaimer
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link
            className={
              isActive("/about")
                ? "text-primary font-bold text-2xl "
                : "text-default-400 font-bold text-medium"
            }
            href="/about"
          >
            About Us
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>
    </section>
  );
};

export default BreadPage;
