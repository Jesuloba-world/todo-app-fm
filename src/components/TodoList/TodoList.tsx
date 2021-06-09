import React from "react";

import TodoItem from "./TodoItem/TodoItem";
import todoItem from "../../models/todoItem.model";

interface props {
	items: todoItem[];
	isDark: Boolean;
}

const TodoList: React.FC<props> = (props) => {
	return (
		<div className={`todoList todoList--dark__${props.isDark}`}>
			<ul>
				{props.items.map((item) => (
					<TodoItem
						key={item.id}
						text={item.todo}
						isDark={props.isDark}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
