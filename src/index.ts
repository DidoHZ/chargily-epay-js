import { EPAY_CHARGILY_URL, Invoice } from "./configuration";
import { IInvoice, ICheckoutURL } from "./IInvoice";
import axios from "axios";

export const createPayment = async (invoice: Invoice) => {
  const inv: IInvoice = {
    amount: invoice.amount,
    invoice_number: invoice.invoiceNumber,
    client: invoice.client,
    mode: invoice.mode,
    webhook_url: invoice.webhookUrl,
    back_url: invoice.backUrl,
    discount: invoice.discount,
  };

  try {
    let res: any;
    const { data } = await axios
      .post<ICheckoutURL>(EPAY_CHARGILY_URL, inv, {
        headers: {
          Accept: "application/json",
          "X-Authorization": invoice.appKey,
        },
        timeout: 1000,
      })
      .then((response) => {
        return (res = response);
      });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log("errors : ", error.response?.data);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
