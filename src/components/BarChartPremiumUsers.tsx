import { Badge, BarChart, Card, Flex, Subtitle, Title } from "@tremor/react";
import { useUsers } from "../hooks/useUsers";

export default function BarChartPremiumUsers() {
	const { users, premiumUsers, nonPremiunUsers } = useUsers();
	const premiumDistribution = [
		{
			name: "Premiun",
			"Premium users": premiumUsers.length,
		},
		{
			name: "Non-premium",
			"Non-premiun users": nonPremiunUsers.length,
		},
	];
	return (
		<Card className="mt-16">
			<Title>Number of premium / non-premiun users</Title>
			<Flex justifyContent="start" className="space-x-2">
				<Subtitle>Total of users:</Subtitle>
				<Badge color="gray">{users.length}</Badge>
			</Flex>
			<BarChart
				className="mt-6"
				data={premiumDistribution}
				index="name"
				categories={["Premium users", "Non-premiun users"]}
				colors={["indigo", "orange"]}
				yAxisWidth={68}
				showAnimation={true}
			/>
		</Card>
	);
}
