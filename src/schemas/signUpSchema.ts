import {z} from "zod";

export const usernameValidation = z
    .string()
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

 export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z
        .string()
        .min(8, "Password must contain 8 characters")
        .max(14, "Password not contain more than 14 characters")
        .regex(/[A-Z]/, "Password include an uppercase letter")
        .regex(/[a-z]/, "Password include a lowercase letter")
        .regex(/[0-9]/, "Password include a number")
        .regex(/[^A-Z0-9a-z]/, "Must include a special character"),
 });