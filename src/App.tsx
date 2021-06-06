import React from "react";
import Background from "./containers/Background/Background";
import Todo from "./containers/Todo/Todo";

function App() {
	return (
		<Background isDark={true}>
			<Todo />
		</Background>
	);
}

export default App;
