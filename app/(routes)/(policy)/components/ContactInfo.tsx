"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link as NextUILink } from "@nextui-org/link";

import SocialMediaIcon from "@/app/components/SocialMediaIcon";

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <MapPin className="w-6 h-6 text-blue-600 mr-3" />
        <span className="text-lg">
          <strong>Mr. Mohanlal Verma</strong>, Top Global News
          <br />
          Rajasthan - 335524
        </span>
      </div>
      <div className="flex items-center">
        <Phone className="w-6 h-6 text-green-600 mr-3" />
        <NextUILink className="text-lg" href="tel:+918118862474">
          +91 - 8118862474
        </NextUILink>
      </div>
      <div className="flex items-center">
        <Mail className="w-6 h-6 text-red-600 mr-3" />
        <NextUILink
          className="text-lg sm:flex flex-wrap "
          href="mailto:mohanlalv433@gmail.com"
        >
          mohanlalv433@gmail.com{" "}
          <span className="text-gray-500">{"(Advertisement etc.)"}</span>
        </NextUILink>
      </div>
      <div>
        <SocialMediaIcon />
      </div>
    </div>
  );
};

export default ContactInfo;
