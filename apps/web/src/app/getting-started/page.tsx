import { AddTaskModal } from "@/components/add-task-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Plus, Upload } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Welcome to AI Task Planner</CardTitle>
          <CardDescription>
            Get started with AI-powered task scheduling. Our intelligent system
            helps you optimize your time and boost productivity.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Import Calendar
              </CardTitle>
              <CardDescription>
                Sync with your existing calendar for seamless integration
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                TODO
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Tasks Manually
              </CardTitle>
              <CardDescription>
                Start fresh by adding your tasks one by one
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <AddTaskModal />
            </CardFooter>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Plus className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h3 className="font-semibold">Add Your Tasks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Input your tasks and their details
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 text-blue-500" />
              <div>
                <h3 className="font-semibold">AI Optimization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our AI analyzes and schedules tasks optimally
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Calendar className="w-5 h-5 mt-1 text-purple-500" />
              <div>
                <h3 className="font-semibold">View Your Schedule</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See your optimized schedule in daily, weekly, or monthly views
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
