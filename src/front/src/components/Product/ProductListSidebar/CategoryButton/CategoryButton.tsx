import React from "react";
import {Link} from "react-router-dom";

interface CategoryButtonProps {
    category: string
}

function CategoryButton(props: CategoryButtonProps) {
	return (
		<div className="border-b-2 border-blue-100">
			<Link className="flex items-center hover:text-blue-300" to={"/products/" + props.category}>{props.category}</Link>
		</div>
	);
}

export default CategoryButton;