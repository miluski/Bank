import { Action } from "./Action";
import {
	CHANGE_ACCOUNT_OFFER_FIELDS,
	CHANGE_CURRENT_REGISTER_PAGE,
	CHANGE_DEPOSIT_OFFER_FIELDS,
	CHANGE_SELECTED_ACCOUNT_TYPE,
	CHANGE_SITE,
} from "./ActionTypes";

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
};

export function reducer(state = initialState, action: Action) {
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
			};
		default:
			return state;
	}
}
