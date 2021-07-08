import React from "react";

interface CustomButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// TODO Consolidate all the buttons into a component
function CustomButton(props: CustomButtonProps): React.ReactElement {
	return (
		<button className="text-white h-full bg-blue-400 hover:bg-blue-300" onClick={props.onClick}/>
	);
}

export default CustomButton;