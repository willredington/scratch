import { AddTaskForm } from "./add-task-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function AddTaskModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <AddTaskForm />
      </DialogContent>
    </Dialog>
  );
}
