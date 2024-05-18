import { Action } from "../types/Action";
import {
	CHANGE_ACCOUNTS_ARRAY,
	CHANGE_ACCOUNT_ID,
	CHANGE_ACCOUNT_TYPE,
	CHANGE_APARTMENT_NUMBER,
	CHANGE_BIRTHDAY,
	CHANGE_CITY,
	CHANGE_COUNTRY,
	CHANGE_CURRENCY,
	CHANGE_DAILY_LIMIT,
	CHANGE_DEPOSITS_ARRAY,
	CHANGE_DOCUMENT_ID,
	CHANGE_DOCUMENT_TYPE,
	CHANGE_EMAIL,
	CHANGE_HOUSE_NUMBER,
	CHANGE_MOTHER_SURNAME,
	CHANGE_NAME,
	CHANGE_NUMBER_PHONE,
	CHANGE_PASSWORD,
	CHANGE_PESEL,
	CHANGE_POST_CODE,
	CHANGE_SINGLE_TRANSACTION_LIMIT,
	CHANGE_STREET,
	CHANGE_SURNAME,
	CHANGE_TRANSACTIONS_ARRAY,
	RESET_STATE,
} from "../types/ActionTypes";

const initialState = {
	email: "",
	password: "",
	name: "",
	surname: "",
	phoneNumber: "",
	documentType: "",
	documentId: "",
	pesel: "",
	birthday: "",
	motherSurname: "",
	country: "",
	postCode: "",
	city: "",
	street: "",
	houseNumber: "",
	apartmentNumber: "",
	accountType: "",
	currency: "PLN",
	accountsArray: [{}],
	depositsArray: [{}],
	transactionsArray: [{}],
	dailyLimit: 0,
	singleTransactionLimit: 0,
	accountId: "",
};

export default function userReducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_EMAIL:
			return {
				...state,
				email: action.newEmail,
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				password: action.newPassword,
			};
		case CHANGE_NAME:
			return {
				...state,
				name: action.newName,
			};
		case CHANGE_SURNAME:
			return {
				...state,
				surname: action.newSurname,
			};
		case CHANGE_NUMBER_PHONE:
			return {
				...state,
				phoneNumber: action.newPhoneNumber,
			};
		case CHANGE_DOCUMENT_TYPE:
			return {
				...state,
				documentType: action.newDocumentType,
			};
		case CHANGE_DOCUMENT_ID:
			return {
				...state,
				documentId: action.newDocumentId,
			};
		case CHANGE_PESEL:
			return {
				...state,
				pesel: action.newPesel,
			};
		case CHANGE_BIRTHDAY:
			return {
				...state,
				birthday: action.newBirthday,
			};
		case CHANGE_MOTHER_SURNAME:
			return {
				...state,
				motherSurname: action.newMotherSurname,
			};
		case CHANGE_COUNTRY:
			return {
				...state,
				country: action.newCountry,
			};
		case CHANGE_POST_CODE:
			return {
				...state,
				postCode: action.newPostCode,
			};
		case CHANGE_CITY:
			return {
				...state,
				city: action.newCity,
			};
		case CHANGE_STREET:
			return {
				...state,
				street: action.newStreet,
			};
		case CHANGE_HOUSE_NUMBER:
			return {
				...state,
				houseNumber: action.newHouseNumber,
			};
		case CHANGE_APARTMENT_NUMBER:
			return {
				...state,
				apartmentNumber: action.newApartmentNumber,
			};
		case CHANGE_ACCOUNT_TYPE:
			return {
				...state,
				accountType: action.newAccountType,
			};
		case CHANGE_CURRENCY:
			return {
				...state,
				currency: action.newCurrency,
			};
		case CHANGE_ACCOUNTS_ARRAY:
			return {
				...state,
				accountsArray: action.newAccountsArray,
			};
		case CHANGE_DEPOSITS_ARRAY:
			return {
				...state,
				depositsArray: action.newDepositsArray,
			};
		case CHANGE_TRANSACTIONS_ARRAY:
			return {
				...state,
				transactionsArray: action.newTransactionsArray,
			};
		case CHANGE_DAILY_LIMIT:
			return {
				...state,
				dailyLimit: action.newDailyLimit,
			};
		case CHANGE_SINGLE_TRANSACTION_LIMIT:
			return {
				...state,
				singleTransactionLimit: action.newSingleTransactionLimit,
			};
		case CHANGE_ACCOUNT_ID:
			return {
				...state,
				accountId: action.newAccountId,
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
