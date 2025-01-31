"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
var configuration_1 = require("./configuration");
var paymentException_1 = require("./paymentException");
var axios_1 = __importDefault(require("axios"));
var createPayment = function (invoice) { return __awaiter(void 0, void 0, void 0, function () {
    var inv, data, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                inv = {
                    amount: invoice.amount,
                    invoice_number: invoice.invoiceNumber,
                    client: invoice.client,
                    mode: invoice.mode,
                    webhook_url: invoice.webhookUrl,
                    back_url: invoice.backUrl,
                    discount: invoice.discount,
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default
                        .post(configuration_1.EPAY_CHARGILY_URL, inv, {
                        headers: {
                            Accept: "application/json",
                            "X-Authorization": invoice.appKey,
                        },
                        timeout: 2000,
                    })
                        .then(function (response) {
                        return response;
                    })];
            case 2:
                data = (_c.sent()).data;
                return [2 /*return*/, data];
            case 3:
                error_1 = _c.sent();
                if (axios_1.default.isAxiosError(error_1)) {
                    console.log("error message: ", error_1.message);
                    console.log("errors : ", (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data);
                    throw new paymentException_1.PaymentException(error_1.message, (_b = error_1.response) === null || _b === void 0 ? void 0 : _b.data, error_1.status);
                }
                else {
                    console.log("unexpected error: ", error_1);
                    throw error_1;
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createPayment = createPayment;
