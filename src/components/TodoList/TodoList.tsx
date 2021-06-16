import React from "react";

import TodoItem from "./TodoItem/TodoItem";
import todoItem, { modifier } from "../../models/todoItem.model";
import TodoPanel from "../TodoPanel/TodoPanel";

interface props {
	items: todoItem[];
	realItems: todoItem[];
	isDark: Boolean;
	deleteTodo: (id: String) => void;
	toggleComplete: (id: String) => void;
	toDisplayModifier: (modifier: modifier) => void;
	toClearCompleted: () => void;
}

const TodoList: React.FC<props> = (props) => {
	const numberOfItemsLeft: number = props.realItems.filter(
		(item) => item.completed !== true
	).length;

	return (
		<div className={`todoList todoList--dark__${props.isDark}`}>
			<ul className="todoList--list">
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
				toDisplay={props.toDisplayModifier}
				toClearCompleted={props.toClearCompleted}
			/>
		</div>
	);
};

export default TodoList;
