import { User } from "lucide-react";
import Notification from "@/assets/Notification.svg";
import Favorite from "@/assets/Favorite.svg";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import Photo from "@/assets/Photo.jpg";
//import { Skeleton } from "../ui/skeleton";
import { AvatarImage } from "../ui/avatar";

export default function AccountMenu() {
	return (
		<div className="flex items-center justify-center  gap-3">
			<div className="cursor-pointer flex items-center justify-center gap-1">
				<span className="hidden lg:inline-block">
					<Favorite />
				</span>
				<span className="hidden lg:inline-block">
					<Notification />
				</span>

				<Avatar>
					<AvatarImage
						className="h-10 w-10 rounded-full self-center"
						src={Photo}
						alt={"1"}
					/>

					<AvatarFallback className="bg-secondary h-10 w-10">
						<User strokeWidth={1.3} />
					</AvatarFallback>
				</Avatar>
				<div className="font-pop text-[14px] text-accent-foreground  ">
					{/* <Skeleton className="w-[120px] h-5 rounded-xl" /> */}

					<span className="hidden ml-2 sm:inline-block">DeadLine</span>
				</div>
			</div>
		</div>
	);
}
