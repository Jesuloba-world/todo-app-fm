import React from "react";
// import { Scrollbars } from "react-custom-scrollbars";

import TodoItem from "./TodoItem/TodoItem";
import todoItem from "../../models/todoItem.model";
import TodoPanel from "../TodoPanel/TodoPanel";

interface props {
	items: todoItem[];
	isDark: Boolean;
	deleteTodo: (id: String) => void;
	toggleComplete: (id: String) => void;
}

const TodoList: React.FC<props> = (props) => {
	const numberOfItemsLeft: number = props.items.filter(
		(item) => item.completed !== true
	).length;

	const numberOfCompleted: number = props.items.filter(
		(item) => item.completed === true
	).length;

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
			<TodoPanel
				isDark={props.isDark}
				numberOfItemsLeft={numberOfItemsLeft}
				numberOfCompleted={numberOfCompleted}
			/>
		</div>
	);
};

export default TodoList;
