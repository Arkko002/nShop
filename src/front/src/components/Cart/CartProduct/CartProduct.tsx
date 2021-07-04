import React from "react";
import Product from "../../../models/product";

interface CartProductProps {
    product: Product
}

function CartProduct(props: CartProductProps) {
	return(
		<div className="flex w-full justify-around border-b-2 bg-white">
			<div className="flex">
				<img className="w-32 h-32" src={props.product.image}/>
				<span className="pt-5">{props.product.name}</span>
			</div>
			<div className="flex flex-col justify-around">
				<span>{props.product.price}$</span>
				{/*TODO Quantity*/}
				<label className="">
					Quantity:
					<input type="number" min="1" max="99"/>
				</label>
			</div>
		</div>
	);
}

export default CartProduct;