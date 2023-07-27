import { AlertTriangle, CheckCircle } from "lucide-react";
import React from "react";

export const Alert = (props: {
	title: string;
	children: React.ReactNode;
	schema: "error" | "success";
}) => {
	const classes = [
		props.schema === "error"
			? "bg-ga-red/10 text-ga-red"
			: "bg-ga-green/10 text-ga-green",
		"rounded-lg p-4 text-sm flex gap-2",
	].join(" ");

	return (
		<div className={classes} role="alert">
			<div className="w-fit rounded-full bg-ga-gray-darker/10 p-3">
				props.schema === "error" ? (
				<AlertTriangle size={18} />
				) : (
				<CheckCircle size={18} />)
			</div>
			<div>
				<b>{props.title}</b>
				<p>{props.children}</p>
			</div>
		</div>
	);
};
