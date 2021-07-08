import React from "react";

interface CartListSidebarInputProps {
	label: string
	inputType: string
}


function CartListSidebarInput(props: CartListSidebarInputProps): React.ReactElement  {
	return(
		<label className="flex flex-col p-2">
			{props.label}
			<input className="border" type={props.inputType}/>
		</label>
	);

}

export default CartListSidebarInput;
