import React, { useState } from 'react'

export default function TodoForm({ addTask }) {

	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(value);
		setValue('');
	}

	return (
		<form className='task-input' onSubmit={handleSubmit}>
			<input type="text" placeholder="Add a task..." name="task" onChange={handleChange} value={value} />
			<button>Add</button>
		</form>

	)
}
