import { z } from "zod";

export const formSchema = z.object({
  formType: z.string().min(2),
  payload: z.object({
    name: z.string().min(2),
    email: z.email(),
    message: z.string().min(5),
  }),
});

export type FormPayload = z.infer<typeof formSchema>;
