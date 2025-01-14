import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils";
import { AddTaskModal } from "@/components/layout/module/AddTaskModal";
import { deleteTask, toggleCompletedState } from "@/redux/features/task/taskSlice";
import { UpdateTaskModal } from "@/components/layout/module/UpdateTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  const tasks = useAppSelector((state) => state.todos.tasks);
  console.log(tasks);

const dispatch = useAppDispatch();

  return (
    <>
    {/* banner */}
    <div className="p-6 py-12 dark:bg-cyan-600 dark:text-gray-50">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" />50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">MAMBA</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Shop Now</a>
		</div>
	</div>
</div>
{/* banner end */}
      <div className="text-center mb-10 ">
        <div className="flex items-center justify-around py-6 ">

       
        <h1 className="text-4xl font-bold">My Tasks</h1>

        <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      </ Tabs>
        <AddTaskModal />
         </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {tasks?.map((task) => (
          <Card key={task.id} className="bg-cyan-800 hover:bg-cyan-700">
            <CardHeader>
              <CardTitle>
                {
                  task.isCompleted === false?
                  <p className="text-yellow-500">{task.title }</p>
                  : <p className="text-green-500">{task.title }</p>
                }
                </CardTitle>
              <CardDescription className="text-white">{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Priority: <span className={cn("rounded-full px-2 py-1", {
                "bg-green-800" : task.priority == "Low",
                "bg-yellow-800" : task.priority == "Medium",
                "bg-rose-800" : task.priority == "High",
              })}>{task.priority}</span></p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-around items-center gap-3">
              <Button
              onClick={()=>dispatch(deleteTask(task.id))}
              >
                <Trash2  size={24} color="white" />
              </Button>
              <UpdateTaskModal taskId={task.id}/>
              
              <Checkbox
              checked={task.isCompleted}
              onClick={()=>dispatch(toggleCompletedState(task.id))} className="text-purple-500 bg-rose-500" id="terms" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Tasks;
