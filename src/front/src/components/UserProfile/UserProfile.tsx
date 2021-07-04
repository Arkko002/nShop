import React from "react";
import {Link} from "react-router-dom";

function UserProfile() {
	//TODO Get user from redux state
	
	return (
		<div>
			<h1>{name}&apos;s profile</h1>
			<Link to="/orders/:user">View user&apos;s orders</Link>
		</div>
	);
}

export default UserProfile;
