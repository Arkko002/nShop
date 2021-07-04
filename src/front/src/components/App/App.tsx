import React, { useState, useEffect } from "react";
import {Switch, Route, useParams} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList/ProductList";
import UserProfile from "../UserProfile/UserProfile";
import ProductPage from "../Product/ProductPage/ProductPage";
import Footer from "../Footer/Footer";
import {getAllProducts, getProductsByCategory} from "../../services/product.service";
import Product from "../../models/product";
import CartList from "../Cart/CartList/CartList";

interface ProductListParams {
	category: string
}

function App() {
	const [products, setProducts] = useState(Array<Product>());
	const { category } = useParams<ProductListParams>();

	useEffect(function () {
		if (category === undefined) {
			setProducts(getAllProducts());
			// getAllProducts().then(res => {
			// 	setProducts(res.data);
			// });
		} else {
			setProducts(getProductsByCategory(category));
			// getProductsByCategory(category).then(res => {
			// 	setProducts(res.data);
			// });
		}
	});
	return (
		<div className="App flex flex-col justify-center content-center items-center align-middle">
			<Navbar/>

			<Switch>
				<Route path="/product/:name">
					{/*TODO*/}
					<ProductPage product={getAllProducts()[0]}/>
				</Route>
				<Route path="/products/:category">
					<ProductList products={products}/>
				</Route>
				<Route path="/cart">
					<CartList />
				</Route>
				<Route path="/user">
					<UserProfile />
				</Route>
				<Route exact={true} path="/">
					<ProductList products={products} />
				</Route>
			</Switch>

			<Footer/>
		</div>
	);
}

export default App;
