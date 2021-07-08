import React from "react";
import {getProductsByCategory} from "../../../services/product.service";
import Product from "../../../models/product";
import RatingButton from "../ProductListSidebar/RatingButton";
import TextLink from "../../Link/TextLink";
import QuantityControl from "../../Controls/QuantityControl";
import {add} from "../../../store/cart";
import {useDispatch} from "react-redux";

interface ProductPageProps {
	product: Product
}

function ProductPage(props: ProductPageProps) {
	const dispatch = useDispatch();
	//TODO Get 10 random products, map to cards
	// const similarProducts = getProductsByCategory(props.category);
	// // const similarProductsCards = similarProducts.map(product => {
	// // 	<li>
	// //
	// // 	</li>;
	// });

	return(
		<div className="flex items-center p-4 flex-col w-full xl:w-2/3 bg-white">
			<div className="flex w-full border-b-2">
				<div className="flex flex-col">
					<span className="font-bold text-lg">{props.product.name}</span>
					<RatingButton fullStarNumber={5}/>
				</div>
			</div>

			<div className="flex w-full flex-shrink-0 h-1/2 lg:h-2/3">
				<img className="w-1/2 object-contain" src={props.product.image}/>

				<div className="flex w-1/2 flex-col">
					<div className="flex flex-col pt-4">
						<span className="font-bold text-lg">{props.product.name}</span>
						<span className="text-sm text-gray-400">from <TextLink text="nShop" to=""/></span>
						<span className="font-bold text-3xl pt-6 pb-6">{props.product.price}<span className="text-xl">,00 $</span></span>
					</div>

					<div className="flex w-4/5 flex-col border-t-2 border-b-2">
						<div className="flex justify-between pt-4">
							<div className="flex flex-col">
								<span>Free shipping</span>
								<span className="text-sm text-gray-400">Delivery within a week</span>
							</div>
							<TextLink text="SHIPPING" to=""/>
						</div>
						<div className="flex justify-between pt-2 pb-4">
							<span>14 day return period</span>
							<TextLink text="RETURN" to=""/>
						</div>
					</div>

					<div className="flex flex-col pt-6">
						<label>
							Quantity:
							<QuantityControl/>
						</label>

						<input className="h-12 w-full xl:w-2/3 mb-4 mt-6 text-white bg-blue-500 hover:bg-blue-400" type="button" value="Buy Now"/>
						<input className="h-12 w-full xl:w-2/3 text-white bg-blue-500 hover:bg-blue-400" type="button" value="Add to Cart" onClick={() => dispatch(add(props.product))}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
