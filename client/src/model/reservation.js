export default class Reservation {
    adult = 1;
    child = 0;
    days;
    checkin = null;
    checkout = null;   
    room_id;
    guest = null;
    bill;

    constructor(adult, child, checkin, checkout) {
        this.adult = adult;
        this.child = child;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}
