import React from 'react'
import './SidebarChannel.scss'
import { DocumentData } from 'firebase/firestore'

type Props ={
	channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
	const {channel} = props;
	return (
			<div className="sidebarChannel">
				<h4>
					<span className='sidebarChannelHash'>#</span>
					{channel.channel.channelName}
				</h4>
			</div>
	)
}

export default SidebarChannel