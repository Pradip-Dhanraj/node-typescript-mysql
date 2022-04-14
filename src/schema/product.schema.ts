import { z } from "zod";

export const dataSchema = z.object({
    body: z.object({
        product_name: z.string({
            required_error: "Full product_name is required",
        }),
        support_contact_email: z
            .string({
                required_error: "support_contact_email is required",
            })
            .email("Not a valid support_contact_email email"),
    }),
});

export const updateProductSchema = z.object({
    body: z.object({
        id: z.number({
            required_error: "Id required to update data in table",
        }),
        product_name: z.string({
            required_error: "Full product_name is required",
        }),
        support_contact_email: z
            .string({
                required_error: "support_contact_email is required",
            })
            .email("Not a valid support_contact_email email"),
    }),
});

interface IBaseProduct {
    id: number;
}

export class Product implements IBaseProduct {
    id!: number;
    product_name!: string;
    support_contact_email!: string;
}