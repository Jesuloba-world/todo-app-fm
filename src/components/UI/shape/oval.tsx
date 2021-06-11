import React from "react";

interface props {
	isDark: Boolean;
}

const Oval: React.FC<props> = (props) => (
	<div className={`Oval Oval--dark__${props.isDark}`}></div>
);

export default Oval;
