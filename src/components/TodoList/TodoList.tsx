import React from "react";
import { useDrag, useDrop } from "react-dnd";

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
	howToDislay: modifier;
}

const TodoList: React.FC<props> = (props) => {
	const numberOfItemsLeft: number = props.realItems.filter(
		(item) => item.completed !== true
	).length;

	const [{ isOver }, dropTodoItemRef] = useDrop({
		accept: "TODOITEM",
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	const [{ isDragging }, dragTodoItemRef] = useDrag(() => ({
		type: "TODOITEM",
		collect: (monitor) => ({
			isDragging: monitor.isDragging,
		}),
	}));

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
						dragItem={dragTodoItemRef}
					/>
				))}
			</ul>
			<TodoPanel
				isDark={props.isDark}
				numberOfItemsLeft={numberOfItemsLeft}
				toDisplay={props.toDisplayModifier}
				toClearCompleted={props.toClearCompleted}
				howToDisplay={props.howToDislay}
			/>
		</div>
	);
};

export default TodoList;
