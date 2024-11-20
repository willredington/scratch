import { z } from 'zod';
import { LocationSchema } from './location';
import { UserPermissionSchema } from './permission';

export const EventSchema = z.object({
  id: z.string(),
  type: z.literal('event'),
  ownerId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  startDateTime: z.string(),
  endDateTime: z.string(),
  location: LocationSchema.optional(),
  sharedWith: z.array(UserPermissionSchema).optional(),
});

export type Event = z.infer<typeof EventSchema>;
