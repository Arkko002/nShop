import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const UserSchema = new mongoose.Schema({
	googleId: {
		type: String,
		required: true,
	},
	displayName: {
		type: String,
		required: true,
	  },
	firstName: {
		type: String,
		required: true,
	  },
	lastName: {
		type: String,
		required: true,
	  },
	image: {
		type: String,
	  },
	email:{
		type:String,
		required: true,
	  },
	createdAt: {
		type: Date,
		default: Date.now,
	  },
});

UserSchema.plugin(findOrCreate);
export default mongoose.model("User", UserSchema);
