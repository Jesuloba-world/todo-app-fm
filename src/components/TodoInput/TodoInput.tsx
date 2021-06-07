import React, { FormEvent, useRef } from "react";

import Oval from "../UI/shape/oval";

interface props {
	isDark: Boolean;
	addTodo: (text: string) => void;
}

const TodoInput: React.FC<props> = (props) => {
	const todoInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		const enteredTodo = todoInputRef.current!.value;
		todoInputRef.current!.value = "";
		props.addTodo(enteredTodo);
	};

	return (
		<form onSubmit={submitHandler} className="TodoInput--container">
			<label htmlFor="todoInput">
				<Oval isDark={props.isDark} />
			</label>
			<input
				id="todoInput"
				className={`TodoInput TodoInput--dark__${props.isDark}`}
				placeholder="Create a new todo..."
				ref={todoInputRef}
			/>
		</form>
	);
};

export default TodoInput;
