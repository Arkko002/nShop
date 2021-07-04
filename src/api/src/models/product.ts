import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	Description: {
		type: String
	},
	Price: {
		type: Number,
		required: true
	},
	Category: {
		type: String,
		required: true
	}
	//Image TODO
});

export default mongoose.model("ProductPage", ProductSchema);
