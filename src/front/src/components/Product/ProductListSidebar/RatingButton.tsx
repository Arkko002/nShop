import React from "react";

interface RatingButtonProps {
	fullStarNumber: number
}

//TODO Actual input instead of mock image
function RatingButton(props: RatingButtonProps): React.ReactElement {
	// TODO all of this
	const stars = Array<JSX.Element>(5);
	for (let i = 1; i <= 5; i++) {
		if(i <= props.fullStarNumber) {
			stars.push(
				<img src={process.env.PUBLIC_URL + "/star_full.png"}/>
			);
		} else {
			stars.push(
				<img src={process.env.PUBLIC_URL + "/star_empty.png"}/>
			);
		}
	}

	return (
		<div className="flex py-1">
			{stars}
		</div>
	);
}

export default RatingButton;
