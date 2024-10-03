import { Dispatch, SetStateAction, useEffect } from "react";

export const useSuccessDialog = (
	isSuccess: boolean,
	setDialogOpen?: Dispatch<SetStateAction<boolean>>
) => {
	useEffect(() => {
		if (isSuccess) {
			setDialogOpen?.(true);
			setTimeout(() => {
				setDialogOpen?.(false);
			}, 1500);
		}
	}, [isSuccess]);
};
