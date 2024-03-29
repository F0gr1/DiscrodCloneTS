import React, { useEffect , useState } from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from '../../hooks/useCollection';

const Sidebar = () => {
	const user = useAppSelector((state) => state.user);
	const {documents: channels} = useCollection("channels");
	return (
		<div className='sidebar'>
			{/* sidebarLeft */}
			<div className='sidebarLeft'>
				<div className='serverIcon'>
					<img src="./logo192.png" alt=""/>
				</div>
				<div className='serverIcon'>
					<img src="./logo192.png" alt=""/>
				</div>
			</div>
			<div className='sidebarRight'>
				<div className="sidebarTop">
					<h3>Discord</h3>
					<ExpandMoreIcon/>
				</div>

				<div className="sidebarChannels">
					<div className="sidebarChannelsHeader">
						<div className="sidebarHeader">
							<ExpandMoreIcon/>
							<h4>サトシチャンネル</h4>
						</div>
						<div className="sidebarAddIcon">
							<AddIcon/>
						</div>

					</div>

					<div className="sidebarChannelList">
					{channels.map((channel) => (
						<SidebarChannel channel={channel}  key={channel.id}/>
					))}

						</div>

					<div className="sidebarFooter">
						<div className="sidebarAccount">
							<img src={user?.photo} alt='' onClick={() => auth.signOut()}/>
							<div className="accountName">
								<h4>{user?.displayName}</h4>
								<span>#{user?.uid.substring(0 , 4)}</span>
							</div>
						</div>
						<div className="sidebarVoice">
								<MicNoneIcon/>
								<HeadphonesIcon/>
								<SettingsApplicationsIcon/>
							</div>
					</div>
				</div>
		
			</div>
		</div>
	)
}

export default Sidebar