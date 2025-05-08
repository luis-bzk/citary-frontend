import { z } from 'zod';

export const schemaUserForm = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido' })
    .nonempty('El nombre es requerido')
    .min(1, 'El nombre es requerido')
    .max(50, 'El nombre no puede exceder los 50 caracteres'),
  lastName: z
    .string({ required_error: 'El apellido es requerido' })
    .nonempty('El apellido es requerido')
    .min(1, 'El apellido es requerido')
    .max(50, 'El apellido no puede exceder los 50 caracteres'),
  email: z
    .string({ required_error: 'El correo electrónico es requerido' })
    .nonempty('El correo electrónico es requerido')
    .email('El correo electrónico debe ser válido'),
});

export type UserFormValues = z.infer<typeof schemaUserForm>;
