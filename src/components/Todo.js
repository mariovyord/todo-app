import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Todo({ value, _id, deleteTask }) {

	const [completed, setCompleted] = useState(false);

	const handleComplete = () => {
		setCompleted(!completed);
	}

	const handleDelete = () => {
		deleteTask(_id);
	}

	return (
		<div onClick={handleComplete} className={completed ? 'completed card' : 'card'}>
			<div className='card-values'>
				<span>{value}</span>
				<span><RiDeleteBin6Line onClick={handleDelete} /></span>
			</div>
		</div>
	)
}
