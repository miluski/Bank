import { Action } from "../types/Action";
import { CHANGE_RECEIVER_ACCOUNT_OBJECT, CHANGE_TITLE, CHANGE_TRANSFER_AMOUNT, CHANGE_TYPE, RESET_STATE } from "../types/ActionTypes";

const initialState = {
	title: "",
	receiverAccountObject: {
		accountId: "",
		accountNumber: "",
	},
	transferAmount: 0,
	type: "Zwyczajny",
};

export function transferReducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_TITLE:
			return {
				...state,
				title: action.newTitle,
			};
		case CHANGE_RECEIVER_ACCOUNT_OBJECT:
			return {
				...state,
				receiverAccountObject: action.newReceiverAccountObject,
			};
		case CHANGE_TRANSFER_AMOUNT:
			return {
				...state,
				transferAmount: action.newAmount,
			};
		case CHANGE_TYPE:
			return {
				...state,
				type: action.newType,
			};
        case RESET_STATE: 
            return {
                ...state,
                ...initialState
            }
		default:
			return state;
	}
}
