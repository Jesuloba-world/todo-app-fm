import React, { useState, useEffect } from "react";
import { v4 as uniqueId } from "uuid";

import AppName from "../../components/AppName/AppName";
import ToggleDark from "../../components/ToggleDark/ToggleDark";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";
import todoItem, { modifier } from "../../models/todoItem.model";

interface todoProps {
	toggleDark: () => void;
	isDark: Boolean;
}

const Todo: React.FC<todoProps> = (props) => {
	const [todoItems, setTodoItems] = useState<todoItem[]>([]);
	const [itemsToDisplay, setItemsToDisplay] = useState<todoItem[]>([]);

	useEffect(() => {
		setItemsToDisplay(todoItems);
	}, [todoItems]);

	const todoInputHandler = (text: string) => {
		setTodoItems((prev) => {
			return [...prev, { id: uniqueId(), completed: false, todo: text }];
		});
	};

	const todoDeleteHandler = (id: String) => {
		setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
	};

	const todoToggleCompleteHandler = (id: String) => {
		const updatedTodo = [...todoItems];
		const toChangeIndex = updatedTodo.findIndex((todo) => todo.id === id);
		updatedTodo[toChangeIndex].completed =
			!updatedTodo[toChangeIndex].completed;
		setTodoItems(updatedTodo);
	};

	const toDisplayModifier = (modifier: modifier) => {
		switch (modifier) {
			case "All":
				setItemsToDisplay(todoItems);
				break;
			case "Active":
				setItemsToDisplay(
					todoItems.filter((item) => item.completed !== true)
				);
				break;
			case "Completed":
				setItemsToDisplay(
					todoItems.filter((item) => item.completed === true)
				);
				break;
		}
	};

	return (
		<div className="Todo">
			<div className="Todo--top">
				<AppName />
				<ToggleDark
					toggleDark={props.toggleDark}
					isDark={props.isDark}
				/>
			</div>
			<TodoInput isDark={props.isDark} addTodo={todoInputHandler} />
			<TodoList
				items={itemsToDisplay}
				realItems={todoItems}
				isDark={props.isDark}
				deleteTodo={todoDeleteHandler}
				toggleComplete={todoToggleCompleteHandler}
				toDisplayModifier={toDisplayModifier}
			/>
		</div>
	);
};

export default Todo;
