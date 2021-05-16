export default class Review {
    comment;
    date;
    rating;
    name;

    constructor(name, rating, date, comment){
        this.name = name;
        this.comment = comment;
        this.date = date;
        this.rating = rating;
    }

}