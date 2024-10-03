import { AlertComponentProps } from "@/utils/context/alert-provider";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import IconSuccess from "@/assets/Success.svg";
import { X } from "lucide-react";
const AlertSussesDialog = (props: AlertComponentProps) => {
	return (
		<Dialog onOpenChange={props.onClose} open={props.open}>
			<DialogContent closeIcon={<X />} className="sm:max-w-[400px] p-10  ">
				<DialogTitle className="flex flex-col">
					<div className="w-full flex justify-center h-full p-5">
						<IconSuccess />
					</div>
					<span className="w-full text-center text-lg font-semibold">
						{props.message}
					</span>
				</DialogTitle>
			</DialogContent>
		</Dialog>
	);
};
export default AlertSussesDialog;
