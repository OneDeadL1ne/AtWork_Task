import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
	return (
		<div className="flex flex-col h-screen ">
			<header className="mr-[3%] ml-[3%] sm:mr-[10%] sm:ml-[10%] ">
				<Header />
			</header>
			<main className="min-w-full  bg-accent  flex-grow ">
				<Outlet />
			</main>
		</div>
	);
}
