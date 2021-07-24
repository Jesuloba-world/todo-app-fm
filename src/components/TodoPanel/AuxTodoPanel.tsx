import { modifier } from "../../models/todoItem.model";

interface props {
	isDark: Boolean;
	toDisplay: (modifier: modifier) => void;
	howToDisplay: modifier;
}

const AuxTodoPanel: React.FC<props> = (props) => {
	return (
		<div
			className={`TodoPanel--displayControls__aux--container TodoPanel--displayControls__aux--container--dark__${props.isDark}`}
		>
			<div
				className={`TodoPanel--displayControls TodoPanel--displayControls__aux`}
			>
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
		</div>
	);
};

export default AuxTodoPanel;
