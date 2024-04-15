import { Action } from "./Action";
import { CHANGE_SITE } from "./ActionTypes";

const initialState = {
	site: "accounts",
};

export function reducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_SITE:
			return {
				...state,
				site: action.newSite,
			};
		default:
			return state;
	}
}
