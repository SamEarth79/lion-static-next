import { AboutLC, OneStopSolution, WhyChooseLC } from "./HomeUtils";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
export default function Home() {
    return (
        <main className="flex flex-col my-7">
            <section>
                <HomeCarousel />
            </section>
            <OneStopSolution />
            <WhyChooseLC />
            <AboutLC />
        </main>
    );
}
