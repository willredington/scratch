import { z } from 'zod';

export enum TaskType {
  SCHEDULED = 'scheduled',
  UNSCHEDULED = 'unscheduled',
}

export enum TimeConstraintType {
  FLEXIBLE = 'flexible',
  FIXED = 'fixed',
}

export enum RecurrenceType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

const TaskDurationSchema = z.object({
  hours: z.number(),
  minutes: z.number(),
});

const BaseTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  userId: z.string(), // User ID to tie tasks to a specific user
  description: z.string().optional(),
  type: z.nativeEnum(TaskType),
  tags: z.array(z.string()).optional(),
  startDateTime: z.string(),
  duration: TaskDurationSchema,
});

const ScheduleDetailsSchema = z.object({
  recurrence: z.nativeEnum(RecurrenceType),
  daysOfWeek: z.array(z.nativeEnum(DayOfWeek)).optional(),
  dayOfMonth: z.number().min(1).max(31).optional(),
});

export const ScheduledTaskSchema = BaseTaskSchema.extend({
  type: z.literal(TaskType.SCHEDULED),
  scheduleDetails: ScheduleDetailsSchema,
});

export const UnscheduledTaskSchema = BaseTaskSchema.extend({
  type: z.literal(TaskType.UNSCHEDULED),
});

export const TaskSchema = z.union([ScheduledTaskSchema, UnscheduledTaskSchema]);

export type TaskDuration = z.infer<typeof TaskDurationSchema>;

export type ScheduledTask = z.infer<typeof ScheduledTaskSchema>;

export type UnscheduledTask = z.infer<typeof UnscheduledTaskSchema>;

export type Task = z.infer<typeof TaskSchema>;
