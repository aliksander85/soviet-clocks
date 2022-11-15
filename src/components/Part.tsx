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
	const [leftPart, setLeftPart] = useState<number>(0);
	const [rightPart, setRightPart] = useState<number>(0);
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
			setLeftPart(0);
			setRightPart(part[rolePartValue as keyof PartProperties]);
			return;
		}
		setLeftPart(
			Math.floor(part[rolePartValue as keyof PartProperties] / TEN)
		);
		setRightPart(part[rolePartValue as keyof PartProperties] % TEN);
	};

	const setHoursMinutesAndSeconds = () => {
		switch (role) {
			case Roles.hoursAndMinutes:
				setLeftPart(part.hours);
				setRightPart(part.minutes);
				break;
			case Roles.seconds:
				if (part.seconds < TEN) {
					setLeftPart(0);
					setRightPart(part.seconds);
					return;
				}
				setLeftPart(Math.floor(part.seconds / TEN));
				setRightPart(part.seconds % TEN);
				break;
			default:
				setLeftPart(part.hours);
				setRightPart(part.minutes);
				break;
		}
	};

	const setDate = () => {
		switch (role) {
			case Roles.day:
				if (part.day < TEN) {
					setLeftPart(0);
					setRightPart(part.day);
					return;
				}
				setLeftPart(Math.floor(part.day / TEN));
				setRightPart(part.day % TEN);
				break;
			case Roles.monthAndYear:
				setLeftPart(part.month);
				setRightPart(part.year);
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
				<Digit digit={leftPart} />
			</div>
			<div className="part__digit digit">
				<Digit digit={rightPart} />
			</div>
		</>
	);
}

export default Part;
