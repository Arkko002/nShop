import React from "react";

function CartListSidebar() {
	return(
		<div className="flex flex-col bg-white">
			<form>
				<label className="flex flex-col">
                  E-mail:
					<input type="email"/>
				</label>
				<label className="flex flex-col">
                   Address:
					<input type="text"/>
				</label>
				<label className="flex flex-col">
                   Name:
					<input type="text"/>
				</label>
				<label className="flex flex-col">
                   Phone:
					<input type="tel"/>
				</label>

				<input type="submit" value="Order"/>
			</form>
		</div>
	);
}

export default CartListSidebar;