import mongoose from "mongoose";
import config from "../../config.json";
import Product from "../models/product";
import Order from "../models/order";


export class DbClient {
	constructor() {
		mongoose.connect(config.dbUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	}

	getProducts() {
		Product.find().lean().exec(this.errorAndResultCallback);
	}

	getProductsByCategory(category: string) {
		Product.find({category: category}).lean().exec(this.errorAndResultCallback);
	}

	addProduct(product: object) {
		let newProduct = new Product(product);
		newProduct.save(this.errorCallback);
	}

	removeProduct(id: number) {
		Product.deleteOne({"id": id}, this.errorCallback); 
	}

	getOrdersByUser(googleId: string) {
		Order.find({GoogleId: googleId}).lean().exec(this.errorAndResultCallback);
	}

	getOrder(id: number) {
		Order.findOne({Id: id}).lean().exec(this.errorAndResultCallback);
	}

	addOrder(order: object) {
		let newOrder = new Order(order);
		newOrder.save(this.errorCallback);
	}

	removeOrder(id: number) {
		Order.deleteOne({"id" : id}, this.errorCallback); 
	}

	private errorCallback(err) {
		if (err) return; //TODO Error handling
	}

	private errorAndResultCallback(err, res) {
		if (err) return; //TODO Error handling

		return res;
	}
}

export default DbClient;
