


import React from 'react'
import './CheakBox.css'



export const CheackBox = ({ id, handleChange, select, children }) => {
	return (
		<div className='CheackBlock'>
			<input type="checkbox" className="custom-checkbox" id={id} onChange={() => handleChange(id)} checked={select} />
			<label htmlFor={id}></label>
			<span className='CheackBlock__text'>{children}</span>
		</div>

	)
}