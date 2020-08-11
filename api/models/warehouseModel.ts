import mongoose from "mongoose";

//Define a schema
const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true
	},
	location: {
        type: String,
        trim: true,		
		required: true
	}
});

module.exports = mongoose.model('Warehouse', WarehouseSchema)