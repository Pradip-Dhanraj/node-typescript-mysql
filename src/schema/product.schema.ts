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

export default dataSchema;

type Nullable<T> = T | null;

interface IBaseProduct {
    productId?: Nullable<number>;
}

class Product implements IBaseProduct {
    productId: Nullable<number>;
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.productId = 0;
        this.name = name;
        this.email = email;
    }
}