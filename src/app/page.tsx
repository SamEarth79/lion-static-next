import { AboutLC, CompaniesWeServe, HomeDarkBanner, IdeasToReality, IndustriesWeCater, OneStopSolution, OneToOneMeetingBanner, Testimonies, WhyChooseLC } from "../components/HomeComponents/HomeUtils";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";

export default function Home() {
    return (
        <main className="flex flex-col my-7">
            <section>
                <HomeCarousel />
            </section>
            <OneStopSolution />
            <WhyChooseLC />
            <AboutLC />
            <IdeasToReality />
            <HomeDarkBanner />
            <Testimonies />
            <CompaniesWeServe />
            <IndustriesWeCater />
            <OneToOneMeetingBanner />
        </main>
    );
}
