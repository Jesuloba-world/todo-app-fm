import { modifier } from "../../models/todoItem.model";

interface props {
	isDark: Boolean;
	numberOfItemsLeft: number;
	toDisplay: (modifier: modifier) => void;
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
					className={`TodoPanel--displayControls__blue`}
					onClick={() => props.toDisplay("All")}
				>
					All
				</p>
				<p
					className={`TodoPanel--displayControls__normal`}
					onClick={() => props.toDisplay("Active")}
				>
					Active
				</p>
				<p
					className={`TodoPanel--displayControls__normal`}
					onClick={() => props.toDisplay("Completed")}
				>
					Completed
				</p>
			</div>
			<p className={`TodoPanel--clearCompleted`}>Clear completed</p>
		</div>
	);
};

export default TodoPanel;
