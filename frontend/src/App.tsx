import { Action, Reducer, combineReducers, legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import LoginView from "./views/LoginView/LoginView";
import OpenAccountView from "./views/OpenAccountView/OpenAccountView";
import Dashboard from "./views/Dashboard/Dashboard";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import SendingTransferView from "./views/SendingTransferView/SendingTransferView";
import CreateDepositView from "./views/CreatingDepositView/CreateDepositView";
import { siteReducer } from "./utils/reducers/siteReducer";
import userReducer from "./utils/reducers/userReducer";
import storage from "redux-persist/es/storage";
import { depositReducer } from "./utils/reducers/depositReducer";
import { transferReducer } from "./utils/reducers/transferReducer";

function App() {
	const persistConfig = {
		key: "root",
		storage,
	};
	const rootReducer = combineReducers({
		siteReducer: persistReducer(persistConfig, siteReducer),
		user: persistReducer(persistConfig, userReducer),
		depositReducer: persistReducer(persistConfig, depositReducer),
		transferReducer: persistReducer(persistConfig, transferReducer),
	}) as unknown as Reducer<
		Partial<{
			siteReducer: never;
			user: never;
			depositReducer: never;
			transferReducer: never;
		}>,
		Action
	>;
	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = legacy_createStore(persistedReducer);
	const persistor = persistStore(store);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/login' element={<LoginView />} />
						<Route path='/open-account' element={<OpenAccountView />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/send-transfer' element={<SendingTransferView />} />
						<Route path='/create-deposit' element={<CreateDepositView />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
