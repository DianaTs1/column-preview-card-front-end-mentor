# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).


### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot
![screencapture-localhost-3000-2021-09-15-18_15_55](https://user-images.githubusercontent.com/73934231/133519790-354c79a3-b38f-408e-ae86-31767b9834c6.png)


![screencapture-localhost-3000-2021-09-15-18_16_22](https://user-images.githubusercontent.com/73934231/133519866-23d31da3-2c58-4835-9ef9-bb27bc7d6d97.png)


### Links

- Solution URL: https://github.com/DianaTs1/column-preview-card-front-end-mentor.git
- Live Site URL: https://github.com/DianaTs1/column-preview-card-front-end-mentor.git


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

In CSS if you have one main section which has multiple children and you want to make the corners of the main div/section rounded without affecting children elements, you should use the "overflow: hidden" property for the outer element.

Also I realized that if I need to render multiple same elements with different props, it helps the speeding process to get all the prop variables ready first rather thank doing it dynamically with coping component. For example in the Cart component I had different images that needed to be rendered  and I figured that it was easier to import all the images at once and then just change the name or the props.img.


```css
.:root {
	--brignt-orange: hsl(31, 77%, 52%);
	--dark-cayan: hsl(184, 100%, 22%);
	--very-dark-cayan: hsl(179, 100%, 13%);
	--paragraph-color: hsla(0, 0%, 100%, 0.75);
	--light-gray: hsl(0, 0%, 95%);
	--headline-font: 'Big Shoulders Display', cursive;
	--body-font: 'Lexend Deca', sans-serif;
}
```
```js
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
}
```

### Useful resources

http://jsfiddle.net/VaTAZ/3/ this example really helped me understand how the border-radius worked
