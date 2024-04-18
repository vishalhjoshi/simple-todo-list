"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ArrowBigUpDash, X } from "lucide-react";

type Props = {};

export const AddTaskInput = (props: Props) => {
  return (
    <form
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      x-chunk="dashboard-03-chunk-1"
    >
      <Input
        placeholder="Task Name"
        className="placeholder:font-semibold h-8 py-0 min-h-4 border-0 shadow-none focus-visible:ring-0"
      />
      <Input
        placeholder="Description"
        className="h-8 border-0 shadow-none focus-visible:ring-0"
      />
      <Separator />
      <div className="flex flex-row-reverse gap-4 items-center p-3 pt-4 ">
        <Button type="submit" size="sm" className="">
          Add Task <ArrowBigUpDash className="ml-1 h-4 w-4" />
        </Button>
        <Button size="sm" variant="secondary">
          Cancel <X className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};
