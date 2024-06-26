import { z } from "zod";

export const profileEdit = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "name must be at least 2 characters long" })
    .max(20, { message: "name must be at most 20 characters long" })
    .optional(),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "lastName must be at least 2 characters long" })
    .max(20, { message: "lastName must be at most 20 characters long" })
    .optional(),
  email: z
    .string()
    .trim()
    .min(2, { message: "email must be at least 2 characters long" })
    .max(50, { message: "email must be at most 20 characters long" })
    .email({ message: "Invalid email address" })
    .optional(),
  id: z
    .string()
    .min(1, { message: "email must be at least 1 characters long" }),
  image: z.string().optional(),
});
export const CreateUser = z.object({
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
    .min(5, { message: "email must be at least 2 characters long" })
    .max(50, { message: "email must be at most 20 characters long" })
    .email({ message: "Invalid email address" }),
  id: z
    .string()
    .trim()
    .min(1, { message: "Id must be at least 1 characters long" }),
  image: z.string().trim().min(10, { message: "Image is necessary" }),
});
export const CreateProductType = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: "title must be at least 4 characters long" })
    .max(20, { message: "title must be at most 20 characters long" }),
  description: z
    .string()
    .trim()
    .min(5, { message: "description must be at least 5 characters long" })
    .max(50, { message: "description must be at most 50 characters long" }),
  price: z
    .string()
    .min(2, { message: "price must be at least 2 characters long" })
    .max(10, { message: "price must be at most 10 characters long" }),
  discount: z
    .string()
    .max(3, { message: "discount must be at most 3 characters long" })
    .optional(),
  image: z.string().trim().min(10, { message: "Image is necessary" }),
});
export const UpdateProductType = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: "title must be at least 4 characters long" })
    .max(20, { message: "title must be at most 20 characters long" }),
  description: z
    .string()
    .trim()
    .min(5, { message: "description must be at least 5 characters long" })
    .max(50, { message: "description must be at most 50 characters long" }),
  price: z
    .string()
    .min(2, { message: "price must be at least 2 characters long" })
    .max(10, { message: "price must be at most 10 characters long" }),
  discount: z
    .string()
    .max(5, { message: "discount must be at most 3 characters long" })
    .optional(),

  image: z.string().trim().min(10, { message: "Image is necessary" }),
  id: z.string().trim().min(1, { message: "Image is necessary" }),
});
export const CreateBlogType = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: "title must be at least 4 characters long" })
    .max(50, { message: "title must be at most 20 characters long" }),
  description: z
    .string()
    .trim()
    .min(5, { message: "description must be at least 5 characters long" })
    .max(500, { message: "description must be at most 50 characters long" }),
  detaildDescription: z
    .string()
    .trim()
    .min(5, {
      message: "detaildDescription must be at least 5 characters long",
    })
    .max(1000, {
      message: "detaildDescription must be at most 500 characters long",
    }),
  time: z
    .string()
    .min(2, { message: "time must be at least 2 characters long" })
    .max(10, { message: "time must be at most 10 characters long" }),
  image: z.string().trim().min(10, { message: "Image is necessary" }),
  userId: z.string().trim().min(1, { message: "id is necessary" }),
});
export const UpdateBlogType = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: "title must be at least 4 characters long" })
    .max(50, { message: "title must be at most 20 characters long" }),
  description: z
    .string()
    .trim()
    .min(5, { message: "description must be at least 5 characters long" })
    .max(500, { message: "description must be at most 50 characters long" }),
  detaildDescription: z
    .string()
    .trim()
    .min(5, {
      message: "detaildDescription must be at least 5 characters long",
    })
    .max(1000, {
      message: "detaildDescription must be at most 500 characters long",
    }),
  time: z
    .string()
    .min(2, { message: "time must be at least 2 characters long" })
    .max(10, { message: "time must be at most 10 characters long" }),
  blogId: z.string().trim().min(1, { message: "id is necessary" }),
});

export type Input = z.infer<typeof profileEdit>;

export interface Result {
  name?: string;
  lastName?: string;
  email?: string;
  id: string;
  image?: string;
}
