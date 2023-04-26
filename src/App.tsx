import "./App.css";
import CategoryDashboard from "./components/CategoryDashboard";
import UserList from "./components/UserList";

function App() {
	return (
		<>
			<h1>Redux CRUD</h1>
			<UserList />
			<CategoryDashboard />
		</>
	);
}

export default App;
