import React from 'react'
import './Login.scss';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { provider  ,auth} from '../../firebase';

const Login = () => {
	
	const signIn = () =>{
		signInWithPopup(auth , provider).catch((err) => {
			alert(err.message);
		});
	}

	return (
		<div className="login">
			<div className="loginLogo">
				<img src="./kokkun2.jpg" alt="" />
			</div>

			<Button onClick={signIn}>ログイン</Button>
		</div>
	)
}

export default Login