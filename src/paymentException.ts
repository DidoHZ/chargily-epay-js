/*
interface EpayException extends Error {
    new(message?: string, stack?: unknown, status?: string): EpayException;
    (message?: string, stack?: unknown, status?: string): EpayException;
    status: string
    isEpayException: true;
    readonly prototype: EpayException;
}
*/

export class PaymentException extends Error{
    constructor(message?: string, errors?: Array<string> | unknown , status?: string){
    super(message);
    this.errors = errors;
    this.status = status;

    Object.setPrototypeOf(this, PaymentException.prototype);
    }
    
    status?: string;
    errors?: Array<string> | unknown
}