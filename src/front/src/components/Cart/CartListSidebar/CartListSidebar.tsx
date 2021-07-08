import React from "react";
import CartListSidebarInput from "./CartListSidebarInput";

function CartListSidebar(): React.ReactElement {
	return(
		<form className="flex flex-col self-start bg-white border-t-4 border-blue-300">
			<CartListSidebarInput label="E-mail" inputType="email"/>
			<CartListSidebarInput label="Address" inputType="text"/>
			<CartListSidebarInput label="Name" inputType="text"/>
			<CartListSidebarInput label="Phone" inputType="tel"/>

			<input className="self-end mt-4 w-full h-12 bg-blue-400 hover:bg-blue-300" type="submit" value="Order"/>
		</form>
	);
}

export default CartListSidebar;
