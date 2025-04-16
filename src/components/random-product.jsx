import React, { useState, useEffect } from 'react';
import { ProductCard } from './products';

export default function RandomProduct() {
	const [productId, setProductId] = useState(1);
	const [product, setProduct] = useState({});

	// fetch products depending on the product id
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [productId]);

	// implement a randomize function that returns a random integer from 1 to 20 and updates the productId state variable
	// function randomize() {}

	return (
		<div className="h-screen flex flex-col justify-center items-center ">
			<div className="max-w-md flex flex-col items-center">
				{Object.keys(product).length > 0 ? (
					<ProductCard
						title={product.title}
						image={product.image}
						description={product.description}
						category={product.category}
						price={product.price}
						rating={product.rating.rate}
						key={product.id}
					/>
				) : (
					<div className="text-5xl">Loading ...</div>
				)}

				<div className="mt-10 flex items-center gap-10">
					<button
						className="bg-orange-500 font-bold  text-black p-3 rounded-lg"
						onClick={() => setProductId(productId + 1)}
					>
						Fetch one product
					</button>

					<h1 className="font-mono text-3xl">id: {productId}</h1>
				</div>
			</div>
		</div>
	);
}
