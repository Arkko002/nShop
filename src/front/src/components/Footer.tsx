import React from "react";

function Footer(): React.ReactElement {
	return (
		<div className="flex justify-between w-screen h-8 px-2 mx-auto border-t-2 border-blue-400">
			<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
			<div>
				Arkadiusz Kołodziejek © 2021
			</div>
		</div>
	);
}

export default Footer;
