import { useEffect, useState } from 'react';
 import ProductCard from './product-card';

export default function RandomProduct() {
	// fetch products depending on the product id https://fakestoreapi.com/products/${productId}
	const [productId, setProductId] = useState(1);
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(
		() => {
			//write your fetch logic here.

		setLoading(true);
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Failed to fetch product:', err);
				setLoading(false);
			});
	}, [productId]);

	// implement a randomize function that returns a random integer from 1 to 20 and updates the productId state variable
	function randomize() {
		const randomId = Math.floor(Math.random() * 20) + 1;
		setProductId(randomId);
	}

	return (
		<div className="p-5 max-w-md mx-auto flex flex-col gap-5">
			{/* display the ui here. Re-use the product card we built earlier */}

			<button
				onClick={randomize}
				className="bg-green-500 hover:bg-green-600 text-green-950 font-barlow font-bold py-3 px-5 rounded-lg cursor-pointer"
			>
				Get Random Product
			</button>

			{loading ? (
				<p className="text-center text-gray-500 font-sans">
					Loading product...
				</p>
			) : (
				product && <ProductCard {...product} />
			)}
		</div>
	);
}
