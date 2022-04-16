import { z } from "zod";

export const blogSchema = z.object({
    body: z.object({
        blogtitle: z.string({
            required_error: "Full blogtitle is required",
        }),
        email: z
            .string({
                required_error: "email is required",
            })
            .email("Not a valid email"),
        blog: z
            .string({
                required_error: "text is required",
            }),
    }),
});

interface IBaseProduct {
    id: number;
}

export class Blog implements IBaseProduct {
    id!: number;
    blogtitle!: string;
    email!: string;
    blog!: string;
}