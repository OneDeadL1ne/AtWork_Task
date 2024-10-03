import Photo from "@/assets/Photo.jpg";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { UserInterface } from "@/types/user";
import { ActionsDropdown } from "./action-buttons";
import { Skeleton } from "../ui/skeleton";

interface IUserCardProps {
	user?: UserInterface;
	className?: string;
	isArchive?: boolean;
	isLoading?: boolean;
}

export default function UserCard({
	user,
	isArchive = false,
	className,
	isLoading,
}: IUserCardProps) {
	const grayFilter = isArchive && "grayscale grayscale-1";
	if (!user) {
		return;
	}
	return (
		<Card
			className={cn(
				grayFilter,
				className,
				"relative shadow-none border-none rounded-2xl max-w-sm overflow-hidden md:max-w-2xl p-4  "
			)}
		>
			<div className="flex flex-col lg:flex-row  ">
				<div className="w-full h-full lg:w-32 lg:h-32 rounded-2xl bg-gray-200 overflow-hidden">
					{isLoading ? (
						<Skeleton className="object-cover w-full h-full" />
					) : (
						<img src={Photo} alt="Profile" className="object-cover w-full h-full" />
					)}
				</div>
				<div className="mt-4 lg:mt-0 lg:ml-6 flex-grow  flex flex-col justify-between">
					<div className="">
						<div className="absolute right-0 px-4   ">
							<ActionsDropdown user={user} />
						</div>
						{isLoading ? (
							<Skeleton className="w-1/2 h-4 mt-2 rounded-xl" />
						) : (
							<div className="text-xl font-semibold text-primary">
								{user.userName}
							</div>
						)}

						{isLoading ? (
							<Skeleton className="w-1/3 h-4 mt-2 rounded-xl" />
						) : (
							<p className="text-accent-foreground">{user.companyName}</p>
						)}
					</div>
					{isLoading ? (
						<Skeleton className="w-1/2 h-4 mt-2 rounded-xl" />
					) : (
						<p className="text-muted ">{user.city}</p>
					)}
				</div>
			</div>
		</Card>
	);
}
