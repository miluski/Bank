import { InformationTexts } from "../OfferView/InformationTexts";

export type SiteState = {
	site: string;
	productType: string;
	informationTexts: InformationTexts;
	imageUrl: string;
	percent: number;
	minimumAmount: number;
	maximumAmount: number;
	scale: string;
	currentRegisterPage: string;
	selectedAccountTypeIndex: number;
	isLoggedIn: boolean;
	siteReducer: any;
};

export type UserState = {
	password: string;
	email: string;
	name: string;
	surname: string;
	phoneNumber: string;
	documentType: string;
	documentId: string;
	pesel: string;
	birthday: string;
	motherSurname: string;
	country: string;
	postCode: string;
	city: string;
	street: string;
	houseNumber: number;
	apartmentNumber: number;
	accountType: string;
	currency: string;
	accountsArray: Array;
	depositsArray: Array;
	transactionsArray: Array;
	dailyLimit: number;
	singleTransactionLimit: number;
	accountId: string;
	user: any;
};

export type DepositState = {
	type: string;
	endDate: string;
	number: string;
	percent: string;
	money: number;
	currency: string;
	depositReducer: any;
};

export type TransferState = {
	title: string;
	receiverAccountObject: {
		accountId: string;
		accountNumber: string;
	},
	transferAmount: number;
	type: string;
	transferReducer: any;
}