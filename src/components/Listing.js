import React from 'react';

function Listing(props) {
	const item = props.item;
	const image = props.image.url_570xN;
	const currency_code = item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code;
	const price = item.currency_code === currency_code ? `${item.price} ${currency_code}` : `${currency_code}${item.price}`;

	let quantityLevel = item.quantity <= 10 ? 'level-low' : item.quantity <= 20 ? 'level-medium' : 'level-high';
	quantityLevel = `${quantityLevel} item-quantity`;

	return (
		<div className="item">
			<div className="item-image">
				<a href={item.url}>
					<p></p>
					<img src={image} alt='img' />
				</a>
			</div>
			<div className="item-details">
				<p className="item-title">{item.title}</p>
				<p className="item-price">{price}</p>
				<p className={quantityLevel}>{item.quantity} left</p>
			</div>
		</div>
	);

}

export default Listing;