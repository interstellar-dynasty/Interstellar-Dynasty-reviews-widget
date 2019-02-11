const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const dbUrl = 'mongodb://localhost:27017/Reviews';
const mongoImport = require('mongoimport');

mongoose.connect(dbUrl, { useNewUrlParser: true },(err) => {
    if (err) {
        console.log('error in mongoose.connect', err)
    } else {
        console.log('database connected')
    }
});


let reviewSchema = new Schema({
    user_name: String,
    review: String,
    rating: Number,
    photo: { data: Buffer, contentType: String}
    
},
{
    collection: 'reviews'
});

let Review = mongoose.model('Review', reviewSchema);

let queryReviews = () => {
    return Review.find( { review: {$exists : true} }, {user_name : 1, review : 1, rating : 1, _id : 0})
}



module.exports = {
    Review,
    reviewSchema,
    queryReviews
}