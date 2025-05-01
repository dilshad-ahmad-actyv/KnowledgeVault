// // Donut design
var CrediCardPayment = /** @class */ (function () {
    function CrediCardPayment() {
    }
    CrediCardPayment.prototype.process = function (amount) {
        console.log("Payment of ".concat(amount, " amount is processing using card payment system."));
    };
    return CrediCardPayment;
}());
var UPIPayment = /** @class */ (function () {
    function UPIPayment() {
    }
    UPIPayment.prototype.process = function (amount) {
        console.log("Payment of ".concat(amount, " amount is processing using UPI payment system."));
    };
    return UPIPayment;
}());
var DebitCardPayment = /** @class */ (function () {
    function DebitCardPayment() {
    }
    DebitCardPayment.prototype.process = function (amount) {
        console.log("Payment of ".concat(amount, " amount is processing using Debit card system."));
    };
    return DebitCardPayment;
}());
var PaymentService = /** @class */ (function () {
    function PaymentService(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    PaymentService.prototype.payBill = function (amount) {
        this.paymentMethod.process(amount);
    };
    return PaymentService;
}());
var upi = new UPIPayment();
var debit = new DebitCardPayment();
var credit = new CrediCardPayment();
var paymentService = new PaymentService(credit);
paymentService.payBill(1000);
