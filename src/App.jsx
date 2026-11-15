import { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
import ProductDetails from './components/product-details';
import RandomProduct from './components/random-product';

const BASE_URL = 'https://fakestoreapi.com';

function App() {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		fetch(`${BASE_URL}/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.error('Failed to fetch products:', err));
	}, []);

	if (selectedProduct) {
		return (
			<div className="min-h-screen p-5">
				<ProductDetails
					product={selectedProduct}
					onBack={() => setSelectedProduct(null)}
				/>
			</div>
		);
	}

	return (
		<div className="min-h-screen p-5 flex flex-col gap-10">
			<RandomProduct
				products={products}
				onSelectProduct={setSelectedProduct}
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
				{products.map((product) => (
					<ProductCard
						{...product}
						key={product.id}
						onSelect={() => setSelectedProduct(product)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
