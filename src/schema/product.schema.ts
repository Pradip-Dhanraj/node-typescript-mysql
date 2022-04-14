import { z } from "zod";

const dataSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Full name is required",
        }),
        email: z
            .string({
                required_error: "Email is required",
            })
            .email("Not a valid email"),
    }),
});

export const updateProductSchema = z.object({
    body: z.object({
        id: z.number({
            required_error: "Id required to update data in table",
        }),
        name: z.string({
            required_error: "Full name is required",
        }),
        email: z
            .string({
                required_error: "Email is required",
            })
            .email("Not a valid email"),
    }),
});

export default dataSchema;

interface IBaseProduct {
    id: number;
}

export class Product implements IBaseProduct {
    id!: number;
    name!: string;
    email!: string;
}