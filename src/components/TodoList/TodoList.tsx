import React from "react";

import TodoItem from "./TodoItem/TodoItem";
import todoItem from "../../models/todoItem.model";

interface props {
	items: todoItem[];
}

const TodoList: React.FC<props> = (props) => {
	return (
		<div>
			<ul>
				{props.items.map((item) => (
					<TodoItem text={item.todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
