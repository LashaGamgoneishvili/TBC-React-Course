import { z } from "zod";

export const profileEdit = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "name must be at least 2 characters long" })
    .max(20, { message: "name must be at most 20 characters long" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "lastName must be at least 2 characters long" })
    .max(20, { message: "lastName must be at most 20 characters long" }),
  email: z
    .string()
    .trim()
    .min(2, { message: "email must be at least 2 characters long" })
    .max(50, { message: "email must be at most 20 characters long" })
    .email({ message: "Invalid email address" }),
  id: z.string(),
});

export type Input = z.infer<typeof profileEdit>;
