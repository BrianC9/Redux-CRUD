import "./App.css";
import CategoryDashboard from "./components/CategoryDashboard";
import UserList from "./components/UserList";

function App() {
	return (
		<>
			<h1 className="text-2xl uppercase my-5 font-bold text-slate-700">
				Users management
			</h1>
			<main className="flex-col justify-center align-middle items-center">
				<UserList />
				<CategoryDashboard />
			</main>
		</>
	);
}

export default App;
