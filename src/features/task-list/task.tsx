"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { useState } from "react";

type Props = {};

export const Task = (props: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex p-4 gap-5 border-b border-solid cursor-pointer"
    >
      <div>
        <Checkbox className="rounded-full" />
      </div>
      <div>
        <div className="font-semibold">TaskName</div>
        <div>Desc</div>
      </div>
      <div
        className={cn(
          !isHover ? "hidden" : "flex",
          "flex-1 flex-row-reverse items-center"
        )}
      >
        <Button variant="ghost" onClick={() => alert("edit")}>
          <Pencil className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
