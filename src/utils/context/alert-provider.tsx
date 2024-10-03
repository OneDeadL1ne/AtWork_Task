import React, { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";

type AlertOptions = {
	title: ReactNode;
	confirmMessage: ReactNode;
	successDuration?: number;
};
const AlertContext = createContext<{
	showAlert(opts: AlertOptions): void;
} | null>(null);

export type AlertComponentProps = {
	open: boolean;
	message?: ReactNode;
	title: ReactNode;
	onClose(): void;

	confirming?: boolean;
};

export type AlertProviderProps = {
	AlertComponent: React.ComponentType<AlertComponentProps>;
} & PropsWithChildren;

const sleep = (ms: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, ms);
	});

const AlertProvider = ({ AlertComponent, children }: AlertProviderProps) => {
	const [shown, setShown] = useState(false);

	const defaultOptions: AlertOptions = {
		title: "Success",
		confirmMessage: "",
		successDuration: 4000,
	};
	const [alertOptions, setAlertOptions] = useState<AlertOptions>(defaultOptions);

	const showAlert = async (opts?: Partial<AlertOptions>) => {
		setShown(true);
		setAlertOptions({
			confirmMessage: opts?.confirmMessage ?? defaultOptions.confirmMessage,
			title: opts?.title ?? defaultOptions.title,
			successDuration: opts?.successDuration ?? defaultOptions.successDuration,
		});
		if (!alertOptions.successDuration) {
			return;
		}

		await sleep(alertOptions.successDuration);
		setShown(false);
	};

	const hideAlert = () => setShown(false);

	return (
		<AlertContext.Provider value={{ showAlert }}>
			<AlertComponent
				open={shown}
				onClose={hideAlert}
				message={alertOptions.confirmMessage}
				title={alertOptions.title}
			/>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertProvider;

export const useConfirmAlert = () => {
	const context = useContext(AlertContext);
	if (!context) {
		throw new Error("Please Use AlertProvider in parent component.");
	}

	return context;
};
