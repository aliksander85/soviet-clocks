import React, { useContext } from 'react';
import Clocks from './Clocks';
import { Modes, ColorModeContext, useMode } from '../mode';
import ModeItem from './ModeItem';

function Settings() {
	const clocksMode = useContext(ColorModeContext);
	const [mode] = useMode();

	const handleModeClick = (modeKey: keyof Modes) => {
		clocksMode.switchMode(modeKey);
	};

	return (
		<div className="settings">
			<ul className="settings__mode mode">
				{Object.keys(Modes)
					.filter(
						(modekey) => modekey[0].toUpperCase() !== modekey[0]
					)
					.map((modeKey) => (
						<ModeItem
							key={modeKey}
							modeKey={modeKey}
							mode={mode as keyof Modes}
							handleModeClick={handleModeClick}
						/>
					))}
			</ul>
			<div className="settings__clocks">
				<Clocks />
			</div>
		</div>
	);
}

export default Settings;
