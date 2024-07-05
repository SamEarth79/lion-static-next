import Image from "next/image"
import { ArrowCapsule, Capsule } from "@/components/Buttons/Buttons"

export function OneStopSolution(){
    
    function OneStopSolutionCard({title, description, image, height, index}: 
        {title: string, description: string, image: string, height: number, index: number}){
            return (
                <div className="
                    flex flex-col items-start gap-2 rounded-[16px] 
                    shadow-[0px_0px_100px_0.1rem_rgba(0,0,0,0.15)] relative overflow-hidden">
                    <div className="flex gap-6 items-center">
                        <Image src={image} alt={title} width={height} height={80}/>
                        <h3 className="text-2xl font-semibold">{title}</h3>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <p className="text-lg">{description}</p>
                        <Capsule text="Know More" className="w-fit"/>
                    </div>
                    {(index%2==0) && <div className="absolute bottom-0 right-5 flex flex-col items-end">
                        <div className="w-10 h-10 bg-[#F2804033] rounded-lg"></div>
                        <div className="w-6 h-6 bg-[#F7921E88] rounded-md translate-x-[100%]"></div>
                    </div>}
                    {(index%2==1) && <div className="absolute -top-1 right-5 flex flex-col items-end">
                        <div className="w-10 h-10 bg-[#F2804033] rounded-lg"></div>
                        <div className="w-6 h-6 bg-[#F7921E88] rounded-md translate-x-[100%]"></div>
                    </div>}
                </div>
            )
    }
    
    return (
        <section className="flex flex-col justify-center items-center my-24 px-10">
            <h2 className="text-4xl font-bold my-2">Your One-Stop Solution!</h2>
            <p className="text-gray-500 text-lg font-light capitalize">Effortlessly manage PCB fabrication, assembly, and sourcing 
                - all in one place.</p>
            <div className="flex gap-8 my-10">
                <OneStopSolutionCard 
                    title="Fabrication" 
                    description="Experience our efficient PCB fabrication 
                        services, delivering precise results for 2 to 12-layer 
                        boards to meet your technical requirements." 
                    image="/FabIllustration.svg"
                    height={100}
                    index={0}
                />
                <OneStopSolutionCard 
                    title="Assembly" 
                    description="Experience advanced automated PCB assembly 
                        with SMT and Through-Hole support, precise BGA 
                        mounting, and thorough inspection." 
                    image="/AssemblyIllustration.svg"
                    height={80}
                    index={1}
                />
                <OneStopSolutionCard 
                    title="Component Sourcing" 
                    description="Source your PCB components with us, comparing 
                        prices from reliable vendors and streamlining your 
                        Bill Of Materials effortlessly." 
                    image="/CPIllustration.svg"
                    height={80}
                    index={2}
                />
            </div>
        </section>
    )
}

export function WhyChooseLC(){

    function WhyChooseLCCard({title, subText, image}: {title: string, subText: string, image: string}){
        return (
            <div className="flex flex-col items-center">
                <Image src={image} alt={title} width={140} height={100}
                className="bg-white p-8 rounded-[50px] ring-1 ring-lion-1 ring-offset-8 my-4"/>
                <h4 className="text-xl font-semibold my-2">{title}</h4>
                <p className="capitalize text-center text-lg font-light w-10/12">{subText}</p>
            </div>
        )
    }

   return (
        <section className="bg-[#F7921E08] rounded-3xl flex flex-col items-center p-14">
            <h2 className="text-4xl font-bold my-2">Why Choose LionCircuits?</h2>
            <p className="text-lg font-light w-3/5 text-center capitalize text-gray-500">Ensuring a quick turnaround, we deliver your tailored PCB solutions with exceptional quality, transparency, and reliability.</p>
            <div className="flex items-center gap-8 mt-14">
                <WhyChooseLCCard 
                    title="Transparency" 
                    subText="ensuring fair pricing and clear communication 
                    throughout the process."
                    image="/Transparency2.svg"
                />
                <WhyChooseLCCard 
                    title="Reliability" 
                    subText="ensuring consistent performance, adherence to 
                    quality standards"
                    image="/Reliability2.svg"
                />
                <WhyChooseLCCard 
                    title="Timely Delivery" 
                    subText="satisfying customers through efficient supply 
                    chain management"
                    image="/TimelyDelivery2.svg"
                />
                <WhyChooseLCCard 
                    title="Traceability" 
                    subText="Maintaining quality control, and quick issue resolution"
                    image="/Traceability.svg"
                />
            </div>
        </section>
   ) 
}

export function AboutLC(){
    return (
        <section className="flex justify-between items-start px-4 relative my-20">
            <div className="flex flex-col w-[75%] gap-6">
                <div className="flex items-end gap-4">
                    <div className="">
                        <div className="w-8 h-8 bg-lion-1 rounded-lg -translate-x-[80%]"></div>
                        <div className="w-12 h-12 bg-lion-3 rounded-xl"></div>
                    </div>
                    <h2 className="text-4xl font-bold">About LionCircuits</h2>
                </div>
                <p className="text-lg font-light">LionCircuits is dedicated to simplifying electronic 
                    manufacturing with affordable, reliable, and automated 
                    services. Our vision includes streamlining processes 
                    through digital automation, ensuring seamless operations 
                    from prototype to production. With expertise in fabrication, 
                    assembly, component sourcing, and turnkey services, we 
                    empower hardware teams globally through our user-friendly 
                    platform. Based in India, LionCircuits leverages automation 
                    and deep learning to revolutionise the manufacturing 
                    experience.
                </p>
                <ArrowCapsule text="Know More" className="w-fit"/>
            </div>
        </section>
    )
}