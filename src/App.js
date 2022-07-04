import TodoForm from "./components/TodoForm";
import { useState } from 'react';
import Todo from "./components/Todo";
import uniqid from 'uniqid';

function App() {

	const [todos, setTodos] = useState([]);

	const addTask = (value) => {
		setTodos(() => [{ value: value, _id: uniqid() }, ...todos]);
	}

	const deleteTask = (_id) => {
		const filtered = todos.filter(x => x._id !== _id);
		setTodos(filtered);
	}

	return (
		<div className="App">
			<main>
				<TodoForm addTask={addTask} />
				<div className="task-list">
					{todos.map((x) => <Todo key={x._id} _id={x._id} value={x.value} deleteTask={deleteTask} />)}
				</div>
			</main>
		</div>
	);
}

export default App;
