import React, { useEffect, useState } from 'react';
import { TEN } from '../constants/constants';
import Digit from './Digit';

type PartProps = {
	part: number;
};

function Part({ part }: PartProps) {
	const [leftPart, setLeftPart] = useState<number>(0);
	const [rightPart, setRightPart] = useState<number>(0);

	useEffect(() => {
		if (part < TEN) {
			setLeftPart(0);
			setRightPart(part);
			return;
		}
		setLeftPart(Math.floor(part / TEN));
		setRightPart(part % TEN);
	}, [part]);

	return (
		<div className="part">
			<div className="part__digit">
				<Digit digit={leftPart} />
			</div>
			<div className="part__digit">
				<Digit digit={rightPart} />
			</div>
		</div>
	);
}

export default Part;
