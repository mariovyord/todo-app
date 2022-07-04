import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Todo({ value, _id, deleteTask }) {

	const handleClick = () => {
		deleteTask(_id);
	}

	return (
		<div>
			<p>{value} <RiDeleteBin6Line onClick={handleClick} /></p>
		</div>
	)
}
