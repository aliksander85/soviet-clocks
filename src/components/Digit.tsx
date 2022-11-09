import React from 'react';

type DigitProps = {
	digit: number;
};

function Digit({ digit }: DigitProps) {
	return <div>{digit}</div>;
}

export default Digit;
