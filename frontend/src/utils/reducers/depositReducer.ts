import { Action } from "../types/Action";
import { CHANGE_DEPOSIT_CREDENTIALS, RESET_STATE } from "../types/ActionTypes";

const initialState = {
	type: "",
	endDate: "",
	number: "",
	percent: ""
};

export function depositReducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_DEPOSIT_CREDENTIALS:
			return {
				...state,
				type: action.newDepositType,
				endDate: action.newDepositEndDate,
				percent: action.newDepositPercent
			};
		case RESET_STATE:
			return {
				...state,
				...initialState,
			};
		default:
			return state;
	}
}
