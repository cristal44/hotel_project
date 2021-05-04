export default class Room {
    room_number = null
    room_type
    room_price
    room_status
    

    constructor(room_number, room_type, room_price, room_status) {
        this.room_number = room_number
        this.room_type = room_type
        this.room_price = room_price
        this.room_status = room_status
    }
}
