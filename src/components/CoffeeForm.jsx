import React from 'react'
import {coffeeOptions} from "../utils/index.js";
import {useState} from 'react'
import Modal from './Modal.jsx'
import Authentication from './Authentication.jsx';

export default function CoffeeForm(props) {

	const {isAuthentication} = props
	
	const [showModal, setShowModal] = useState(false)
	const [coffeeSelection, setCoffeeSelection] = useState(null)
	const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
	const [coffeeCost, setCoffeeCost] = useState(0)
	const [hour, setHour] = useState(0)
	const [min, setMin] = useState(0)

	const handleSubmitForm = () => {
		if (!isAuthentication) {
			setShowModal(true)
			return
		}
		console.log(coffeeSelection, coffeeCost, hour, min)
	}

	

	
	return (
		<>
			{showModal && (
							<Modal handleCloseModal={()=>{setShowModal(false)}}>
								<Authentication />
							</Modal>
						)}
			<div className={'section-header'}>
				<i className={'fa-solid fa-pencil'} />
				<h2>Start Tracking Today</h2>
			</div>
			<h4>Select coffee type</h4>
			<div className={'coffee-grid'}>
				{coffeeOptions.slice(0,5).map((option, optionIndex) =>{
					return (
						<button onClick={()=>{
							setCoffeeSelection(option.name)
							setShowCoffeeTypes(false)
						}} key={optionIndex} className={'button-card ' + (option.name === coffeeSelection ? 'coffee-button-selected':'')}>
							<h4>{option.name}</h4>
							<p>{option.caffeine}</p>
						</button>
					)
				})}
				<button onClick={()=>{
					setShowCoffeeTypes(true)
					setCoffeeSelection(null)
				}} className={'button-card ' + (showCoffeeTypes === true ? 'coffee-button-selected':'')}>
					<h4>other</h4>
					<p>n/a</p>
				</button>
			</div>
			{ showCoffeeTypes && (
				<select onChange={(e)=>{setCoffeeSelection(e.target.value)}}  id={'coffee-list'} name="coffee-list">
				<option value={null}>Select type</option>
				{coffeeOptions.map((option, optionIndex) =>{
					return (
						<option key={optionIndex} value={option.name}>
							{option.name} ({option.caffeine}mg)
						</option>
					)
				})}
			</select>
		)}
			<h4>Add the  cost($)</h4>
			<input className={'w-full'} type='number' placeholder={'4.50'} value={coffeeCost} onChange={(e)=>{setCoffeeCost(e.target.value)}}/>
			<h4>Time since consumption</h4>
			<div className={'time-entry'}>
				<div>
					<h6>Hours</h6>
					<select id={'hours-select'} onChange={(e)=>{setHour(e.target.value)}}>
						{[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hour, hourIndex)=>{
							return (
								<option key={hourIndex} value={hour}>{hour}</option>
							)
						})}
					</select>

				</div>
				<div>
					<h6>Mins</h6>
					<select onChange={(e)=>{setMin(e.target.value)}} id={'hours-select'}>
						{[0,5,10,15,30,45].map((min, minIndex)=>{
							return (
								<option key={minIndex} value={min}>{min}</option>
							)
						})}
					</select>
				</div>
			</div>
			<button onClick={handleSubmitForm}>
				<p>Add Entry</p>
			</button>
		</>
	)
}
