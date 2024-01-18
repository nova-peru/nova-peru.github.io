import { z } from "zod"

export const checkoutFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})