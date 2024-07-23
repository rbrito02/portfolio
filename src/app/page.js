import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <EmailSection />
            </div>
        </main>
    );
}
