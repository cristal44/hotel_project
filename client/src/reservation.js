export default class Reservation {
    reservation_id;
    room;
    guest;
    adult = 1;
    children = 0;
    checkin = null;
    checkout = null;    

    
    constructor(adult, children, checkin, checkout) {
        this.adult = adult;
        this.children = children;
        this.checkin = checkin;
        this.checkout = checkout;
    }
    
}