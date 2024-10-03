import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	prefixIcon?: React.ReactNode;
	suffixIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, prefixIcon, suffixIcon, ...props }, ref) => {
		const [op, setOP] = React.useState(false);
		return (
			<div className={cn("flex  border-2 rounded-xl input-outline items-center", className)}>
				{prefixIcon}
				<input
					type={type}
					className="w-full h-10 rounded-xl bg-transparent px-4 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-within:ring-0 focus-within:ring-black ring-offset-background"
					ref={ref}
					{...props}
					onFocus={() => {
						setOP(true);
					}}
					onBlur={() => {
						setTimeout(() => {
							setOP(false);
						}, 100);
					}}
				/>
				{op && <div className="">{suffixIcon}</div>}
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input };
