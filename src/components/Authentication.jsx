import React, { useState } from 'react'

export default function Authentication() {
	
	const [isRegisteration, setIsRegisteration] = useState(false);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	async function handleAuthenticate () {
		
	}

	return (
		<>
			<h2 className='sign-up-text'>{isRegisteration?  'Sign up' : 'Login'}</h2>
			<p>{isRegisteration ? 'Create an account' : 'Sign in to your account!'}</p>
			<input onChange={(e)=>{setEmail(e.target.value)}} value={email}	placeholder='Email'/>
			<input placeholder='*******************' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
			<button><p>Submit</p></button>
			<hr />
			<div className='register-content'>
				<p>{isRegisteration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
				<button onClick={()=>{setIsRegisteration(!isRegisteration)}}><p>Sign up</p></button>
			</div>
		</>
	)
}
