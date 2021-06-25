import { useState } from "react";
import Background from "./containers/Background/Background";
import Todo from "./containers/Todo/Todo";

function App() {
	const [isDark, setIsDark] = useState(true);

	const toggleDarkMode = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<Background isDark={isDark}>
			<Todo toggleDark={toggleDarkMode} isDark={isDark} />
		</Background>
	);
}

export default App;
