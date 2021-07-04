import React from "react";
import CategoryButton from "./CategoryButton/CategoryButton";


function ProductListSidebar() {
	return(
		<div className="flex flex-col bg-white mr-5 w-1/3">
			<div className="grid grid-cols-1 gap-y-2 mt-2 pb-2 mb-4">
				<h2 className="text-lg font-bold mb-2">Categories</h2>
				<CategoryButton category="Category1"/>
				<CategoryButton category="Category2"/>
				<CategoryButton category="Category3"/>
				<CategoryButton category="Category4"/>
				<CategoryButton category="Category5"/>
			</div>

			<div className="flex flex-col flex-shrink-1 w-full">
				<h2 className="text-lg font-bold mb-2">Filters</h2>
				<label>Price Range:</label>
                
				<div className="flex flex-1">
					<input className="flex-1 ring-2 min-w-0" type="text" placeholder="$"/>
					<span className="w-8 text-center"> - </span>
					<input className="flex-1 ring-2 min-w-0" type="text" placeholder="$$$"/>
				</div>
			</div>
		</div>
	);
}

export default ProductListSidebar;