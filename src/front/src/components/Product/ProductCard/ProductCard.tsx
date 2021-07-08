import React from "react";
import {Link} from "react-router-dom";
import Product from "../../../models/product";
import {useDispatch} from "react-redux";
import {add} from "../../../store/cart";
import RatingButton from "../ProductListSidebar/RatingButton";


interface ProductCardProps {
	product: Product
}

function ProductCard(props: ProductCardProps): React.ReactElement {
	const dispatch = useDispatch();

	return (
		<Link to={"/product/" + props.product.name}>
			<div className="flex justify-between flex-1 w-full border-b-2 hover:bg-gray-100">
				<div className="flex">
					<img className="w-32 h-32" src={props.product.image}/>
					<div className="flex flex-col justify-between h-full pt-2">
						<div className="flex flex-col">
							<div className="flex">
								<span>{props.product.name}</span>
								<span className="self-center text-xs">&nbsp;| {props.product.category}</span>
							</div>
							
							<RatingButton fullStarNumber={5}/>
						</div>
						<span className="pb-2 text-3xl font-bold">{props.product.price}<span className="text-lg font-bold">,00$</span></span>
					
					</div>
				</div>

				<div className="flex flex-col self-center w-32 h-20 mr-2">
					<input className="h-full mb-4 text-white bg-blue-500 hover:bg-blue-400" type="button" value="Buy Now"/>
					<input className="h-full text-white bg-blue-500 hover:bg-blue-400" type="button" value="Add to Cart" onClick={() => dispatch(add(props.product))}/>
				</div>
			</div>
		</Link>
	);

}

export default ProductCard;
