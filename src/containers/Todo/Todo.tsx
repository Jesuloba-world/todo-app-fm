import React, { useState } from "react";

import AppName from "../../components/AppName/AppName";
import ToggleDark from "../../components/ToggleDark/ToggleDark";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";
import todoItem from "../../models/todoItem.model";

interface todoProps {
	toggleDark: () => void;
	isDark: Boolean;
}

const Todo: React.FC<todoProps> = (props) => {
	const [todoItems, setTodoItems] = useState<todoItem[]>([]);

	const todoInputHandler = (text: string) => {
		setTodoItems((prev) => [
			...prev,
			{ id: Math.random().toString(), completed: false, todo: text },
		]);
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
				items={todoItems}
				isDark={props.isDark}
				deleteTodo={todoDeleteHandler}
				toggleComplete={todoToggleCompleteHandler}
			/>
		</div>
	);
};

export default Todo;
