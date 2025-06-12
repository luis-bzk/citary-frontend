import { z } from 'zod';

export const schemaProvinceForm = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido' })
    .min(1, 'El nombre es requerido')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .transform((s) => s.toLowerCase()),
  code: z
    .string({ required_error: 'El código es requerido' })
    .min(1, 'El código es requerido')
    .max(10, 'El código no puede tener más de 10 caracteres')
    .transform((s) => s.toLowerCase()),
  prefix: z
    .string({ required_error: 'El prefijo es requerido' })
    .min(1, 'El prefijo es requerido')
    .max(10, 'El prefijo no puede tener más de 10 caracteres')
    .transform((s) => s.toLowerCase()),
  // idCountry: z
  //   .string({ required_error: 'El ID del país es requerido' })
  //   .min(1, 'El ID del país es requerido')
  //   .refine((val) => /^\d+$/.test(val), {
  //     message: 'El ID del país debe ser un número válido',
  //   })
  //   .transform((val) => Number(val))
  //   .refine((val) => Number.isInteger(val) && val > 0 && val <= 500, {
  //     message: 'El ID del país debe estar entre 1 y 500',
  //   }),
  idCountry: z
    .number({ required_error: 'El ID del país es requerido' })
    .int('El ID del país debe ser un número entero')
    .min(1, 'El ID del país debe estar entre 1 y 500')
    .max(500, 'El ID del país debe estar entre 1 y 500'),
});

export type ProvinceFormValues = z.infer<typeof schemaProvinceForm>;
