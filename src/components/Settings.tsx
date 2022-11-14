import Clocks from './Clocks';
import { useDispatch } from 'react-redux';
import { setMode } from '../store/modeSlice';
import { Modes } from '../store/modeSlice';
import ModeItem from './ModeItem';

function Settings() {
	const dispatch = useDispatch();

	const handleModeClick = (modeKey: keyof Modes) => {
		console.log('modeKey', modeKey);
		dispatch(setMode({ mode: Modes[modeKey as keyof typeof Modes] }));
	};

	return (
		<div className="settings">
			<ul className="settings__mode mode">
				{Object.values(Modes)
					.filter(
						(modekey: string | Modes) =>
							String(modekey)[0].toUpperCase() !==
							String(modekey)[0]
					)
					.map((modeKey) => (
						<ModeItem
							key={modeKey}
							modeKey={modeKey as keyof Modes}
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
