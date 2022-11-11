import React, { useEffect, useState } from 'react';
import Part from './Part';
import Point from './Point';

function Clocks() {
	const [hours, setHours] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			setHours(date.getHours());
			setMinutes(date.getMinutes());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="clocks">
			<div className="clocks__part part">
				<Part part={hours} />
			</div>
			<div className="clocks__point point">
				<Point />
			</div>
			<div className="clocks__part part">
				<Part part={minutes} />
			</div>
			<h4 className="clocks__name name">Электроника 7</h4>
		</div>
	);
}

export default Clocks;
