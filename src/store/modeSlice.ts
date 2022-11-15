import { createSlice } from '@reduxjs/toolkit';

export enum Modes {
	hoursMinutes = 'Hours & Minutes' as any,
	hoursMinutesSeconds = 'Hours & Minutes & Seconds' as any,
	date = 'Date' as any,
	test = 'Test' as any,
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
	},
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
