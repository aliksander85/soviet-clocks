import { useLayoutEffect, useState } from 'react';
import { DIGIT_SQUARE } from '../constants/constants';

function DigitCanvas() {
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
		<>
			{spans.map((sp, i) => (
				<span className="digit__dot dot" key={i}></span>
			))}
		</>
	);
}

export default DigitCanvas;
