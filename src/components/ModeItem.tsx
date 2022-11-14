import { useSelector } from 'react-redux';
import { Modes } from '../store/modeSlice';
import { RootState } from '../store/index';

type ModeItemProps = {
	modeKey: string | Modes;
	handleModeClick: (modeKey: keyof Modes) => void;
};

function ModeItem({ modeKey, handleModeClick }: ModeItemProps) {
	const mode = useSelector((state: RootState) => state.mode.mode);
	return (
		<li
			className={
				'mode__item mode-item ' +
				`${modeKey} ` +
				(mode === Modes[modeKey as keyof typeof Modes]
					? 'selected'
					: '')
			}
			onClick={() => handleModeClick(modeKey as keyof Modes)}
		>
			{Modes[modeKey as keyof typeof Modes]}
		</li>
	);
}

export default ModeItem;
