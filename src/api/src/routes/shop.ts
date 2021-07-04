import express from "express";
import DbClient from "../services/db.js";


const router = express.Router();
const db = new DbClient();


router.get("/products", (req, res) => {
	let products = db.getProducts();
	res.json(products);
});

router.get("/products/:category", (req, res) => {
	let products = db.getProductsByCategory(req.params.category);
	res.json(products);

});

// TODO Get all orders for user stored in session
router.get("/orders/", (req, res) => {

});

router.get("/orders/:id", (req, res) => {
	let id = parseInt(req.params.id);
	if (id === NaN) {
		res.status(400).send(new Error("Provided ID was not a number"));
	}

	let order = db.getOrder(id);
	res.json(order);

});


export default router;
