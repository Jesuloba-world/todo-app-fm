import React from "react";
import Oval from "../../UI/shape/oval";

interface props {
	text: String;
	isDark: Boolean;
}

const TodoItem: React.FC<props> = (props) => {
	return (
		<li className={`todoItem todoItem--dark__${props.isDark}`}>
			<div className="todoItem--div">
				<div className="Item--Oval--wrapper">
					<Oval isDark={props.isDark} />
				</div>
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
