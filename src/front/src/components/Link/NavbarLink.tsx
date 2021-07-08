import React from "react";
import {Link} from "react-router-dom";

interface NavbarLinkProps {
	name: string,
	link: string
}

function NavbarLink(props: NavbarLinkProps): React.ReactElement {
	return (
		<Link className="self-center text-sm border-2 border-blue-400 border-opacity-0 hover:border-opacity-100" to={props.link}>{props.name}</Link>
	);
}

export default NavbarLink;
