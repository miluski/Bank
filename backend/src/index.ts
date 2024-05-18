import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

type AccountArray = Array<{ accountId: string; accountsNumbers: any }>;

type User = {
	_id: string;
	email: string;
	password: string;
	name: string;
	surname: string;
	phoneNumber: string;
	documentType: string;
	documentId: string;
	pesel: number;
	birthday: string;
	motherSurname: string;
	country: string;
	postCode: string;
	city: string;
	street: string;
	houseNumber: number;
	apartmentNumber: number;
	accountsArray: Array<Object>;
	depositsArray: Array<Object>;
	transactionsArray: Array<Object>;
	dailyLimit: number;
	singleTransactionLimit: number;
	token: string;
};

const app: Express = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	surname: String,
	phoneNumber: String,
	documentType: String,
	documentId: String,
	pesel: Number,
	birthday: String,
	motherSurname: String,
	country: String,
	postCode: String,
	city: String,
	street: String,
	houseNumber: Number,
	apartmentNumber: Number,
	accountsArray: Array,
	depositsArray: Array,
	transactionsArray: Array,
	dailyLimit: Number,
	singleTransactionLimit: Number,
	token: String,
});
const User = mongoose.model("User", userSchema);

app.use(express.json());
app.use(cors());

database.on("error", (error: any) => {
	console.log(error);
});

database.once("connected", () => {
	console.log("Database Connected");
});

app.post("/login", async (req: Request, res: Response) => {
	try {
		const user = await User.findOne({
			email: req.body.email,
			password: req.body.password,
		});
		user
			? res.status(200).send(JSON.stringify({ ...user }))
			: res.sendStatus(401);
	} catch (error) {
		console.log(error);
		res.status(500);
	}
});

app.post("/register", async (req: Request, res: Response) => {
	try {
		const generatedPassword = generateRandomString(8);
		const user = new User({
			email: req.body.email,
			password: generatedPassword,
			name: req.body.name,
			surname: req.body.surname,
			phoneNumber: req.body.phoneNumber,
			documentType: req.body.documentType,
			documentId: req.body.documentId,
			pesel: req.body.pesel,
			birthday: req.body.birthday,
			motherSurname: req.body.motherSurname,
			country: req.body.country,
			postCode: req.body.postCode,
			city: req.body.city,
			street: req.body.street,
			houseNumber: req.body.houseNumber,
			apartmentNumber: req.body.apartmentNumber,
			accountsArray: req.body.accountsArray,
			depositsArray: [],
			transactionsArray: req.body.transactionsArray,
			dailyLimit: 3000,
			singleTransactionLimit: 1000,
		});
		console.log(user);
		await user.save();
		res.send(JSON.stringify({ generatedPassword: generatedPassword }));
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.get("/all-users-data", async (req: Request, res: Response) => {
	res.send(await User.find({}));
});

app.get("/user/:email", async (req: Request, res: Response) => {
	try {
		const user = await User.findOne({ email: req.params.email });
		user ? res.sendStatus(200) : res.sendStatus(404);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.get("/user/data/:id", async (req: Request, res: Response) => {
	try {
		console.log(req.params.id);
		const user = await User.findOne({ _id: req.params.id });
		user ? res.json(user).status(200) : res.sendStatus(404);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.get("/all-accounts", async (req: Request, res: Response) => {
	const users = await User.find({});
	const accountsArray: AccountArray = users.map(
		(user: User, _index: number) => {
			return {
				userId: user._id,
				accounts: user.accountsArray.map((account: any, _index: number) => ({
					number: account.number,
				})),
			};
		}
	);
	res.json(accountsArray);
});

app.post("/update-user-account-money", async (req: Request, res: Response) => {
	try {
		const user = await User.updateOne(
			{ _id: req.body.accountId },
			{ $set: { accountsArray: req.body.accountsArray } }
		);
		user ? res.sendStatus(200) : res.sendStatus(404);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.post("/update-account", async (req: Request, res: Response) => {
	try {
		const user = await User.updateOne(
			{ _id: req.body.accountId },
			{
				$set: {
					phoneNumber: req.body.phoneNumber,
					email: req.body.email,
					dailyLimit: req.body.dailyLimit,
					singleTransactionLimit: req.body.singleTransactionLimit,
				},
			}
		);
		user ? res.sendStatus(200) : res.sendStatus(404);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.post("/create-deposit", async (req: Request, res: Response) => {
	try {
		const user = await User.updateOne(
			{ _id: req.body.accountId },
			{
				$set: {
					depositsArray: req.body.depositsArray,
				},
			}
		);
		user ? res.sendStatus(200) : res.sendStatus(404);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.post("/save-transaction", async (req: Request, res: Response) => {
	try {
		const user = await User.updateOne(
			{ _id: req.body.accountId },
			{
				$set: {
					transactionsArray: req.body.transactionsArray,
				},
			}
		);
		user ? res.sendStatus(200) : res.sendStatus(404);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

function generateRandomString(length: number): string {
	let result = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
