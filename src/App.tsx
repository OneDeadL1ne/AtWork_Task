import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/not-found/NotFound";

import UsersPage from "./pages/users/UsersPage";
import Layout from "./components/layout/layout";
import { useEffect } from "react";
import UserPage from "./pages/users/user/UserPage";

function App() {
	useEffect(() => {
		document.body.setAttribute("data-theme", "light");
		document.querySelector("html")?.setAttribute("data-color-scheme", "light");
	}, []);
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<UsersPage />} />
				<Route path="users">
					{/*

					 Вообще если было в приложении было много страниц, то похорошему 
					 для взаимодействия с пользователями нужно отдельный маршрут
					 поэтому решил оставить тут комментарий
					
					 
					 <Route index element={<UsersPage />} />  - это главная страница с пользователями 

					 <Route path=":id" element={<UserPage />} /> - это страница для пользователя с указанным id 

					 */}

					<Route path=":id" element={<UserPage />} />
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
