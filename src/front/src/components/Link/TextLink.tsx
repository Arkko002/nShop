import React from "react";
import { Link } from "react-router-dom";

interface TextLinkProps {
    text: string;
    to: string
}

function TextLinks(props: TextLinkProps): React.ReactElement {
	return (
		<Link className="text-blue-400 hover:text-blue-300" to={props.to}>{props.text}</Link>
	);
}

export default TextLinks;