import { useState, useEffect, useCallback } from "react";
import { v4 as uniqueId } from "uuid";

import AppName from "../../components/AppName/AppName";
import ToggleDark from "../../components/ToggleDark/ToggleDark";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";
import todoItem, { modifier } from "../../models/todoItem.model";
import AuxTodoPanel from "../../components/TodoPanel/AuxTodoPanel";

interface todoProps {
	toggleDark: () => void;
	isDark: Boolean;
}

const Todo: React.FC<todoProps> = (props) => {
	const [todoItems, setTodoItems] = useState<todoItem[]>(onMount);
	const [itemsToDisplay, setItemsToDisplay] = useState<todoItem[]>([]);
	const [howToDisplay, setHowToDisplay] = useState<modifier>("All");

	// so useState can also act as ComponentWillMount
	function onMount() {
		const todos = localStorage.getItem("todos-abcd");
		if (todos !== null) {
			return JSON.parse(todos);
		}
		return [];
	}

	const toDisplayModifier = useCallback(
		(modifier: modifier) => {
			switch (modifier) {
				case "All":
					setHowToDisplay("All");
					setItemsToDisplay(todoItems);
					break;
				case "Active":
					setHowToDisplay("Active");
					setItemsToDisplay(
						todoItems.filter((item) => item.completed !== true)
					);
					break;
				case "Completed":
					setHowToDisplay("Completed");
					setItemsToDisplay(
						todoItems.filter((item) => item.completed === true)
					);
					break;
			}
		},
		[todoItems]
	);

	useEffect(() => {
		setItemsToDisplay(todoItems);
		toDisplayModifier(howToDisplay);
	}, [todoItems, howToDisplay, toDisplayModifier]);

	useEffect(() => {
		localStorage.setItem("todos-abcd", JSON.stringify(todoItems));
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

	const toClearCompletedHandler = () => {
		if (todoItems.filter((item) => item.completed === true).length <= 0) {
			return;
		}
		setTodoItems((prev) => prev.filter((item) => item.completed !== true));
	};

	const toCompleteDragHandler = (srcIndex: number, destIndex: number) => {
		const updateTodo = [...todoItems];
		updateTodo.splice(destIndex, 0, updateTodo.splice(srcIndex, 1)[0]);
		setTodoItems(updateTodo);
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
				toClearCompleted={toClearCompletedHandler}
				howToDisplay={howToDisplay}
				completeDrag={toCompleteDragHandler}
			/>
			<AuxTodoPanel
				isDark={props.isDark}
				howToDisplay={howToDisplay}
				toDisplay={toDisplayModifier}
			/>
			<div className="Todo--bottom">
				<p
					className={`Todo--bottom--text ${
						!props.isDark ? "Todo--bottom--text__light" : null
					} ${
						!(todoItems.length > 1)
							? "Todo--bottom--text__invisible"
							: null
					}`}
				>
					{howToDisplay === "All"
						? "Drag and drop to reorder list"
						: "Go to All to reorder"}
				</p>
			</div>
		</div>
	);
};

export default Todo;
