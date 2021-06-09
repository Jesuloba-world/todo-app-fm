import React from "react";
import Oval from "../../UI/shape/oval";

interface props {
	text: String;
	isDark: Boolean;
}

const TodoItem: React.FC<props> = (props) => {
	return (
		<li>
			<div className="todoItem">
				<Oval isDark={props.isDark} />
				<p
					className={`todoItem--text todoItem--text--dark__${props.isDark}`}
				>
					{props.text}
				</p>
			</div>
		</li>
	);
};

export default TodoItem;
