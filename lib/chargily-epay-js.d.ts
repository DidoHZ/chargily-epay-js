import { Invoice } from "./configuration";
export interface ICheckoutUrl {
    checkout_url: string;
}
export declare const createPayment: (invoice: Invoice) => Promise<string | ICheckoutUrl>;
