import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FiChevronLeft, FiShoppingCart, FiSliders } from "react-icons/fi";
import Card from "../components/Card";

export default function ExploreProduct() {
	let history = useHistory();
	const products = useSelector((state) => state.products);

	function filterFunction() {
		history.push("/filter");
	}

	function back() {
		console.log("under maintenence");
	}

	function cart() {
		console.log("under maintenence");
	}

	return (
		<div>
			<div className="my-8 mx-6 flex justify-between">
				<button onClick={back}>
					<FiChevronLeft size={24} />
				</button>
				<button onClick={cart}>
					<FiShoppingCart size={24} />
				</button>
			</div>
			<div className="ml-6 space-y-4">
				<div>Headphone</div>
				<div className="font-black text-2xl">TMA Wireless</div>
			</div>
			<div className="ml-6 mt-6 flex space-x-4 text-sm">
				<button
					onClick={filterFunction}
					className="px-3 py-2 flex space-x-2 border border-gray-400 rounded-xl"
				>
					<FiSliders size={24} />
					<span className="m-auto">Filter</span>
				</button>
				<div className="px-3 py-2 my-auto">Popularity</div>
				<div className="px-3 py-2 my-auto">Newest</div>
			</div>

			<div className="mt-10 p-6 grid grid-cols-2 gap-4 rounded-t-3xl cst-bg-gray">
				{products.map((product, i) => (
					<Card key={i} detail={product} />
				))}
			</div>
		</div>
	);
}
