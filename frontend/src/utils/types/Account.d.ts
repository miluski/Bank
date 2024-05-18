export type Account = {
	type: string;
	number: string;
	money: number;
	currency: string;
	userId: string;
	accounts: Array<{ number: string }>;
};
