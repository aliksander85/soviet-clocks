import React, { useLayoutEffect, useState } from 'react';
import { DIGIT_SQUARE } from '../constants/constants';

type DigitProps = {
	digit: number;
};

function Digit({ digit }: DigitProps) {
	const [spans, setSpans] = useState<number[]>([]);

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
		<div className={`digit__container digit-${digit}`}>
			{spans.map((sp, i) => (
				<span className="digit__dot dot" key={i}></span>
			))}
		</div>
	);
}

export default Digit;
