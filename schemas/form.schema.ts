import { z } from "zod"

export const contactUsFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})