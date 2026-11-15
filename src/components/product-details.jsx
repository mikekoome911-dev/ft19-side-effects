import { ArrowLeft, Star } from 'lucide-react';

export default function ProductDetails({ product, onBack }) {
	if (!product) return null;

	const { title, price, image, description, category, rating } = product;

	return (
		<div className="max-w-4xl mx-auto p-5">
			<button
				onClick={onBack}
				className="flex items-center gap-2 text-gray-700 hover:text-black font-barlow font-bold mb-6 cursor-pointer"
			>
				<ArrowLeft size={20} />
				Back to Products
			</button>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-300 rounded-xl p-6 bg-white">
				<div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
					<img
						src={image}
						alt={title}
						className="max-h-96 object-contain"
					/>
				</div>

				<div className="flex flex-col justify-between gap-5">
					<div className="flex flex-col gap-3">
						<span className="text-red-500 font-bold font-sans bg-red-200 w-fit px-3 py-1 rounded-md text-sm uppercase">
							{category}
						</span>

						<h1 className="font-barlow font-bold text-3xl text-gray-900">
							{title}
						</h1>

						<div className="flex items-center gap-2">
							<Star className="text-orange-500 fill-orange-500" size={20} />
							<span className="font-bold text-lg">{rating.rate}</span>
							<span className="text-gray-500 text-sm">
								({rating.count} reviews)
							</span>
						</div>

						<p className="font-barlow font-bold text-4xl text-green-700 my-2">
							$ {price}
						</p>

						<p className="text-gray-600 leading-relaxed font-sans">
							{description}
						</p>
					</div>

					<button
						onClick={() => alert(`Added "${title}" to cart!`)}
						className="w-full bg-green-500 hover:bg-green-600 text-green-950 font-barlow font-bold py-3 px-6 rounded-lg cursor-pointer transition"
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
