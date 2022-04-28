import { z } from 'zod';

export const VehicleInterface = z.object({
  model: z.string()
    .min(3, { message: 'Model must be at least 3 characters' }),
  year: z.number()
    .min(1900, { message: 'Year must be at least 1900' })
    .max(2020, { message: 'Year must be at most 2020' }),
  color: z.string()
    .min(3, { message: 'Color must be at least 3 characters' }),
  status: z.boolean().optional(),
  buyValue: z.number()
    .int({ message: 'Buy value must be an integer' }),
});

export type Vehicle = z.infer<typeof VehicleInterface>;