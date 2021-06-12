import React from "react";
import { ReactComponent as Xshape } from "../../../images/icon-cross.svg";

interface props {
	deleteTodo: (id: string) => void;
	itemId: string;
	isDark: Boolean;
}

const XShape: React.FC<props> = (props) => {
	const onClickHandler = () => {
		props.deleteTodo(props.itemId);
	};

	return (
		<Xshape
			className={`XShape XShape--dark__${props.isDark}`}
			onClick={onClickHandler}
		/>
	);
};

export default XShape;
