import mongoose from "mongoose";

const database = 'mongodb://localhost/product-stock';

mongoose.connect(database);
mongoose.Promise = global.Promise;

module.exports = mongoose;