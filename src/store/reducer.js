import { CHANGE_FILTER } from "./actionType";

const initialState = {
	products: [
		{
			name: "TMA-2 HD Wireless",
			price: 350,
			rating: 4.6,
			reviews: 86,
			imageUrl:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/4bc9b406-ea7c-49e0-9c18-b86f299a24fa.jpg",
		},
		{
			name: "TMA-2 HD Wireless",
			price: 350,
			rating: 4.6,
			reviews: 86,
			imageUrl:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/4bc9b406-ea7c-49e0-9c18-b86f299a24fa.jpg",
		},
		{
			name: "TMA-2 HD Wireless",
			price: 350,
			rating: 4.6,
			reviews: 86,
			imageUrl:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/4bc9b406-ea7c-49e0-9c18-b86f299a24fa.jpg",
		},
		{
			name: "TMA-2 HD Wireless",
			price: 350,
			rating: 4.6,
			reviews: 86,
			imageUrl:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/4bc9b406-ea7c-49e0-9c18-b86f299a24fa.jpg",
		},
		{
			name: "TMA-2 HD Wireless",
			price: 350,
			rating: 4.6,
			reviews: 86,
			imageUrl:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/4bc9b406-ea7c-49e0-9c18-b86f299a24fa.jpg",
		},
		{
			name: "TMA-2 HD Wireless",
			price: 350,
			rating: 4.6,
			reviews: 86,
			imageUrl:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/4bc9b406-ea7c-49e0-9c18-b86f299a24fa.jpg",
		},
	],
	filter: {
		category: "headphone",
		sortBy: "popularity",
		minPrice: 0,
		maxPrice: 0,
	},
};

export default function reducer(state = initialState, action) {
	const newState = {
		...state,
	};

	switch (action.type) {
		case CHANGE_FILTER:
			newState.filter = action.payload;
			break;

		default:
			break;
	}

	return newState;
}
