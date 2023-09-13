import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";

function App() {
	return (
		<main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-hidden">
			<Navbar />
			<div className="w-full h-[88vh] xl:flex items-center gap20 justify-between">
				<div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
					<LeftSide />
				</div>
				<div></div>
				<div></div>
			</div>
		</main>
	);
}

export default App;
