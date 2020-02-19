import mongoose from 'mongoose'

let CartSchema = new mongoose.Schema({
    id: Number,
    name: String,
    rating: Number,
    category: String,
    price: Number,
    delivery: String,
    image: String,
    details: String
});

module.exports = mongoose.model('Carts',CartSchema);