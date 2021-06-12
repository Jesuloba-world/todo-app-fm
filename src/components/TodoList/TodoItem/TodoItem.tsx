import React from "react";
import Oval from "../../UI/shape/oval";
import XShape from "../../UI/shape/xShape";

interface props {
	id: string;
	text: String;
	isDark: Boolean;
	deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<props> = (props) => {
	return (
		<li className={`todoItem todoItem--dark__${props.isDark}`}>
			<div className="todoItem--div">
				<div className="todoItem--Oval">
					<Oval isDark={props.isDark} />
				</div>
				<p
					className={`todoItem--text todoItem--text--dark__${props.isDark}`}
				>
					{props.text}
				</p>
				<div className="todoItem--XShape">
					<XShape deleteTodo={props.deleteTodo} itemId={props.id} />
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
