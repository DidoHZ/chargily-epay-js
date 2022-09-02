import { Invoice, Mode } from "./configuration";
import { ICheckoutURL } from "./IInvoice";
export { Invoice, Mode };
export declare const createPayment: (invoice: Invoice) => Promise<string | ICheckoutURL>;
