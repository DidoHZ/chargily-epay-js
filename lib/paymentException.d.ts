export declare class PaymentException extends Error {
    constructor(message?: string, errors?: Array<string> | unknown, status?: string);
    status?: string;
    errors?: Array<string> | unknown;
}
