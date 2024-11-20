import { z } from 'zod';

export enum PermissionType {
  READ = 'READ',
  EDIT = 'EDIT',
}

export const UserPermissionSchema = z.object({
  userId: z.string(),
  permission: z.nativeEnum(PermissionType),
});

export type UserPermission = z.infer<typeof UserPermissionSchema>;
