import Oval from "../../UI/shape/oval";
import XShape from "../../UI/shape/xShape";

interface props {
	id: String;
	text: String;
	isCompleted: Boolean;
	isDark: Boolean;
	deleteTodo: (id: String) => void;
}

const TodoItem: React.FC<props> = (props) => {
	return (
		<li className={`todoItem todoItem--dark__${props.isDark}`}>
			<div className="todoItem--div">
				<div className="todoItem--Oval">
					<Oval
						isDark={props.isDark}
						todoIsCompleted={props.isCompleted}
					/>
				</div>
				<p
					className={`todoItem--text todoItem--text--dark__${
						props.isDark
					} ${
						props.isCompleted
							? `todoItem--text__completed todoItem--text__completed--dark__${props.isDark}`
							: null
					}`}
				>
					{props.text}
				</p>
				<div className="todoItem--XShape">
					<XShape
						deleteTodo={props.deleteTodo}
						itemId={props.id}
						isDark={props.isDark}
					/>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
