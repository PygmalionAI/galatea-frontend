export function TermSection(props: {
	level: number;
	content: string;
	children?: React.ReactNode;
}) {
	return (
		<section
			className={`flex flex-col gap-1 ${props.level === 1 && "px-0"} ${
				props.level === 2 && "px-2"
			}  ${props.level === 3 && "px-4"} `}
		>
			<p className={`${props.level === 1 && "font-bold"}`}>{props.content}</p>
			{props.children}
		</section>
	);
}
