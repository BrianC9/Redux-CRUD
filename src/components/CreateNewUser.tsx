import {
	Button,
	Card,
	Flex,
	SelectBox,
	SelectBoxItem,
	TextInput,
	Title,
} from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";
function CreateNewUser() {
	const [premium, setPremium] = useState("normal");
	const { addUser } = useUserActions();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		addUser({
			name,
			email,
			github,
			premium: premium === "premium" ? true : false,
		});

		form.reset();
	};
	return (
		<Card className="max-w-2xl mt-16 mx-auto" decoration="top">
			<Title>Create a new user</Title>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Flex flexDirection="col" className="gap-4 ">
					<TextInput
						className="pl-4"
						name="name"
						required
						placeholder="Name"
						icon={UserIcon}
					/>
					<TextInput
						name="email"
						required
						className="pl-4"
						placeholder="Email@email.com"
						icon={EmailIcon}
					/>
					<TextInput
						name="github"
						required
						className="pl-4"
						placeholder="Github username"
						icon={TagIcon}
					/>

					<SelectBox
						value={premium}
						placeholder="Chose a category"
						icon={DolarIcon}
						onValueChange={setPremium}
					>
						<SelectBoxItem value="premium" text='Premium' className="pl-4" />
						<SelectBoxItem value="Normal" text='Normal' className="pl-4" />
					</SelectBox>
					<Button variant="primary">Submit user</Button>
				</Flex>
			</form>
		</Card>
	);
}
const UserIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	);
};
const DolarIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
};
const EmailIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
			/>
		</svg>
	);
};
const TagIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 6h.008v.008H6V6z"
			/>
		</svg>
	);
};
export default CreateNewUser;
