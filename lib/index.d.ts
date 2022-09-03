import { Invoice } from "./configuration";
import { ICheckoutURL } from "./IInvoice";
export declare const createPayment: (invoice: Invoice) => Promise<ICheckoutURL>;
