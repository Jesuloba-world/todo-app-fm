import Check from "./check";

interface props {
	isDark: Boolean;
	todoIsCompleted: Boolean;
}

const Oval: React.FC<props> = (props) => (
	<div
		className={`Oval Oval--dark__${props.isDark} ${
			props.todoIsCompleted ? "Oval--check" : null
		}`}
	>
		{props.todoIsCompleted ? <Check /> : null}
	</div>
);

export default Oval;
