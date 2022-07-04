import React, { useState } from 'react'

export default function TodoForm({ addTask }) {

	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Add a task..." name="task" onChange={handleChange} />
			<button>Add Task</button>
		</form>

	)
}
