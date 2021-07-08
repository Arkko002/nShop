import React from "react";
import Product from "../../../models/product";
import ProductCard from "../ProductCard/ProductCard";
import ProductListSidebar from "../ProductListSidebar/ProductListSidebar";

interface ProductListProps {
	products: Array<Product>
}

function ProductList(props: ProductListProps): React.ReactElement {
	//TODO

	return (
		<div className="flex self-start w-full h-full lg:px-48">
			<ProductListSidebar/>
			<ul className="w-full ml-5 overflow-scroll bg-white">
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
