import { z } from 'zod';

export const schemaCountryForm = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido' })
    .min(1, 'El nombre no puede estar vacío')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .transform((s) => s.toLowerCase()),
  code: z
    .string({ required_error: 'El código es requerido' })
    .min(1, 'El código no puede estar vacío')
    .max(10, 'El código no puede tener más de 10 caracteres')
    .transform((s) => s.toLowerCase()),
  prefix: z
    .string({ required_error: 'El prefijo es requerido' })
    .min(1, 'El prefijo no puede estar vacío')
    .max(10, 'El prefijo no puede tener más de 10 caracteres')
    .transform((s) => s.toLowerCase()),
});

export type CountryFormValues = z.infer<typeof schemaCountryForm>;
