import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import AlertProvider from "./utils/context/alert-provider.tsx";

import AlertDialog from "./components/cusotm-alert/alert-success.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<AlertProvider AlertComponent={AlertDialog}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AlertProvider>
		</Provider>
	</React.StrictMode>
);
