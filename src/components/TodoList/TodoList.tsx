import React from "react";
// import { Scrollbars } from "react-custom-scrollbars";

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
}

const TodoList: React.FC<props> = (props) => {
	const numberOfItemsLeft: number = props.realItems.filter(
		(item) => item.completed !== true
	).length;

	// const numberOfCompleted: number = props.realItems.filter(
	// 	(item) => item.completed === true
	// ).length;

	// forcing rerender won't work

	// const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

	// let toDisplay: todoItem[] = props.items;

	// const toDisplayModifier = (modifier: modifier) => {
	// 	switch (modifier) {
	// 		case "All":
	// 			toDisplay = props.items;
	// 			break;
	// 		case "Active":
	// 			toDisplay = props.items.filter(
	// 				(item) => item.completed !== true
	// 			);
	// 			break;
	// 		case "Completed":
	// 			toDisplay = props.items.filter(
	// 				(item) => item.completed === true
	// 			);
	// 			break;
	// 	}
	// };

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
				toDisplay={props.toDisplayModifier}
			/>
		</div>
	);
};

export default TodoList;
