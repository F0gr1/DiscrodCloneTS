import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

const Sidebar = () => {
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
							<SidebarChannel />
							<SidebarChannel />
							<SidebarChannel />
							<SidebarChannel />
							<SidebarChannel />
							<SidebarChannel />
							<SidebarChannel />
							<SidebarChannel />
					</div>

					<div className="sidebarFooter">
						<div className="sidebarAccount">
							<img src='./user.png' alt='' />
							<div className="accountName">
								<h4>Satoshi</h4>
								<span>#8888</span>
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