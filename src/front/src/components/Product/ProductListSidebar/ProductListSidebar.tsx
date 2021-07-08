import React from "react";
import CategoryButton from "./CategoryButton/CategoryButton";
import RatingButton from "./RatingButton";


function ProductListSidebar(): React.ReactElement {
	return(
		<div className="flex flex-col self-start w-1/3 px-2 mr-5 bg-white lg:w-1/5">
			<div className="pb-2 mt-2 mb-4 grid grid-cols-1 gap-y-2">
				<h2 className="mb-2 font-bold text-md">Shop by categories</h2>
				<CategoryButton category="Flowers"/>
				<CategoryButton category="Electronics"/>
				<CategoryButton category="Clothes"/>
				<CategoryButton category="Food"/>
				<CategoryButton category="Books"/>
			</div>

			<div className="flex flex-col w-full flex-shrink-1">
				<h2 className="mb-2 font-bold text-md">Filter offers</h2>
				<label>Price Range:</label> 
				<div className="flex flex-1 mb-5">
					<input className="flex-1 min-w-0 border focus:ring-2" type="text" placeholder="$"/>
					<span className="w-8 text-center"> - </span>
					<input className="flex-1 min-w-0 border focus:ring-2" type="text" placeholder="$$$"/>
				</div>

				<label>User ratings:</label>
				<div className="flex flex-col pt-1 pb-4">
					<RatingButton fullStarNumber={5}/>
					<RatingButton fullStarNumber={4}/>
					<RatingButton fullStarNumber={3}/>
					<RatingButton fullStarNumber={2}/>
					<RatingButton fullStarNumber={1}/>
				</div>
			</div>
		</div>
	);
}

export default ProductListSidebar;
