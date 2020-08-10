import mongoose from "mongoose";

//Define a schema
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true
	},
	quantity: {
        type: Number,
        default: 0
	}
});

module.exports = mongoose.model('Product', ProductSchema)