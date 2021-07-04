import React from "react";

interface OrderProps {
	fullName: string;
	email: string;
	address: string;
	productIds: Array<number>;
}

function OrderPage(props: OrderProps) {
	//TODO Map IDs to product names
	const orderedProducts = props.productIds;

	return(
		<div>
			<span>props.fullName</span>
			<span>props.email</span>
			<span>props.address</span>
			<ul>{orderedProducts}</ul>
		</div>
	);
}

export default OrderPage;

