import {
	Badge,
	Card,
	Flex,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Text,
	Title,
} from "@tremor/react";

const users = [
	{
		id: 1,
		name: "Danielle",
		email: "dking@rocketmail.com",
		github: "entertainingswim",
		premium: false,
	},
	{
		id: 2,
		name: "Rachel",
		email: "rachel@hotmail.com",
		github: "zestywhistle",
		premium: true,
	},
	{
		id: 3,
		name: "Alexander",
		email: "aawalker@live.com",
		github: "zippycoat",
		premium: false,
	},
	{
		id: 4,
		name: "Courtney",
		email: "courtney_l_smith@gmail.com",
		github: "nondescriptletter",
		premium: true,
	},
	{
		id: 5,
		name: "Nicholas",
		email: "nicholas.david.jones@ymail.com",
		github: "chivalrousjeans",
		premium: false,
	},
	{
		id: 6,
		name: "Eric",
		email: "e.a.turner@yahoo.com",
		github: "harshsweater",
		premium: true,
	},
	{
		id: 7,
		name: "Layla",
		email: "l_j_patterson@aol.com",
		github: "publicmouth",
		premium: false,
	},
	{
		id: 8,
		name: "Melissa",
		email: "mwatson@rocketmail.com",
		github: "chiefsteam",
		premium: true,
	},
	{
		id: 9,
		name: "Sofia",
		email: "sacollins@aol.com",
		github: "coherentslope",
		premium: false,
	},
	{
		id: 10,
		name: "Owen",
		email: "owen55@yahoo.com",
		github: "stupendousmemory",
		premium: true,
	},
];

export default function Example() {
	return (
		<Card>
			<Flex justifyContent="start" className="space-x-2">
				<Title>Users</Title>
				<Badge color="gray">{users.length}</Badge>
			</Flex>
			<Text className="mt-2">Manage your users</Text>

			<Table className="mt-6">
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>User</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Github</TableHeaderCell>
						<TableHeaderCell>Actions</TableHeaderCell>
						<TableHeaderCell>Category</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell>{user.id}</TableCell>

							<TableCell className="flex align-middle gap-2  items-center">
								<img
									className="w-8 h-8 rounded-full self-start"
									src={`https://unavatar.io/github/${user.name}`}
									alt={user.name}
								/>
								{user.name}
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.github}</TableCell>

							<TableCell>
								<button type="button">
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
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
								<button type="button">
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
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
										/>
									</svg>
								</button>
							</TableCell>
							<TableCell>
								<Badge
									color={user.premium ? "yellow" : "gray"}
									size="lg"
									className="text-gray"
								>
									{user.premium ? "premiun" : "normal"}
								</Badge>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
