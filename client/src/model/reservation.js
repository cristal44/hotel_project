export default class Reservation {
    adult = 1;
    child = 0;
    days;
    checkin = null;
    checkout = null;   
    room_id;
    guest = null;
    bill;
    hotel;
    hotel_id;
    reservation_id

    constructor( hotel, adult, child, checkin, checkout) {
        this. hotel =  hotel
        this.adult = adult;
        this.child = child;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}
