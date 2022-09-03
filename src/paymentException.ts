interface PaymentException extends Error {
    status: string
}

interface  PaymentExceptionConstractor {
    new(message?: string, stack?: unknown, status?: string): PaymentException;
    (message?: string, stack?: unknown, status?: string): PaymentException;
    readonly prototype: PaymentException;
}

export declare var PaymentException: PaymentExceptionConstractor;
