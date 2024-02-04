import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import './ChatHeader.scss';

const ChatHeader = () => {
	return (
		<div className='ChatHeader'>
			<div className="chatHeaderLeft">
				<h3>
					<span className="chatHeaderHash"> #</span>
					ChatHeader
				</h3>
			</div>

			<div className="chatHeaderRight">
				<NotificationsIcon/>
				<PushPinIcon/>
				<PeopleAltIcon/>
				<div className="chatHeaderSearch">
					<input type="text" placeholder='検索'/>
					<SearchIcon/>
				</div>
				<SendIcon/>
				<HelpIcon/>
			</div>
		</div>
	)
}

export default ChatHeader