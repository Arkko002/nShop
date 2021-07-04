import React from "react";
import {Link} from "react-router-dom";
import Product from "../../../models/product";
import {useDispatch} from "react-redux";
import {add} from "../../../store/cart";


interface ProductCardProps {
	product: Product
}

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch();

	return (
		<Link to={"/product/" + props.product.name}>
			<div className="flex flex-1 w-full border-b-2 w-full justify-between hover:bg-gray-100">
				<div className="flex">
					<img className="h-32 w-32" src={props.product.image}/>
					<div className="flex flex-col">
						<span>{props.product.name}</span>
						<span className="text-xs">{props.product.category}</span>
						<span className="text-3xl font-bold">{props.product.price}<span className="text-lg font-bold">,00$</span></span>
					</div>
				</div>

				<div className="flex flex-col mr-2 w-32 h-20 self-center">
					<input className="h-full mb-4 bg-blue-500 text-white hover:bg-blue-400" type="button" value="Buy Now"/>
					<input className="h-full bg-blue-500 text-white hover:bg-blue-400" type="button" value="Add to Cart" onClick={() => dispatch(add(props.product))}/>
				</div>
			</div>
		</Link>
	);

}

export default ProductCard;
