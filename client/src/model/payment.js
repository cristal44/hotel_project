export default class Payment {
    constructor(roomPrice, days) {
        this.roomPrice = roomPrice;
        this.days = days;
    }

    getRoomAmount() {
        return (this.roomPrice * this.days);
    }

    getTax(){
        return (this.getRoomAmount() * 0.1);
    }

    getTotal() {
        return this.getRoomAmount() + this.getTax();
    }
}