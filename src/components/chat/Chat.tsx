import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';

const Chat = () => {
	return (
		<div className='chat'>
			<ChatHeader/>
			<div className="chatMessage">
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
			</div>
			<div className="chatInput">
				<AddCircleOutlineIcon/>
				<form>
					<input type='text' placeholder='サトシの体重を入力'/>
					<button type="submit" className='chatInputButton'>
						送信
					</button>
				</form>
				<div className="chatInputIcons">
					<CardGiftcardIcon/>
					<GifBoxIcon/>
					<EmojiEmotionsIcon/>
				</div>
			</div>
		</div>
	)
}

export default Chat