import React from 'react';
import classes from './Card.module.css';
import Button from './UI/Button';

const Card = (props) => {
	return (
		<section className={classes.card} style={props.cardColor}>
			<img src={props.img} alt="icon of a car" />
			<h1>{props.headline}</h1>
			<p>{props.paragraph}</p>
			<Button buttonTextColor={props.buttonTextColor} buttonText={props.buttonText} />
		</section>
	);
};

export default Card;
