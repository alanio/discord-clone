import React from 'react';

import { Container, HashtagICon, InviteIcon, SettingsIcon } from './styles';


export interface Props {
	channelName: string;
	selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
	channelName,
	selected
}) => {
	return (
		<Container className={selected ? 'active' : ''}>
			<div>
				<HashtagICon />
				<span>{channelName}</span>
			</div>

			<div>
				<InviteIcon />
				<SettingsIcon />
			</div>
		</Container>
	)
};

export default ChannelButton;