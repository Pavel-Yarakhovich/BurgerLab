import React from 'react';

import classes from './BurgerMenu.module.css';

const burgerMenu = (props) => {
	return (
		<div 
			className={classes.BurgerMenu}
			onClick={props.clicked}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default burgerMenu;