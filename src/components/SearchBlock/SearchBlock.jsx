import { Switch } from '../Switch/Switch'
import { InputSearch } from '../InputSearch/InputSearch'
import { CheackBox } from '../CheakBox/CheakBox'
import './SearchBlock.css'
import { useEffect, useState, useTransition, useDeferredValue } from 'react';
import React from 'react';

const Afghanistan = {
	id: 1,
	name: 'Afghanistan',
	select: true
}
const Algeria = {
	id: 2,
	name: 'Algeria',
	select: false
}
const Angola = {
	id: 3,
	name: 'Angola',
	select: false
}
const Argentina = {
	id: 4,
	name: 'Argentina',
	select: true
}
const Albania = {
	id: 5,
	name: 'Albania',
	select: false
}
const Andorra = {
	id: 6,
	name: 'Andorra',
	select: false
}
const Andorrad = {
	id: 63,
	name: 'Andorrad',
	select: false
}
const arrays = [Afghanistan, Algeria, Angola, Argentina, Albania, Andorra, Andorrad]


export const SearchBlock = () => {
	const [value, setValue] = useState(false);
	const [array, setArray] = useState(arrays);
	const [arrayFilter, setArrayFiltre] = useState(arrays);
	const [search, setSearch] = useState('')


	const handleChange = (id) => {
		const newArray = array.map(el => {
			if (el.id === id) {
				return { ...el, select: !el.select }
			}
			return el
		})
		setArray(newArray)
		setArrayFiltre(newArray)
	}

	const searching = (e) => {

		setSearch(e)
		if (arrayFilter.every(el => el.select === false)) {
			setArray(state => arrayFilter.filter(el => el.select === false).filter(el => el.name.toLocaleLowerCase().includes(e)))
		} else {
			setArray(state => arrayFilter.filter(el => el.select === true).filter(el => el.name.toLocaleLowerCase().includes(e)))
		}

	}

	const clearAll = () => {
		const newArray = arrayFilter.map(el => { return { ...el, select: false } })
		setArray(newArray)
		setArrayFiltre(newArray)
	}




	useEffect(() => {
		if (value) {
			setArray(item => arrayFilter.filter(el => el.select === true))
		} else {
			setArray(arrayFilter)
		}
	}, [value])

	useEffect(() => {
		if (search.length === 0) {
			setArray(arrayFilter)
		}
	}, [search])


	return (
		<div className='SearchBlock'>
			<div className='SearchBlock__topSection'>
				<InputSearch value={search} searching={searching} />
			</div>
			<div className='SearchBlock__centerSection'>
				<div className='SearchBlock__buttonWrapper'>
					<div className='SearchBlock__switcherWrapper'>
						<Switch
							isOn={value}
							onColor="#60D09B"
							handleToggle={() => setValue(!value)}
						/>
						<span>Show selected only</span>
					</div>
					<span onClick={clearAll} className='SearchBlock__buttonClear'>Clear all</span>
				</div>
				<div className='SearchBlock__arrayWrapper'>
					{'loading' && array?.map((item, i) => {
						const { select, name, id } = item
						return (
							<CheackBox handleChange={handleChange} key={i} id={id} select={select}>
								{name}
							</CheackBox>
						)
					})}
				</div>
			</div>
			<div className='SearchBlock__bottonSection'>
				<p className='SearchBlock__line'></p>
				<button className='SearchBlock__button'>Save</button>
			</div>
		</div>
	)
}