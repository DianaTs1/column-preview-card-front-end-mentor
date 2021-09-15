import React from 'react';
import Card from '../Card';
import classes from './Column.module.css';
import sedanImg from '../../images/icon-sedans.svg';
import suvsImg from '../../images/icon-suvs.svg';
import luxImg from '../../images/icon-luxury.svg';

const cards = {
	sedans: {
		id: 'SED',
		headline: 'sedans',
		description:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		button: 'Learn more',
		cardColor: { backgroundColor: 'var(--brignt-orange)' },
		buttonTextColor: { color: 'var(--brignt-orange)' }
	},
	suvs: {
		id: 'SUVS',
		headline: 'suvs',
		description:
			'Take a SUVS for its spacious interior, power, and versality. Perfect for your nxt family vacation and off-road addventures.',
		button: 'Learn more',
		cardColor: { backgroundColor: 'var(--dark-cayan)' },
		buttonTextColor: { color: 'var(--dark-cayan)' }
	},
	luxury: {
		id: 'LUX',
		headline: 'luxury',
		description:
			'Cruises in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		button: 'Learn more',
		cardColor: { backgroundColor: 'var(--very-dark-cayan)' },
		buttonTextColor: { color: 'var(--very-dark-cayan)' }
	}
};

const Column = () => {
	return (
		<section className={classes.column}>
			<main className={classes['column-wrapper']}>
				<Card
					key={cards.sedans.id}
					headline={cards.sedans.headline.toUpperCase()}
					paragraph={cards.sedans.description}
					img={sedanImg}
					cardColor={cards.sedans.cardColor}
					buttonTextColor={cards.sedans.buttonTextColor}
					buttonText={cards.sedans.button}
				/>
				<Card
					key={cards.suvs.id}
					headline={cards.suvs.headline.toUpperCase()}
					paragraph={cards.suvs.description}
					img={suvsImg}
					cardColor={cards.suvs.cardColor}
					buttonTextColor={cards.suvs.buttonTextColor}
					buttonText={cards.suvs.button}
				/>
				<Card
					key={cards.luxury.id}
					headline={cards.luxury.headline.toUpperCase()}
					paragraph={cards.luxury.description}
					img={luxImg}
					cardColor={cards.luxury.cardColor}
					buttonTextColor={cards.luxury.buttonTextColor}
					buttonText={cards.luxury.button}
				/>
			</main>
		</section>
	);
};

export default Column;
