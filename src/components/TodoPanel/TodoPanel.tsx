interface props {
	isDark: Boolean;
	numberOfItemsLeft: number;
	numberOfCompleted: number;
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
				<p className={`TodoPanel--displayControls__blue`}>All</p>
				<p className={`TodoPanel--displayControls__normal`}>Active</p>
				<p className={`TodoPanel--displayControls__normal`}>
					Completed
				</p>
			</div>
			<p className={`TodoPanel--clearCompleted`}>Clear completed</p>
		</div>
	);
};

export default TodoPanel;
