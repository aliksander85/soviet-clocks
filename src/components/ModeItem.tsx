import { useSelector } from 'react-redux';
import { Modes, Mode } from '../store/modeSlice';
import { RootState } from '../store/index';

type ModeItemProps = {
	modeKey: string | Mode;
	handleModeClick: (modeKey: Mode) => void;
};

function ModeItem({ modeKey, handleModeClick }: ModeItemProps) {
	const mode = useSelector((state: RootState) => state.mode.mode);
	return (
		<li
			className={
				'mode__item mode-item ' +
				`${modeKey} ` +
				(mode === modeKey ? 'selected' : '')
			}
			onClick={() => handleModeClick(modeKey as Mode)}
		>
			{Modes[modeKey as keyof typeof Modes]}
		</li>
	);
}

export default ModeItem;
