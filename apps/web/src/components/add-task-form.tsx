"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

const AddTaskFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  durationInMinutes: z.coerce.number(),
  autoSchedule: z.boolean(),
  tags: z.array(z.string()).optional(),
});

type AddTaskFormSchema = z.infer<typeof AddTaskFormSchema>;

export function AddTaskForm() {
  const form = useForm<AddTaskFormSchema>({
    resolver: zodResolver(AddTaskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      autoSchedule: true,
      durationInMinutes: 30,
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);

    const response = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("success");
    } else {
      console.log("error");
    }
  });

  const isDisabled = !form.formState.isValid;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter task title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Enter task description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="durationInMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration: {field.value} mins</FormLabel>
              <Slider
                value={[field.value]}
                step={15}
                max={300}
                onValueChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="autoSchedule"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-semibold">
                  Schedule automatically?
                </FormLabel>
                <FormDescription>
                  Let AI optimize when this task should be scheduled
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button disabled={isDisabled} type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
