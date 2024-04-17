import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dashboard } from "@/features/dashboard/dashboard";
type Props = {};

const TodoItem = () => (
  <>
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Todo Item</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button>Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  </>
);

const DashboardPage = (props: Props) => {
  const todoList = [
    {
      task: "todo itme 1",
      id: 123,
      isCompleted: false,
    },
    {
      task: "todo itme 2",
      id: 124,
      isCompleted: false,
    },
    {
      task: "todo itme 3",
      id: 125,
      isCompleted: false,
    },
  ];
  return <Dashboard />;
};

export default DashboardPage;
