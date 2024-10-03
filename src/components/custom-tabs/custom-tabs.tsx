import { ReactElement } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Photo from "@/assets/Photo.jpg";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserInterface } from "@/types/user";
import { Separator } from "../ui/separator";

export interface TabPage {
	value: string;
	head: string;
	content: ReactElement;
	disabled?: boolean;
}

export interface TabsProps {
	user?: UserInterface;
	tabs: TabPage[];
	initialTab?: TabPage;
	getCurrentPage?: (value: string) => void;

	loading?: boolean;
}

export default function CustomTabs({
	tabs,
	initialTab = tabs[0],
	getCurrentPage,
	user,
	loading,
}: TabsProps) {
	return (
		<Tabs
			defaultValue={initialTab.value}
			className="w-full h-full flex flex-col gap-6  2xl:grid  2xl:grid-cols-4  mt-7  lg:gap-10 pb-10 "
			onValueChange={getCurrentPage}
		>
			<Card className="rounded-2xl shadow-none border-none">
				<CardContent className="flex flex-col p-0">
					{loading && (
						<div className=" h-full  w-full p-7">
							<Skeleton className="w-full h-64 rounded-2xl" />
						</div>
					)}
					{user && !loading && (
						<div className="h-1/3 p-7">
							<img
								src={Photo}
								alt="user-photo"
								className="h-full w-full   rounded-2xl"
							/>
						</div>
					)}

					<TabsList className="flex flex-col row-start-3 h-full  p-4">
						{tabs.map((tab, key) => (
							<TabsTrigger
								className="flex flex-col w-full data-[state=active]:shadow-none  data-[state=active]:text-accent-foreground data-[state=active]:bg-transparent hover:text-primary"
								disabled={tab.disabled}
								key={key}
								value={tab.value}
							>
								{loading ? (
									<div className="flex gap-2 w-full">
										<Skeleton className="w-full h-6 mt-2 rounded-xl" />
									</div>
								) : (
									<>
										<span className="text-start w-full pb-3 font-semibold text-base	">
											{tab.head}
										</span>
										<Separator className="text-muted h-[2px]" />
									</>
								)}
							</TabsTrigger>
						))}
					</TabsList>
				</CardContent>
			</Card>
			{!loading &&
				tabs.map((tab, key) => (
					<TabsContent key={key} value={tab.value} className="w-full col-span-3 m-0">
						<Card className="rounded-2xl h-full shadow-none border-none p-10">
							<CardHeader className="p-0 pb-3  font-semibold text-2xl">
								{tab.head}
							</CardHeader>
							<Separator className="h-[2px]" />
							<CardContent className="p-0">{tab.content}</CardContent>
						</Card>
					</TabsContent>
				))}
		</Tabs>
	);
}
