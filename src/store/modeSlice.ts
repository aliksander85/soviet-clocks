import { createSlice } from '@reduxjs/toolkit';

export const Modes = {
	hoursMinutes: 'Hours & Minutes',
	hoursMinutesSeconds: 'Hours & Minutes & Seconds',
	date: 'Date',
} as const;

export type Mode = keyof typeof Modes;

type State = {
	mode: keyof typeof Modes;
};

const initialState: State = {
	mode: 'hoursMinutes',
};

const modeSlice = createSlice({
	name: 'mode',
	initialState,
	reducers: {
		setMode: (state, action) => {
			state.mode = action.payload.mode;
		},
		setNextMode: (state, action) => {
			const currentMode = state.mode;
			const modeKeys = Object.keys(Modes) as Mode[];
			const currentIndex = modeKeys.indexOf(currentMode);
			const nextIndex = (currentIndex + 1) % modeKeys.length;
			state.mode = modeKeys[nextIndex];
		},
	},
});

export const { setMode, setNextMode } = modeSlice.actions;

export default modeSlice.reducer;
