import { z } from 'zod';

export const schemaRecoverPasswordForm = z.object({
  email: z
    .string({ required_error: 'El correo electrónico es requerido' })
    .nonempty('El correo electrónico es requerido')
    .email('El correo electrónico debe ser válido'),
});

export type RecoverPasswordFormValues = z.infer<typeof schemaRecoverPasswordForm>;
