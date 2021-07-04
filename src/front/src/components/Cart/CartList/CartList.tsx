import React from "react";
import {useAppSelector} from "../../../store";
import CartProduct from "../CartProduct/CartProduct";
import CartListSidebar from "../CartListSidebar/CartListSidebar";

function CartList() {
	const cart = useAppSelector(state => state.cart);

	let cartProducts;
	if (cart.products.length > 0) {
		cartProducts = cart.products.map(product => (
			<li key={product.name}>
				<CartProduct product={product}/>
			</li>
		));
	} else {
		cartProducts = (
			<span>There is no items in your cart</span>
		);
	}

	return(
		<div className="flex w-full bg-gray-200 justify-around">
			<div className="flex flex-col w-2/3 h-full">
				<ul>
					{cartProducts}
				</ul>
			</div>
			<CartListSidebar />
		</div>
	);
}

export default CartList;