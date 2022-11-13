import React from 'react';
import { Modes } from '../mode';

type ModeItemProps = {
	modeKey: string;
	mode: string;
	handleModeClick: (modeKey: keyof Modes) => void;
};

function ModeItem({ modeKey, mode, handleModeClick }: ModeItemProps) {
	console.log('mode', mode);
	console.log('modeKey', modeKey);
	return (
		<li
			className={
				'mode__item mode-item ' +
				`${modeKey} ` +
				(mode === modeKey ? 'selected' : '')
			}
			onClick={() => handleModeClick(modeKey as keyof Modes)}
		>
			{Modes[modeKey as keyof typeof Modes]}
		</li>
	);
}

export default ModeItem;
