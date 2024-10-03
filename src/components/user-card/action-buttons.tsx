import { Fragment } from "react";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { UserInterface } from "@/types/user";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { setArchive, setHide } from "@/redux/reducers/userSlice";
import { NavLink } from "react-router-dom";

export const ActionsDropdown = ({ user }: { user?: UserInterface }) => {
	const dispatch = useAppDispatch();
	const path = `/users/${user?.id}`;
	const handleArchive = () => {
		if (!user) {
			return;
		}
		// тут можно можно выполнить запрос на API чтобы измениить данные
		// но я решил хранить данные и состояние каждого пользователя в redux
		dispatch(setArchive(user.id));
	};

	const handleHide = () => {
		if (!user) {
			return;
		}
		// тут можно можно выполнить запрос на API чтобы измениить данные
		// но я решил хранить данные и состояние каждого пользователя в redux
		dispatch(setHide(user.id));
	};
	return (
		<Fragment>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent group  ">
						<span className="sr-only">Закрыть</span>
						<MoreVertical className="h-4 w-4 group-hover:text-primary" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="bg-white shadow-none w-1/3">
					{user?.isArchive ? (
						<DropdownMenuItem
							onClick={handleArchive}
							className=" text-accent-foreground group  hover:cursor-pointer focus:bg-transparent"
						>
							<p className="group-hover:text-primary">Активировать</p>
						</DropdownMenuItem>
					) : (
						<>
							<NavLink to={path}>
								<DropdownMenuItem className=" text-accent-foreground group  hover:cursor-pointer focus:bg-transparent">
									<p className="group-hover:text-primary">Редактировать</p>
								</DropdownMenuItem>
							</NavLink>

							<DropdownMenuItem
								onClick={handleArchive}
								className="text-accent-foreground group  hover:cursor-pointer focus:bg-transparent "
							>
								<p className="group-hover:text-primary ">Архивировать</p>
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={handleHide}
								className="text-accent-foreground group  hover:cursor-pointer focus:bg-transparent"
							>
								<p className="group-hover:text-primary ">Скрыть</p>
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</Fragment>
	);
};
