import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

//Defining schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: 'Please enter your name',
	},
	email: {
		type: String,
		trim: true,
		required: 'Please enter your email addrress',
	},
	password: {
		type: String,
		trim: true,
		required: 'Please enter your password',
	}
});

// Hashing user password before saving into database
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('User', UserSchema);