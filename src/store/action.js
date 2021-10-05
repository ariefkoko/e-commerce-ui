import { CHANGE_FILTER } from "./actionType";

export function changeFilter(payload) {
	return {
		type: CHANGE_FILTER,
		payload,
	};
}
