import React from 'react'
import './ChatMessage.scss'
import { Avatar } from '@mui/material';
const ChatMessage = () => {
	return (
		<div className="message">
			<Avatar/>
			<div className="messageInfo">
				<h4> Sathoshi
					<span className='messageTimeStamp'>2024/02/04</span>
				</h4>
				<p> 俺の体重は71Kgだ</p>
			</div>
		</div>
	)
}

export default ChatMessage