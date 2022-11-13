import { createContext, useMemo, useState } from 'react';

export enum Modes {
	hoursMinutes = 'Hours & Minutes' as any,
	hoursMinutesSeconds = 'Hours & Minutes & Seconds' as any,
	date = 'Date' as any,
}

export const ColorModeContext = createContext({
	switchMode: (selectedMode: keyof Modes) => {},
});

export const useMode = () => {
	const filteredModes = Object.keys(Modes).filter(
		(modeKey) => modeKey[0].toUpperCase() !== modeKey[0]
	);
	const [mode, setMode] = useState<keyof Modes>(
		filteredModes[0] as keyof Modes
	);

	const clocksMode = useMemo(
		() => ({
			switchMode: (selectedMode: keyof Modes) => setMode(selectedMode),
		}),
		[]
	);

	return [mode, clocksMode];
};
