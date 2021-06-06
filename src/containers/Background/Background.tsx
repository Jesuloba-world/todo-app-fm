import React from "react";

interface backgroundProps {
	isDark: Boolean;
}

const Background: React.FC<backgroundProps> = (props) => (
	<div className={`background background--dark__${props.isDark}`}>
		<div
			className={`background--head background--head--dark__${props.isDark}`}
		></div>
		<div className={`background--app-holder`}>
			<div className={`background--app-holder__main`}>
				{props.children}
			</div>
		</div>
	</div>
);

export default Background;
