import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	return (
		<button style={props.buttonTextColor} className={classes.button}>
			{props.buttonText}
		</button>
	);
};

export default Button;
