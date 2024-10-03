import Logo from "@/assets/Logo.svg";
import { NavLink } from "react-router-dom";
import AccountMenu from "../account-menu/account-menu";

export default function Header() {
	return (
		<div
			className={`@container w-full h-[56px]   
			   bg-secondary flex `}
		>
			<div className="w-1/4 flex items-center ml-2 ">
				<div className=" ">
					<NavLink to="/">
						<Logo />
					</NavLink>
				</div>
			</div>
			<div className="w-1/2 flex items-center justify-end"></div>

			<div className="w-1/4 flex sm:mr-2  gap-3 p-[5px] justify-end items-center">
				<AccountMenu />
			</div>
		</div>
	);
}
