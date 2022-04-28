import { z } from 'zod';
import { VehicleInterface } from './VehicleInterface';

const CarInterface = VehicleInterface.extend({
  doorsQty: z.number()
    .min(2, { message: 'Doors quantity must be at least 2' })
    .max(4, { message: 'Doors quantity must be at most 4' }),
  seatsQty: z.number()
    .min(2, { message: 'Seats quantity must be at least 2' })
    .max(7, { message: 'Seats quantity must be at most 7' }),
});

export type Car = z.infer<typeof CarInterface>;