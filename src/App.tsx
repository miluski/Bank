import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { reducer } from "./utils/reducer";
import { BrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import LoginView from "./views/LoginView/LoginView";
import OpenAccountView from "./views/OpenAccountView/OpenAccountView";
import Dashboard from "./views/Dashboard/Dashboard";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import SendingTransferView from "./views/SendingTransferView/SendingTransferView";
import CreateDepositView from "./views/CreatingDepositView/CreateDepositView";

function App() {
	const persistConfig = {
		key: "root",
		storage,
	};
	const persistedReducer = persistReducer(persistConfig, reducer);
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
