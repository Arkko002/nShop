import React from "react";
import {getProductsByCategory} from "../../../services/product.service";
import Product from "../../../models/product";

interface ProductPageProps {
	product: Product
}

function ProductPage(props: ProductPageProps) {
	//TODO Get 10 random products, map to cards
	// const similarProducts = getProductsByCategory(props.category);
	// // const similarProductsCards = similarProducts.map(product => {
	// // 	<li>
	// //
	// // 	</li>;
	// });

	return(
		<div>
			<section>
				<span>{props.product.name}</span>
				<span>{props.product.price}</span>
				<span>{props.product.category}</span>
				<span>{props.product.description}</span>
				<img src={props.product.image}/>
			</section>

			<section>
				<span>Similar products</span>
				{/*<ul>{similarProducts}</ul>*/}
			</section>
		</div>
	);
}

export default ProductPage;
