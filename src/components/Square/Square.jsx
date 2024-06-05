import { useState } from 'react';
import { StyledSquare } from './square.styles';

const Square = () => {
	const [green, setGreen] = useState(false);

	return (
		<>
			<StyledSquare $color={green} />
			<button onClick={() => changeColor(green, setGreen)}>
				Cambiar color
			</button>
		</>
	);
};

const changeColor = (green, setGreen) => {
	green ? setGreen(false) : setGreen(true);
};

export default Square;
