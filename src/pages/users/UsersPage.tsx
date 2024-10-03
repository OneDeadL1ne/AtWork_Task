import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user-card/user-card";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { useGetUsersQuery } from "@/redux/api/user";
import { setUsers } from "@/redux/reducers/userSlice";
import { UserInterface } from "@/types/user";
import { formatUsers } from "@/utils/helpers";

import { useEffect, useMemo } from "react";

export default function UsersPage() {
	const users = useAppSelector((state) => state.users.users);
	const dispatch = useAppDispatch();
	const { data, isLoading, isSuccess } = useGetUsersQuery();
	useEffect(() => {
		if (!data) {
			return;
		}
		const users: UserInterface[] = formatUsers(data);

		dispatch(setUsers(users.slice(0, 6)));
	}, [isLoading, isSuccess]);

	const usersActiveList = useMemo(() => {
		return users.filter((u) => !u.isArchive && !u.isHide);
	}, [users]);
	const usersArchiveList = useMemo(() => {
		return users.filter((u) => u.isArchive);
	}, [users]);
	return (
		<div className="flex flex-col mr-[3%] ml-[3%] sm:mr-[10%] sm:ml-[10%]">
			<div className="flex flex-col mt-14">
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-2xl text-accent-foreground">Активные</h1>
					<Separator className="text-muted-foreground h-[2px]" />
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-3 mt-6 gap-5 lg:gap-10">
					{isLoading ? (
						<>
							{Array.from({ length: 6 }).map((_, index) => (
								<UserCard key={index} isLoading />
							))}
						</>
					) : (
						<>
							{usersActiveList.map((user) => (
								<UserCard key={user.id} user={user} />
							))}
						</>
					)}
				</div>
			</div>
			<div className="mt-14">
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-2xl text-accent-foreground">Архив</h1>
					<Separator className="text-muted-foreground h-[2px]" />
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-3 mt-6 gap-5 lg:gap-10">
					{isLoading ? (
						<>
							{Array.from({ length: 6 }).map((_, index) => (
								<UserCard key={index} isLoading />
							))}
						</>
					) : (
						<>
							{usersArchiveList.map((user) => (
								<UserCard key={user.id} user={user} isArchive />
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
