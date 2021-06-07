import React from "react";

interface props {
	text: String;
}

const TodoItem: React.FC<props> = (props) => {
	return (
		<li>
			<h1>{props.text}</h1>
		</li>
	);
};

export default TodoItem;
