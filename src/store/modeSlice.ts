import { createSlice } from '@reduxjs/toolkit';

export enum Modes {
	hoursMinutes = 'Hours & Minutes' as any,
	hoursMinutesSeconds = 'Hours & Minutes & Seconds' as any,
	date = 'Date' as any,
}

const modeSlice = createSlice({
	name: 'mode',
	initialState: {
		mode: Modes.hoursMinutes,
	},
	reducers: {
		setMode: (state, action) => {
			state.mode = action.payload.mode;
		},
		setNextMode: (state, action) => {
			const currentMode = state.mode;
			const modeKeys = Object.keys(Modes).filter(
				(mode) => String(mode)[0].toUpperCase() !== String(mode)[0]
			);
			const currentIndex = modeKeys.findIndex(
				(key) => Modes[key as keyof typeof Modes] === currentMode
			);
			const nextIndex =
				currentIndex === modeKeys.length - 1 ? 0 : currentIndex + 1;
			state.mode = Modes[modeKeys[nextIndex] as keyof typeof Modes];
		},
	},
});

export const { setMode, setNextMode } = modeSlice.actions;

export default modeSlice.reducer;
