import { useGetUserQuery } from "@/redux/api/user";
import { NavLink, useParams } from "react-router-dom";
import ArrowLeft from "@/assets/ArrowLeft.svg";

import CustomTabs from "@/components/custom-tabs/custom-tabs";
import { UserInterface } from "@/types/user";
import UserForm from "./UserForm";
import { useMemo } from "react";
import { formatUser } from "@/utils/helpers";

export const userFormTab = (user?: UserInterface) => [
	{
		value: "user-profile",
		head: `Данные профиля`,
		content: <UserForm user={user} />,
	},
	{
		value: "work-space",
		head: `Рабочее пространтсво`,
		content: <></>,
	},
	{
		value: "privacy",
		head: `Приватность`,
		content: <></>,
	},
	{
		value: "security",
		head: `Безопасность`,
		content: <></>,
	},
];

export default function UserPage() {
	const { id } = useParams();
	const { data, isLoading, isSuccess } = useGetUserQuery(Number(id));

	const user = useMemo(() => {
		if (!data) {
			return;
		}
		return formatUser(data);
	}, [isLoading, isSuccess]);
	return (
		<div className="h-full  flex flex-col mr-[3%] ml-[3%] sm:mr-[10%] sm:ml-[10%]">
			<div className="flex flex-col mt-6">
				<div className="flex flex-row gap-4 items-center">
					<NavLink to={"/"} className="flex items-center">
						<ArrowLeft />
						<h1 className="ml-3 font-medium text-2xl text-[#595959]">Назад</h1>
					</NavLink>
				</div>
			</div>

			<CustomTabs user={user} loading={isLoading} tabs={userFormTab(user)} />
		</div>
	);
}
