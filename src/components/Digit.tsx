import { useEffect, useState } from 'react';
import { TEN } from '../constants/constants';
import DigitCanvas from './DigitCanvas';

export enum DigitRoles {
	oneDigit = 'oneDigit',
	twoDigits = 'twoDigits',
	month = 'month',
	year = 'year',
	test = 'test',
}

type DigitProps = {
	value: number;
	role: DigitRoles;
};

function Digit({ value, role }: DigitProps) {
	const [leftSmallDigitValue, setLeftSmallDigitValue] = useState<number>(0);
	const [rightSmallDigitValue, setRightSmallDigitValue] = useState<number>(0);

	useEffect(() => {
		switch (role) {
			case DigitRoles.twoDigits:
				if (value < TEN) {
					setLeftSmallDigitValue(0);
					setRightSmallDigitValue(value);
					return;
				}
				setLeftSmallDigitValue(Math.floor(value / TEN));
				setRightSmallDigitValue(value % TEN);
				break;
			case DigitRoles.year:
				const twoDigitsYear = value % 100;
				if (twoDigitsYear < TEN) {
					setLeftSmallDigitValue(0);
					setRightSmallDigitValue(twoDigitsYear);
					return;
				}
				setLeftSmallDigitValue(Math.floor(twoDigitsYear / TEN));
				setRightSmallDigitValue(twoDigitsYear % TEN);
				break;

			default:
				break;
		}
	}, [value, role]);

	return (
		<>
			{role === DigitRoles.oneDigit && (
				<div className={`digit__container digit-${value}`}>
					<DigitCanvas />
				</div>
			)}
			{(role === DigitRoles.twoDigits || role === DigitRoles.year) && (
				<div
					className={`digit__container left-small-digit-${leftSmallDigitValue} right-small-digit-${rightSmallDigitValue}`}
				>
					<DigitCanvas />
				</div>
			)}
			{role === DigitRoles.month && (
				<div className={`digit__container roman-digit-${value}`}>
					<DigitCanvas />
				</div>
			)}
			{role === DigitRoles.test && (
				<div className={`digit__container roman-digit-12`}>
					<DigitCanvas />
				</div>
			)}
		</>
	);
}

export default Digit;
