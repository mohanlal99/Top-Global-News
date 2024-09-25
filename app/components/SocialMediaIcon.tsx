import { Link } from "@nextui-org/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { GithubIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const SocialMediaIcon = () => {
  return (
    <div className="flex gap-3 items-center justify-center flex-nowrap">
      <Link
        isExternal
        aria-label="GitHub Profile"
        href={siteConfig.links.github}
      >
        <GithubIcon size={28} />
      </Link>
      <Link
        isExternal
        aria-label="LinkedIn Profile"
        href={siteConfig.links.linkedin}
      >
        <Linkedin color="pink" size={28} />
      </Link>
      <Link
        isExternal
        aria-label="Facebook Page"
        href={siteConfig.links.facebook}
      >
        <Facebook color="green" size={28} />
      </Link>
      <Link
        isExternal
        aria-label="Twitter Profile"
        href={siteConfig.links.twitter}
      >
        <TwitterIcon className="animate-pulse" color="gray" size={28} />
      </Link>
      <Link
        isExternal
        aria-label="Instagram Profile"
        href={siteConfig.links.instagram}
      >
        <Instagram color="orange" size={28} />
      </Link>
    </div>
  );
};

export default SocialMediaIcon;
