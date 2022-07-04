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
		<div>
			<p onClick={handleComplete} className={completed ? 'completed' : ''}>{value}
				<RiDeleteBin6Line onClick={handleDelete} />
			</p>
		</div>
	)
}
