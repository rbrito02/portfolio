import About from "./components/About";
import Banner from "./components/Banner";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import RightSide from "./components/RightSide";
import { motion } from "framer-motion";

function App() {
	return (
		<main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-hidden">
			<Navbar />
			<div className="w-full h-[88vh] xl:flex items-center gap20 justify-between">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
				>
					<LeftSide />
				</motion.div>
				<div className="h-[88vh] w-full p-4 pb-20 overflow-y-auto ">
					<Banner />
					<div className="spacer h-28" />
					<About />
					<div className="spacer h-24" />
					<Projects />
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
				>
					<RightSide />
				</motion.div>
			</div>
		</main>
	);
}

export default App;
