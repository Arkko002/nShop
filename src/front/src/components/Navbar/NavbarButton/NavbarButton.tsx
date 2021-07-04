import React from "react";
import {NavLink} from "react-router-dom";

interface NavbarButtonProps {
    name: string,
    link: string,
	iconUrl: string,
}

function NavbarButton(props: NavbarButtonProps) {
	return(
		<NavLink className="justify-items-center flex px-2 h-full hover:bg-blue-400 self-center" activeClassName="bg-blue-400" exact to={props.link}>
			<img className="object-scale-down" src={props.iconUrl} alt={props.name}/>
		</NavLink>
	);
}

export default NavbarButton;