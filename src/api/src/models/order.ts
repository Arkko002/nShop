import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
	GoogleId: {
		type: String,
		required: true
	},
	FullName: {
		type: String,
		required: true
	},
	Email: {
		type: String,
		required: true,
	},
	Address: {
		type: String,
		required: true
	},
	ProductIds: {
		type: [mongoose.Schema.Types.ObjectId],
		required: true
	}
});

export default mongoose.model("OrderPage", OrderSchema);
