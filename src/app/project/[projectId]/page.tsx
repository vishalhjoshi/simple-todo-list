import { AddTaskInput } from "@/features/add-task/add-task";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TaskList } from "@/features/task-list/task-list";

export default function Page({ params }: { params: { projectId: string } }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {params.projectId}
        </h1>
      </div>
      <Separator />
      <TaskList />
      <AddTaskInput />
    </div>
  );
}
