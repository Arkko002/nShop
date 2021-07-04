import React from "react";
import Product from "../../../models/product";
import ProductCard from "../ProductCard/ProductCard";
import ProductListSidebar from "../ProductListSidebar/ProductListSidebar";

interface ProductListProps {
	products: Array<Product>
}

function ProductList(props: ProductListProps) {
	//TODO

	return (
		<div className="flex bg-gray-100 w-full h-screen lg:px-48 self-center">
			<ProductListSidebar/>
			<ul className="w-full ml-5 bg-white">
				{props.products.map(product => (
					<li key={product.name}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductList;
