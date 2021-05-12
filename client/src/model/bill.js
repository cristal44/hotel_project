export default class Bill {
    date;
    tax;
    roomTotalPrice;
    amount;

    constructor(date, tax, roomTotalPrice, amount ) {
        this.date = date;
        this.tax = tax;
        this.roomTotalPrice = roomTotalPrice;
        this.amount = amount
    }

}
