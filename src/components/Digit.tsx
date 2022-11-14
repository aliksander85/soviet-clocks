import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modes } from '../store/modeSlice';
import { RootState } from '../store/index';
import { DIGIT_SQUARE } from '../constants/constants';

type DigitProps = {
	digit: number;
};

function Digit({ digit }: DigitProps) {
	const [spans, setSpans] = useState<number[]>([]);
	const mode = useSelector((state: RootState) => state.mode.mode);

	const createSpans = () => {
		const tempSpans = [];

		for (let index = 0; index < DIGIT_SQUARE; index++) {
			tempSpans.push(index);
		}

		setSpans(tempSpans);
	};

	useLayoutEffect(() => {
		createSpans();
	}, []);

	return (
		<>
			{mode === Modes.hoursMinutes && (
				<div className={`digit__container digit-${digit}`}>
					{spans.map((sp, i) => (
						<span className="digit__dot dot" key={i}></span>
					))}
				</div>
			)}
		</>
	);
}

export default Digit;
