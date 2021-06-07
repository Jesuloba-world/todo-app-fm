import React from "react";

import AppName from "../../components/AppName/AppName";
import ToggleDark from "../../components/ToggleDark/ToggleDark";
import TodoInput from "../../components/TodoInput/TodoInput";

interface todoProps {
	toggleDark: () => void;
	isDark: Boolean;
}

const Todo: React.FC<todoProps> = (props) => {
	return (
		<div className="Todo">
			<div className="Todo--top">
				<AppName />
				<ToggleDark
					toggleDark={props.toggleDark}
					isDark={props.isDark}
				/>
			</div>
			<TodoInput isDark={props.isDark} />
		</div>
	);
};

export default Todo;
