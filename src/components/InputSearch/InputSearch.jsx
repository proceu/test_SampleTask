import React from 'react'
import { useRef, useEffect } from 'react';

import './InputSearch.css'
export const InputSearch = ({ value, searching }) => {

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);


	return <input className='InputSearch' ref={inputRef} value={value} onChange={(e) => searching(e.target.value)} placeholder='Search' type="text" />
}