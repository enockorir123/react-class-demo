import React, { useEffect, useState } from 'react';

export default function Products() {
	const [products, setProducts] = useState([]);

	// fetch data from an external source
	// we use useEffect
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className="min-h-screen container mx-auto p-5">
			{products.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
					{products.map((product) => (
						<ProductCard
							title={product.title}
							image={product.image}
							description={product.description}
							category={product.category}
							price={product.price}
							rating={product.rating.rate}
							key={product.id}
						/>
					))}
				</div>
			) : (
				<div className="h-screen flex flex-col justify-center items-center">
					<img
						src="/no-product.svg"
						alt="no product illustration"
						className="size-96"
					/>

					<p className="font-mono text-3xl max-w-md font-bold text-center">
						Oops! No products Available. Check in back later
					</p>

					<button className="bg-orange-500 font-bold mt-5 text-black p-3 rounded-lg">
						Continue shopping
					</button>
				</div>
			)}
		</div>
	);
}

export function ProductCard({
	title,
	image,
	description,
	category,
	price,
	rating,
}) {
	return (
		<div className="rounded-lg flex flex-col justify-between gap-3 border overflow-hidden">
			<img
				src={image}
				alt={title}
				className="w-full h-[300px] object-cover object-top"
			/>
			<div className="p-5 flex flex-col gap-3">
				<h2 className="font-mono text-lg font-bold line-clamp-1">
					{title}
				</h2>
				<div className="bg-orange-500/[0.15] text-orange-500 px-2 rounded-sm w-fit text-font-medium">
					{category}
				</div>
				<p className="font-medium text-gray-600 text-xs line-clamp-5">
					{description}
				</p>
			</div>

			{/* price and rating */}
			<div className="flex justify-between items-center p-5">
				<h4 className="text-2xl font-bold font-mono">$ {price}</h4>

				<p
					className={
						rating >= 4.0
							? 'font-mono font-bold text-xl text-green-500'
							: rating >= 2.5
							? 'font-mono font-bold text-xl text-orange-400'
							: 'font-mono font-bold text-xl text-red-500'
					}
				>
					{rating}
				</p>
			</div>
		</div>
	);
}
