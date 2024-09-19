import { cn } from "@/utils/cn";
import React from "react";

const Page = ({
  index,
  openedIndex,
}: {
  index: number;
  openedIndex: number;
}) => {
  return (
    <main
      className={cn("h-1/2 w-1/2 scale-0 bg-red-50 transition-all", {
        "scale-100": index === openedIndex,
      })}
    ></main>
  );
};

export default Page;
