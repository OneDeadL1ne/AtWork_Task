//import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import { z } from "zod";

import CustomForm, { useForm } from "@/components/form/form.tsx";

import { Button } from "@/components/ui/button.tsx";
import { FormField } from "@/components/ui/form.tsx";

import { InputField } from "@/components/input/input-field";

import { UserInterface } from "@/types/user";
import { X } from "lucide-react";

import { useConfirmAlert } from "@/utils/context/alert-provider";

interface UserFormProps {
	user?: UserInterface;
}

const formSchema = z.object({
	name: z.string().min(1, "Поле не может быть пустым"),
	userName: z.string().min(1, "Поле не может быть пустым"),
	email: z.string().min(1, "Поле не может быть пустым"),
	city: z.string().min(1, "Поле не может быть пустым"),
	phone: z.string().min(1, "Поле не может быть пустым"),
	companyName: z.string().min(1, "Поле не может быть пустым"),
});

const UserForm = ({ user }: UserFormProps) => {
	const { showAlert } = useConfirmAlert();
	const form = useForm({
		schema: formSchema,

		defaultValues: !user
			? { name: "", userName: "", email: "", city: "", phone: "", companyName: "" }
			: {
					name: user.name,
					userName: user.userName,
					email: user.email,
					city: user.city,
					phone: user.phone,
					companyName: user.companyName,
			  },
	});

	const handleSubmit = (data: {
		name: string;
		userName: string;
		email: string;
		city: string;
		phone: string;
		companyName: string;
	}) => {
		console.log(data);
		showAlert({
			title: "Success",
			confirmMessage: "Изменения сохранены!",
			successDuration: 4000,
		});
	};

	const clearInput = (name: "name" | "userName" | "email" | "city" | "phone" | "companyName") => {
		if (!form.getValues(name)) return;

		return (
			<div
				className="p-3 hover:cursor-pointer "
				onClick={() => {
					form.setValue(name, "");
				}}
			>
				<X strokeWidth={1.7} size={17} />
			</div>
		);
	};

	return (
		<CustomForm className=" flex flex-col  " form={form} onSubmit={handleSubmit}>
			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<InputField
						className="text-accent-foreground  mt-5  md:w-2/3 rounded-3xl "
						classNameLabel="text-accent-foreground text-lg font-semibold rounded-3xl "
						classNameInput="border-2 border-muted-foreground rounded-3xl"
						suffixIcon={clearInput(field.name)}
						label={"Имя"}
						isRequired
						{...field}
					/>
				)}
			/>

			<FormField
				control={form.control}
				name="userName"
				render={({ field }) => (
					<InputField
						className="text-accent-foreground  mt-5  md:w-2/3 rounded-3xl"
						classNameLabel="text-accent-foreground text-lg font-semibold "
						classNameInput="border-2 border-muted-foreground rounded-3xl "
						suffixIcon={clearInput(field.name)}
						label={"Никнейм"}
						isRequired
						{...field}
					/>
				)}
			/>
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<InputField
						className="text-accent-foreground  mt-5  md:w-2/3 rounded-3xl"
						classNameLabel="text-accent-foreground text-lg font-semibold "
						classNameInput="border-2 border-muted-foreground rounded-3xl "
						suffixIcon={clearInput(field.name)}
						label={"Почта"}
						type="email"
						isRequired
						{...field}
					/>
				)}
			/>
			<FormField
				control={form.control}
				name="city"
				render={({ field }) => (
					<InputField
						className="text-accent-foreground  mt-5  md:w-2/3 rounded-3xl"
						classNameLabel="text-accent-foreground text-lg font-semibold "
						classNameInput="border-2 border-muted-foreground rounded-3xl "
						suffixIcon={clearInput(field.name)}
						label={"Город"}
						isRequired
						{...field}
					/>
				)}
			/>
			<FormField
				control={form.control}
				name="phone"
				render={({ field }) => (
					<InputField
						className="text-accent-foreground  mt-5  md:w-2/3 rounded-3xl"
						classNameLabel="text-accent-foreground text-lg font-semibold "
						classNameInput="border-2 border-muted-foreground rounded-3xl "
						suffixIcon={clearInput(field.name)}
						label={"Телефон"}
						isRequired
						{...field}
					/>
				)}
			/>

			<FormField
				control={form.control}
				name="companyName"
				render={({ field }) => (
					<InputField
						className="text-accent-foreground  mt-5  md:w-2/3 rounded-3xl"
						classNameLabel="text-accent-foreground text-lg font-semibold "
						classNameInput="border-2 border-muted-foreground rounded-3xl "
						suffixIcon={clearInput(field.name)}
						label={"Название компании"}
						isRequired
						{...field}
					/>
				)}
			/>

			<Button
				className="mt-8 w-full py-6 md:w-40 md:px-3.5  text-base font-semibold bg-[#161616] rounded-3xl hover:bg-accent hover:text-accent-foreground text-white"
				type="submit"
			>
				{/* {isAdding || isUpdating ? (
						<LoadingSpinner className="text-white" />
					) : !actor ? (
						"Добавить"
					) : (
						"Изменить"
					)} */}
				Сохранить
			</Button>
		</CustomForm>
	);
};

export default UserForm;
