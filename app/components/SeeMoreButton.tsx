import { Button } from "@nextui-org/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { CategoryType } from "@/types";

const SeeMoreButton: React.FC<{ category: CategoryType }> = ({ category }) => {
  const router = useRouter();

  return (
    <div className="text-center px-6 mt-3">
      <Button
        className="w-full"
        color="primary"
        variant="bordered"
        onClick={() => router.push(`/news/${category}`)}
      >
        See More <ArrowUpRightFromSquare />
      </Button>
    </div>
  );
};

export default SeeMoreButton;
