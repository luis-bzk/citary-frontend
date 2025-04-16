import { z } from 'zod';

export const schemaLoginForm = z.object({
  email: z
    .string({ required_error: 'El correo electrónico es requerido' })
    .nonempty('El correo electrónico es requerido')
    .email('El correo electrónico debe ser válido'),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .nonempty('La contraseña es requerida')
    .min(1, 'La contraseña es requerida'),
});

export type LoginFormValues = z.infer<typeof schemaLoginForm>;
