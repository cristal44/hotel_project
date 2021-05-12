export default class Reservation {
    adult = 1;
    children = 0;
    days;
    checkin = null;
    checkout = null;   
    room_id;
    guest = null;
    bill;

    constructor(adult, children, checkin, checkout) {
        this.adult = adult;
        this.children = children;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}
