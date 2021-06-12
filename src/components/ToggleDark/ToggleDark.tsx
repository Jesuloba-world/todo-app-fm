import React from "react";
import { ReactComponent as Sun } from "../../images/icon-sun.svg";
import { ReactComponent as Moon } from "../../images/icon-moon.svg";

interface props {
	toggleDark: () => void;
	isDark: Boolean;
}

const ToggleDark: React.FC<props> = (props) => {
	return (
		<div onClick={props.toggleDark}>
			{props.isDark ? <Sun /> : <Moon />}
		</div>
	);
};

export default ToggleDark;
