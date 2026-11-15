import { useEffect, useState } from 'react';
import ProductCard from './product-card';

export default function RandomProduct({ products = [], onSelectProduct }) {
	const [randomProduct, setRandomProduct] = useState(null);

	// Set initial product once products finish loading
	useEffect(() => {
		if (products.length > 0 && !randomProduct) {
			setRandomProduct(products[0]);
		}
	}, [products, randomProduct]);

	function randomize() {
		if (products.length === 0) return;

		if (products.length === 1) {
			setRandomProduct(products[0]);
			return;
		}

		let nextProduct = randomProduct;
		while (nextProduct?.id === randomProduct?.id) {
			const randomIndex = Math.floor(Math.random() * products.length);
			nextProduct = products[randomIndex];
		}
		setRandomProduct(nextProduct);
	}

	return (
		<div className="p-5 max-w-md mx-auto flex flex-col gap-5">
			<button
				type="button"
				onClick={randomize}
				disabled={products.length === 0}
				className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-green-950 font-barlow font-bold py-3 px-5 rounded-lg cursor-pointer transition"
			>
				Get Random Product
			</button>

			{products.length === 0 ? (
				<p className="text-center text-gray-500 font-sans">
					Loading products...
				</p>
			) : (
				randomProduct && (
					<ProductCard
						{...randomProduct}
						onSelect={() => onSelectProduct?.(randomProduct)}
					/>
				)
			)}
		</div>
	);
}
