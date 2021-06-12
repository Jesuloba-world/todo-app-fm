import React from "react";
import { ReactComponent as Xshape } from "../../../images/icon-cross.svg";

interface props {
	deleteTodo: (id: string) => void;
	itemId: string;
}

const XShape: React.FC<props> = (props) => {
	const onClickHandler = () => {
		props.deleteTodo(props.itemId);
	};

	return <Xshape className="XShape" onClick={onClickHandler} />;
};

export default XShape;
