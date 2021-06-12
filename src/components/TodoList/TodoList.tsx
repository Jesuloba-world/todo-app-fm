import React from "react";

import TodoItem from "./TodoItem/TodoItem";
import todoItem from "../../models/todoItem.model";

interface props {
	items: todoItem[];
	isDark: Boolean;
	deleteTodo: (id: String) => void;
	toggleComplete: (id: String) => void;
}

const TodoList: React.FC<props> = (props) => {
	return (
		<div className={`todoList todoList--dark__${props.isDark}`}>
			<ul>
				{props.items.map((item) => (
					<TodoItem
						id={item.id}
						key={item.id}
						isCompleted={item.completed}
						text={item.todo}
						isDark={props.isDark}
						deleteTodo={props.deleteTodo}
						toggleComplete={props.toggleComplete}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
