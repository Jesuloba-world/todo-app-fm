import { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Background from "./containers/Background/Background";
import Todo from "./containers/Todo/Todo";

function App() {
	const [isDark, setIsDark] = useState(true);

	const toggleDarkMode = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<Background isDark={isDark}>
			<DndProvider backend={HTML5Backend}>
				<Todo toggleDark={toggleDarkMode} isDark={isDark} />
			</DndProvider>
		</Background>
	);
}

export default App;
