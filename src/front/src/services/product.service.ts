import Product from "../models/product";
import api from "./api";
import product from "../../../api/src/models/product";


const products: Array<Product> = [
	<Product> {
		name: "Product1",
		description: "This is a product",
		price: 1,
		category: "Category1",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product> {
		name: "Product2",
		description: "This is a product",
		price: 1,
		category: "Category2",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product> {
		name: "Product3",
		description: "This is a product",
		price: 1,
		category: "Category2",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product>{
		name: "Product4",
		description: "This is a product",
		price: 1,
		category: "Category3",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product>{
		name: "Product5",
		description: "This is a product",
		price: 1,
		category: "Category3",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product>{
		name: "Product6",
		description: "This is a product",
		price: 1,
		category: "Category3",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product>{
		name: "Product5",
		description: "This is a product",
		price: 1,
		category: "Category3",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
	<Product>{
		name: "Product5",
		description: "This is a product",
		price: 1,
		category: "Category3",
		image: "https://i.imgur.com/l9UeHxd.png"
	},
];

//TODO Add cacheing
//TODO Global error state with redux
export function getAllProducts() {
	return products;
	// return api.get<ProductPage[]>("/products");
}

export function getProductsByCategory(category: string) {
	return products.filter(x => x.category === category);
	// return api.get<ProductPage[]>(`/products/${category}`);
}
