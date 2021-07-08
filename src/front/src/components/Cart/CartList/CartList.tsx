import React from "react";
import {useAppSelector} from "../../../store";
import CartProduct from "../CartProduct/CartProduct";
import CartListSidebar from "../CartListSidebar/CartListSidebar";

function CartList(): React.ReactElement {
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

	return (
		<div className="flex justify-center w-2/3">
			<div className="flex flex-col w-full">
				<h2 className="py-2 text-2xl font-bold">Your cart</h2>
				<div className="flex justify-center w-full">
					<ul className="w-full mr-6 border-t-4 border-blue-300">
						{cartProducts}
					</ul>
					<CartListSidebar/>
				</div>
			</div>
		</div>
	);
}

export default CartList;
