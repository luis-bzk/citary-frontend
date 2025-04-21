import { z } from 'zod';

export const schemaChangePasswordForm = z
  .object({
    password: z
      .string({ required_error: 'La contraseña es requerida' })
      .nonempty('La contraseña es requerida')
      .refine((val) => /[a-z]/.test(val), {
        message: 'La contraseña debe contener al menos una letra minúscula',
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: 'La contraseña debe contener al menos una letra mayúscula',
      })
      .refine((val) => /\d/.test(val), {
        message: 'La contraseña debe contener al menos un número',
      })
      .refine((val) => /[^A-Za-z0-9]/.test(val), {
        message: 'La contraseña debe contener al menos un carácter especial',
      })
      .refine((val) => val.length >= 8, {
        message: 'La contraseña debe tener al menos 8 caracteres',
      }),

    verifyPassword: z
      .string({ required_error: 'Debe confirmar la contraseña' })
      .nonempty('Debe confirmar la contraseña'),
  })
  .refine((data) => data.password === data.verifyPassword, {
    path: ['verifyPassword'],
    message: 'Las contraseñas no coinciden',
  });

export type ChangePasswordFormValues = z.infer<typeof schemaChangePasswordForm>;
