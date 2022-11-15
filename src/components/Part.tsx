import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modes } from '../store/modeSlice';
import { RootState } from '../store/index';
import { TEN } from '../constants/constants';
import Digit from './Digit';

type PartProperties = {
	hours: number;
	minutes: number;
	seconds: number;
	day: number;
	month: number;
	year: number;
};

type PartProps = {
	part: PartProperties;
	role: Roles;
};

export enum Roles {
	left = 'left',
	right = 'right',
	hoursAndMinutes = 'hoursAndMinutes',
	seconds = 'seconds',
	day = 'day',
	monthAndYear = 'monthAndYear',
}

function Part({ part, role }: PartProps) {
	const [leftDigit, setLeftDigit] = useState<number>(0);
	const [rightDigit, setRightDigit] = useState<number>(0);
	const mode = useSelector((state: RootState) => state.mode.mode);

	const setHoursAndMinutes = () => {
		let rolePartValue: string = '';
		switch (role) {
			case Roles.left:
				rolePartValue = 'hours';
				break;
			case Roles.right:
				rolePartValue = 'minutes';
				break;
			default:
				rolePartValue = 'hours';
				break;
		}
		if (part[rolePartValue as keyof PartProperties] < TEN) {
			setLeftDigit(0);
			setRightDigit(part[rolePartValue as keyof PartProperties]);
			return;
		}
		setLeftDigit(
			Math.floor(part[rolePartValue as keyof PartProperties] / TEN)
		);
		setRightDigit(part[rolePartValue as keyof PartProperties] % TEN);
	};

	const setHoursMinutesAndSeconds = () => {
		switch (role) {
			case Roles.hoursAndMinutes:
				setLeftDigit(part.hours);
				setRightDigit(part.minutes);
				break;
			case Roles.seconds:
				if (part.seconds < TEN) {
					setLeftDigit(0);
					setRightDigit(part.seconds);
					return;
				}
				setLeftDigit(Math.floor(part.seconds / TEN));
				setRightDigit(part.seconds % TEN);
				break;
			default:
				setLeftDigit(part.hours);
				setRightDigit(part.minutes);
				break;
		}
	};

	const setDate = () => {
		switch (role) {
			case Roles.day:
				if (part.day < TEN) {
					setLeftDigit(0);
					setRightDigit(part.day);
					return;
				}
				setLeftDigit(Math.floor(part.day / TEN));
				setRightDigit(part.day % TEN);
				break;
			case Roles.monthAndYear:
				setLeftDigit(part.month);
				setRightDigit(part.year);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		switch (mode) {
			case Modes.hoursMinutes:
				setHoursAndMinutes();
				break;
			case Modes.hoursMinutesSeconds:
				setHoursMinutesAndSeconds();
				break;
			case Modes.date:
				setDate();
				break;
			default:
				setHoursAndMinutes();
				break;
		}
	}, [part, mode]);

	return (
		<>
			<div className="part__digit digit">
				<Digit value={leftDigit} />
			</div>
			<div className="part__digit digit">
				<Digit value={rightDigit} />
			</div>
		</>
	);
}

export default Part;
