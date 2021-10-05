import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import { changeFilter } from "../store/action";

export default function Filter() {
	let history = useHistory();
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);
	const [category, setCategory] = useState("");
	const [sortBy, setSortBy] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	useEffect(() => {
		setCategory(filter.category);
		setSortBy(filter.sortBy);
		setMinPrice(filter.minPrice);
		setMaxPrice(filter.maxPrice);
	}, []);

	function applyFilter() {
		const newFilter = {
			category,
			sortBy,
			minPrice: Number(minPrice),
			maxPrice: Number(maxPrice),
		};

		dispatch(changeFilter(newFilter));
		history.push("/");
	}

	function close() {
		history.push("/");
	}

	return (
		<div>
			<div className="my-8 mx-6 flex justify-between">
				<div className="font-black text-2xl">Filter</div>
				<button onClick={close}>
					<FiX className="my-auto" size={24} />
				</button>
			</div>

			<div className="ml-6">
				<div>Category</div>
				<div className="mt-4 flex space-x-4 text-sm">
					<button
						onClick={(e) => setCategory(e.target.value)}
						value="headphone"
						className={`px-4 py-1 my-auto ${
							category === "headphone"
								? "rounded-full cst-bg-green text-white"
								: "text-gray-400"
						}`}
					>
						Headphone
					</button>
					<button
						onClick={(e) => setCategory(e.target.value)}
						value="headband"
						className={`px-4 py-1 my-auto ${
							category === "headband"
								? "rounded-full cst-bg-green text-white"
								: "text-gray-400"
						}`}
					>
						Headband
					</button>
					<button
						onClick={(e) => setCategory(e.target.value)}
						value="earpads"
						className={`px-4 py-1 my-auto ${
							category === "earpads"
								? "rounded-full cst-bg-green text-white"
								: "text-gray-400"
						}`}
					>
						Earpads
					</button>
				</div>
			</div>

			<div className="ml-6 mt-8">
				<div>Sort By</div>
				<div className="flex flex-wrap text-sm">
					<button
						onClick={(e) => setSortBy(e.target.value)}
						value="popularity"
						className={`mr-4 mt-4 px-3 py-3 my-auto rounded-lg ${
							sortBy === "popularity"
								? "cst-bg-green text-white"
								: "border border-black"
						}`}
					>
						Popularity
					</button>
					<button
						onClick={(e) => setSortBy(e.target.value)}
						value="newest"
						className={`mr-4 mt-4 px-3 py-3 my-auto rounded-lg ${
							sortBy === "newest"
								? "cst-bg-green text-white"
								: "border border-black"
						}`}
					>
						Newest
					</button>
					<button
						onClick={(e) => setSortBy(e.target.value)}
						value="oldest"
						className={`mr-4 mt-4 px-3 py-3 my-auto rounded-lg ${
							sortBy === "oldest"
								? "cst-bg-green text-white"
								: "border border-black"
						}`}
					>
						Oldest
					</button>
					<button
						onClick={(e) => setSortBy(e.target.value)}
						value="highPrice"
						className={`mr-4 mt-4 px-3 py-3 my-auto rounded-lg ${
							sortBy === "highPrice"
								? "cst-bg-green text-white"
								: "border border-black"
						}`}
					>
						High Price
					</button>
					<button
						onClick={(e) => setSortBy(e.target.value)}
						value="lowPrice"
						className={`mr-4 mt-4 px-3 py-3 my-auto rounded-lg ${
							sortBy === "lowPrice"
								? "cst-bg-green text-white"
								: "border border-black"
						}`}
					>
						Low Price
					</button>
					<button
						onClick={(e) => setSortBy(e.target.value)}
						value="review"
						className={`mr-4 mt-4 px-3 py-3 my-auto rounded-lg ${
							sortBy === "review"
								? "cst-bg-green text-white"
								: "border border-black"
						}`}
					>
						Review
					</button>
				</div>
			</div>

			<div className="mt-8 px-6">
				<div>Price Range</div>
				<div className="flex space-x-4 mt-4 text-sm">
					<div>
						<input
							type="number"
							value={minPrice ? minPrice : ""}
							onChange={(e) => setMinPrice(e.target.value)}
							placeholder="Min Price"
							className="border border-gray-400 w-full rounded-lg p-3"
						/>
					</div>
					<div>
						<input
							type="number"
							value={maxPrice ? maxPrice : ""}
							onChange={(e) => setMaxPrice(e.target.value)}
							placeholder="Max Price"
							className="border border-gray-400 w-full rounded-lg p-3"
						/>
					</div>
				</div>
			</div>

			<div className="mt-8 px-6 w-full">
				<button
					onClick={applyFilter}
					className="cst-bg-green w-full h-14 rounded-lg text-white font-semibold"
				>
					Apply Filter
				</button>
			</div>
		</div>
	);
}
