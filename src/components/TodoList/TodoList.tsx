import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

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
	completeDrag: (index1: number, index2: number) => void;
}

const TodoList: React.FC<props> = (props) => {
	const numberOfItemsLeft: number = props.realItems.filter(
		(item) => item.completed !== true
	).length;

	const onDragEndHandler = (param: DropResult) => {
		const srcIndex = param.source.index;
		const destIndex = param.destination!.index;
		props.completeDrag(srcIndex, destIndex);
	};

	return (
		<DragDropContext onDragEnd={onDragEndHandler}>
			<div className={`todoList todoList--dark__${props.isDark}`}>
				<Droppable droppableId={"todolist"}>
					{(provided, _) => (
						<ul
							className="todoList--list"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{props.items.map((item, index) => (
								<TodoItem
									key={item.id}
									id={item.id}
									index={index}
									isCompleted={item.completed}
									text={item.todo}
									isDark={props.isDark}
									deleteTodo={props.deleteTodo}
									toggleComplete={props.toggleComplete}
								/>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
				<TodoPanel
					isDark={props.isDark}
					numberOfItemsLeft={numberOfItemsLeft}
					toDisplay={props.toDisplayModifier}
					toClearCompleted={props.toClearCompleted}
					howToDisplay={props.howToDislay}
				/>
			</div>
		</DragDropContext>
	);
};

export default TodoList;
