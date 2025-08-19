import React from 'react'
import Modal from './Modal'
import Authentication from './Authentication'
import { useState } from 'react'

export default function Layout(props) {

	const { children } = props
	const [showModal, setShowModal] = useState(false);


	const header = (
		<header>
			<div>
				<h1 className={'text-gradient'}>Coffee Tracker</h1>
				<p>For Coffee Insatiates</p>
			</div>
			<button onClick={()=>{setShowModal(true)}}>
				<p>Sign up free</p>
				<i className="fa-solid fa-mug-saucer"></i>
			</button>
		</header>
	)

	const footer = (
		<footer>
			<p><span className={'text-gradient'}>Coffee Tracker</span> was made by <a target={'_blank'} href={'https://github.com/Kazz4343'}>Kazz (Kritsada)</a> using React.js</p>
		</footer>
	)

	return (
		<>
			{showModal && (
				<Modal handleCloseModal={()=>{setShowModal(false)}}>
					<Authentication />
				</Modal>
			)}
			{header}
			<main>
			{children}
			</main>
			{footer}
		</>
	)
}
