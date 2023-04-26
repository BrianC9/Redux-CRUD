import { Badge, Card, DonutChart, Flex, Subtitle, Title } from "@tremor/react";
import { useUsers } from "../hooks/useUsers";

export default function ChartPremiunUsers() {
	const { users, premiumUsers, nonPremiunUsers } = useUsers();
	const premiumDistribution = [
		{
			name: "Premiun",
			users: premiumUsers.length,
		},
		{
			name: "Non-premium",
			users: nonPremiunUsers.length,
		},
	];
	return (
		<Card className="mt-16">
			<Title>Premiun distribution</Title>
			<Flex justifyContent="start" className="space-x-2">
				<Subtitle>Total of users:</Subtitle>
				<Badge color="gray">{users.length}</Badge>
			</Flex>
			<DonutChart
				className="mt-6"
				data={premiumDistribution}
				category="users"
				index="name"
				colors={["indigo", "orange"]}
				showAnimation={true}
				variant="pie"
			/>
		</Card>
	);
}
