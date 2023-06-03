import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { setNextMode } from '../store/modeSlice';
import Part, { Roles } from './Part';
import Point from './Point';

function Clocks() {
	const [hours, setHours] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [seconds, setSeconds] = useState<number>(0);
	const [day, setDay] = useState<number>(0);
	const [month, setMonth] = useState<number>(0);
	const [year, setYear] = useState<number>(0);
	const [leftPartRole, setLeftPartRole] = useState<Roles>(Roles.left);
	const [rightPartRole, setRightPartRole] = useState<Roles>(Roles.right);
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	const mode = useSelector((state: RootState) => state.mode.mode);
	const dispatch = useDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			setHours(date.getHours());
			setMinutes(date.getMinutes());
			setSeconds(date.getSeconds());
			setDay(date.getDate());
			setMonth(date.getMonth() + 1);
			setYear(date.getFullYear());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		switch (mode) {
			case 'hoursMinutes':
				setLeftPartRole(Roles.left);
				setRightPartRole(Roles.right);
				break;
			case 'hoursMinutesSeconds':
				setLeftPartRole(Roles.hoursAndMinutes);
				setRightPartRole(Roles.seconds);
				break;
			case 'date':
				setLeftPartRole(Roles.day);
				setRightPartRole(Roles.monthAndYear);
				break;
			default:
				setLeftPartRole(Roles.test);
				setRightPartRole(Roles.test);
				break;
		}
	}, [mode]);

	const handleClickModeButton = () => {
		dispatch(setNextMode('next'));
	};

	const handleMouseDownButton = () => {
		setIsButtonPressed(true);
	};

	const handleMouseUpButton = () => {
		setIsButtonPressed(false);
	};

	return (
		<div className="clocks">
			<div className="clocks__part part">
				<Part
					part={{
						hours,
						minutes,
						seconds,
						day,
						month,
						year,
					}}
					role={leftPartRole}
				/>
			</div>
			<div className="clocks__point point">
				<Point />
			</div>
			<div className="clocks__part part">
				<Part
					part={{
						hours,
						minutes,
						seconds,
						day,
						month,
						year,
					}}
					role={rightPartRole}
				/>
			</div>
			<h4 className="clocks__name name">Электроника 7</h4>
			<button
				className={
					'clocks__mode-button mode-button ' +
					(isButtonPressed ? 'mode-button--pressed' : '')
				}
				title="Change Mode"
				onClick={handleClickModeButton}
				onMouseDown={handleMouseDownButton}
				onMouseUp={handleMouseUpButton}
			></button>
		</div>
	);
}

export default Clocks;
