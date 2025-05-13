import { z } from 'zod';

export const schemaRoleForm = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido' })
    .nonempty('El nombre es requerido')
    .min(1, 'El nombre es requerido')
    .max(100, 'El nombre no puede exceder los 100 caracteres'),
  description: z
    .string({ required_error: 'La descripción es requerido' })
    .nonempty('La descripción es requerido')
    .min(1, 'La descripción es requerido')
    .max(200, 'La descripción no puede exceder los 200 caracteres'),
});

export type RoleFormValues = z.infer<typeof schemaRoleForm>;
