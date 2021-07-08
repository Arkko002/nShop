import React from "react";

function QuantityControl() {
	return(
		<div className="custom-number-input h-10 w-32">
			<div className="flex flex-row h-10 w-full relative bg-transparent mt-1">
				<button data-action="decrement"
					className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none">
					<span className="m-auto text-2xl font-thin">−</span>
				</button>
				<input type="number"
					className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none appearance-none"
					name="custom-input-number" value="1"/>
				<button data-action="increment"
					className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer">
					<span className="m-auto text-2xl font-thin">+</span>
				</button>
			</div>
		</div>
	);
}
export default QuantityControl;