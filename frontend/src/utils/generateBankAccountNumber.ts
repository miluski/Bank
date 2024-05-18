export function generateBankAccountNumber() {
	let accountNumber = "PL55 ";
	for (let i = 0; i < 24; i++) {
		if (i % 4 === 0 && i !== 0) {
			accountNumber += " ";
		}
		accountNumber += Math.floor(Math.random() * 10);
	}
	return accountNumber;
}
