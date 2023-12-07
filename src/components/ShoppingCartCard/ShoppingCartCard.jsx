import React, { useState, useEffect } from 'react'

import { Card } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'
import clothes from '../../utils/images/clothes.webp'
import books from '../../utils/images/books.webp'
import electronics from '../../utils/images/electronics.webp'


import settings from '../../Settings'
import { LinkContainer } from 'react-router-bootstrap'

const path = settings.path

const ShoppingCartCard = ({ item }) => {
	const [quantity, setQuantity] = useState(item.quantity);

	const changeQuantity = (newQuantity, itemId) => {
		fetch(`${path}api/item/${itemId}`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"quantity": newQuantity
			})
		})
	}

	useEffect(() => {
		// Update quantity in local state when item.quantity changes
		setQuantity(item.quantity);
	}, [item.quantity]);


	let img = laptop
	if (item.productType == "Electronica") {
		img = electronics
	} else if (item.productType == "Kleding") {
		img = clothes
	} else if (item.productType == "boeken") {
		img = books
	}
	return (
		<Card style={{ maxWidth: '40rem' }} className="border-0 p-4">

			<div style={{ display: 'flex' }}>

				<div style={{ width: '40%' }}>
					<LinkContainer to={`/product/${item.productId}`}>
						<Card.Img variant="top" src={img} className="bg-secondary" />
					</LinkContainer>
				</div>

				<Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '40%' }}>
						<Card.Title style={{ fontSize: '1.5rem' }}>
							{item.productName}
						</Card.Title>
						<Card.Subtitle>
							{item.productDescription}
						</Card.Subtitle>
					</div>
					<div style={{ width: '20%' }}>
						<Card.Text style={{ color: 'red' }}>
							${item.price}
						</Card.Text>
						<select
							id="addToCart"
							onChange={(e) => {
								setQuantity(e.target.value);
								changeQuantity(e.target.value, item.itemId)
							}}
							style={{
								display: 'flex',
								alignItems: 'center',
								border: '2px solid yellow',
								borderRadius: '20px',
								padding: '5px',
							}}
							value={quantity}
						>
							{[...Array(10).keys()].map((num) => (
								<option key={num + 1} value={num + 1}>
									{num + 1}
								</option>
							))}
						</select>
					</div>
				</Card.Body>
			</div >
		</Card >
	)
}

export default ShoppingCartCard
