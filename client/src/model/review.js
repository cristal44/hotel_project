export default class Review {
    comment;
    date;
    rating;
    name;

    constructor(name, rating, comment){
        this.name = name;
        this.comment = comment;
        this.date = new Date().toLocaleString();
        this.rating = rating;
    }

}