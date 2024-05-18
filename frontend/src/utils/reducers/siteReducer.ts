import { Action } from "../types/Action";
import {
	CHANGE_ACCOUNT_OFFER_FIELDS,
	CHANGE_CURRENT_REGISTER_PAGE,
	CHANGE_DEPOSIT_OFFER_FIELDS,
	CHANGE_IS_LOGGED_IN,
	CHANGE_SELECTED_ACCOUNT_TYPE,
	CHANGE_SITE,
	RESET_STATE,
} from "../types/ActionTypes";

const initialState = {
	site: "accounts",
	productType: "",
	informationTexts: {
		headerText: "",
		informationTextsArray: [""],
	},
	imageUrl: "",
	percent: 0,
	minimumAmount: 0,
	maximumAmount: 0,
	scale: "",
	currentRegisterPage: "start",
	selectedAccountTypeIndex: 0,
	isLoggedIn: false,
	amount: 1000,
};

export function siteReducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_SITE:
			return {
				...state,
				site: action.newSite,
			};
		case CHANGE_ACCOUNT_OFFER_FIELDS:
			return {
				...state,
				productType: action.newProductType,
				informationTexts: action.newInformationTexts,
				imageUrl: action.newImageUrl,
				site: action.newSite,
			};
		case CHANGE_DEPOSIT_OFFER_FIELDS:
			return {
				...state,
				productType: action.newProductType,
				percent: action.newPercent,
				minimumAmount: action.newMinimumAmount,
				maximumAmount: action.newMaximumAmount,
				scale: action.newScale,
				site: action.newSite,
			};
		case CHANGE_CURRENT_REGISTER_PAGE:
			return {
				...state,
				currentRegisterPage: action.newCurrentRegisterPage,
			};
		case CHANGE_SELECTED_ACCOUNT_TYPE:
			return {
				...state,
				selectedAccountTypeIndex: action.newSelectedAccountTypeIndex,
				amount: action.newAmount
			};
		case CHANGE_IS_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.newIsLoggedIn,
			};
		case RESET_STATE:
			return {
				...state,
				...initialState
			};
		default:
			return state;
	}
}
