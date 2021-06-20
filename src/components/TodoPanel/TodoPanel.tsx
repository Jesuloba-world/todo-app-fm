import { modifier } from "../../models/todoItem.model";

interface props {
	isDark: Boolean;
	numberOfItemsLeft: number;
	toDisplay: (modifier: modifier) => void;
	toClearCompleted: () => void;
	howToDisplay: modifier;
}

const TodoPanel: React.FC<props> = (props) => {
	const { numberOfItemsLeft } = props;

	return (
		<div
			className={`TodoPanel ${!props.isDark ? "TodoPanel--light" : null}`}
		>
			<p>
				{numberOfItemsLeft} item{numberOfItemsLeft > 1 ? "s" : null}{" "}
				left
			</p>
			<div className={`TodoPanel--displayControls`}>
				<p
					className={`${
						props.howToDisplay === "All"
							? "TodoPanel--displayControls__blue"
							: "TodoPanel--displayControls__normal"
					}`}
					onClick={() => props.toDisplay("All")}
				>
					All
				</p>
				<p
					className={`${
						props.howToDisplay === "Active"
							? "TodoPanel--displayControls__blue"
							: "TodoPanel--displayControls__normal"
					}`}
					onClick={() => props.toDisplay("Active")}
				>
					Active
				</p>
				<p
					className={`${
						props.howToDisplay === "Completed"
							? "TodoPanel--displayControls__blue"
							: "TodoPanel--displayControls__normal"
					}`}
					onClick={() => props.toDisplay("Completed")}
				>
					Completed
				</p>
			</div>
			<p
				className={`TodoPanel--clearCompleted`}
				onClick={() => props.toClearCompleted()}
			>
				Clear completed
			</p>
		</div>
	);
};

export default TodoPanel;
