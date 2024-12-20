import { LocationSchema } from 'dist/main';
import { z } from 'zod';
import { UserPermissionSchema } from './permission';

export const TaskSchema = z.object({
  id: z.string(),
  type: z.literal('task'),
  ownerId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  dueDate: z.string().optional(),
  durationInMinutes: z.number().min(1),
  priority: z.number().min(1).max(3),
  location: LocationSchema.optional(),
  sharedWith: z.array(UserPermissionSchema).optional(),
});

export type Task = z.infer<typeof TaskSchema>;
