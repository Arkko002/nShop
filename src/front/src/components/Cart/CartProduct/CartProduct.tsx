import React from "react";
import Product from "../../../models/product";

interface CartProductProps {
    product: Product
}

function CartProduct(props: CartProductProps) {
	return(
		<div className="flex items-center justify-around w-full bg-white border-b-2">
			<img className="w-32 h-32" src={props.product.image}/>
			<span>{props.product.name}</span>

			<span className="font-bold">{props.product.price}$</span>
			{/*TODO Quantity*/}
			<label>
				Quantity:
				<input className="w-16 pl-2" value="1" type="number" min="1" max="99"/>
			</label>
		</div>
	);
}

export default CartProduct;
