import Image from "next/image"
import { ArrowCapsule, ArrowCapsuleTransparent, Capsule } from "../Buttons/Buttons"

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
        <section className="flex flex-col justify-center items-center my-24 mx-[68px] px-10">
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
        <section className="bg-[#F7921E08] rounded-3xl flex flex-col items-center p-14 mx-[58px]">
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
        <section className="flex justify-between items-start px-4 relative my-20 mx-[58px]">
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

export function IdeasToReality(){

    function Step({index, name, subText}: {index: number, name: string, subText: string}){
        return (
            <div className="flex flex-col items-center text-center gap-8">
                <div className="relative">
                    <div className="absolute w-[65px] h-[65px] rounded-full bg-[#F7921E33] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 ring-1 ring-offset-[6px] ring-lion-1"></div>
                    <div className="absolute w-[50px] h-[50px] rounded-full bg-[#F7921E55] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"></div>
                    <div className="relative z-40 text-white bg-[#F7921E88] py-1 px-3 rounded-full">
                        <span className="z-40 font-bold">{index}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h4 className="text-xl font-medium">{name}</h4>
                    <p className="text-lg font-light w-3/4 text-center">{subText}</p>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-[#FCFAF888] rounded-[50px] p-16 mx-[58px]">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-semibold my-2">Brining Your Ideas To Reality</h2>
                <p className="text-lg font-light w-8/12 text-center text-gray-500 capitalize">Transforming concepts into reality through PCBA Turnkey, ODM, and contract manufacturing.</p>
            </div>
            <div className="flex items-start justify-around mt-28">
                <Step index={1} name="Design Review" subText="Thorough PCB design check for compliance."/>
                <Step index={2} name="Fabrication" subText="Manufacture PCB to exact specifications."/>
                <Step index={3} name="Component Sourcing" subText="Source high-quality parts from trusted suppliers."/>
                <Step index={4} name="Assembly" subText="Place and solder components accurately."/>
                <Step index={5} name="Testing & Delivery" subText="Rigorous testing and timely delivery."/>
            </div>
        </section>
    )
}

export function HomeDarkBanner(){

    function Card({text1, text2, text3}: {text1: string, text2: string, text3: string}){
        return (
            <div className="p-4 px-5 border border-[#F7921E55] rounded-3xl bg-[#FFFFFF11]">
                <p className="text-[#F7921EAA] font-light">{text1}</p>
                <h4 className="text-lion-1 text-4xl font-bold">{text2}</h4>
                <p>{text3}</p>
            </div>
        )
    }

    return (
        <section className="bg-black text-white rounded-[50px] flex relative overflow-hidden mx-[48px] my-20">
            <div className="px-16 py-20 w-full">
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold">Made In India,</h2>
                    <h2 className="text-5xl font-bold text-[#F7921EAA]">Shipped Globally</h2>
                    {/* <p className="text-lg font-light w-2/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, incidunt.</p> */}
                </div>
                <div className="py-16 w-4/6 flex justify-around">
                    <Card text1="Serving" text2="8000+" text3="Clients and Growing..."/>
                    <Card text1="Over" text2="25,000+" text3="square ft Factory floor area and growing"/>
                    <Card text1="Over" text2="8+" text3="years of experience"/>
                </div>
                <div className="flex gap-4">
                    <ArrowCapsule text="Instant Quote"/>
                    <ArrowCapsuleTransparent text="Capabilities"/>
                </div>
            </div>
            <div className="absolute right-0 bottom-0">
                <Image src="/OrangeWave.svg" alt="orange wave graphic" width={500} height={500}/>
            </div>
            <div className="absolute right-[-2em] top-[-2em]">
                <Image src="/Globe.svg" alt="globe" width={500} height={500}/>
            </div>
        </section>
    )
}

export function Testimonies(){

    function WhatOurClientsSay(){
        return(
            <div className="flex items-center w-4/6 justify-center gap-20 mx-[58px]">
                <Image src="/DoubleQuotes.svg" alt="double quotes graphic" 
                width={200} height={200}/>
                <div className="flex flex-col gap-2 w-[60%]">
                    <h2 className="text-4xl font-bold capitalize">
                        What Our Clients Say!
                    </h2>
                    <p className="text-lg font-light capitalize text-gray-500">
                        discover what our valuable clients have to say about 
                        their experiences about our products and services
                    </p>
                </div>
            </div>
        )
    }

    function TestimonyCarousel(){
        function Testimony(){
            return(
                <div className="rounded-lg flex bg-white p-10 py-14 w-8/12
                shadow-[0px_0px_100px_0.1rem_rgba(0,0,0,0.15)]">
                    <div className="w-1/2 flex flex-col gap-8 relative">
                        {/* <Image src="/DobuleQuotes2.svg" alt="double quotes 2" 
                        width={80} height={80}
                        className="absolute top-0 left-0"
                        /> */}
                        <p className="text-xl leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit. Laudantium blanditiis modi recusandae 
                            aliquam! Maxime in corrupti vitae a. Deleniti, rem!</p>
                        <hr className="w-[60px] border-[1.4px] border-lion-1"/>
                        <div className="">
                            <h3 className="text-3xl font-semibold">Samarth M</h3>
                            <p className="text-2xl ">Pro E-sports player</p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="w-full flex justify-center my-10">
                <Testimony />
            </div>
        )
    }

    return(
        <section className="flex flex-col items-center my-20">
            <WhatOurClientsSay />
            <TestimonyCarousel />
        </section>
    )
}

export function CompaniesWeServe(){
    return (
        <section className="
        flex items-center justify-around w-[90%] mx-auto py-10 px-20 rounded-3xl
        bg-[url('/PCB.svg')]">
            <Image src="/Company1.svg" alt="company1" width={160} height={160}/>
            <Image src="/Company2.svg" alt="company2" width={160} height={160}/>
            <Image src="/Company3.svg" alt="company3" width={160} height={160}/>
            <Image src="/Company4.svg" alt="company4" width={160} height={160}/>
            <Image src="/Company5.svg" alt="company5" width={160} height={160}/>
        </section>
    )
}

export function IndustriesWeCater(){

    function IndustryCard({image, industryName, subText}: {image: string, industryName: string, subText: string}){
        return(
            <div className="flex flex-col basis-[30%] rounded-2xl 
            shadow-[0px_0px_100px_0.1rem_rgba(0,0,0,0.15)] overflow-hidden relative">
                <div className="flex gap-2 items-center relative overflow-hidden h-[40%]">
                    <div className="w-20 h-20 rounded-lg absolute top-[-14px] left-[-4px] bg-[#F28040] -z-10"></div>
                    <Image src={image} alt={industryName} width={100} height={200}/>
                    <h3 className="text-3xl font-medium">{industryName}</h3>
                </div>
                <p className="p-4 px-6 text-lg">{subText}</p>
                <div className="absolute right-0 bottom-0">
                    <div className="w-4 h-4 bg-lion-1 rounded-md relative right-[100%]"></div>
                    <div className="w-4 h-4 bg-[#F7921E44] rounded-md"></div>
                </div>
            </div>
        )
    }

    return (
        <section className="my-20 flex flex-col items-center w-11/12 mx-auto">
            <h2 className="text-4xl font-bold my-1">Industries We Cater</h2>
            <p className="text-lg font-light text-gray-500 w-6/12 text-center capitalize">Explore the wide range of industries we serve with our advanced 
                and reliable PCB solutions.</p>
            <div className="flex flex-wrap justify-center gap-8 my-8">
                <IndustryCard 
                    image="/Industry1.svg" 
                    industryName="Medical" 
                    subText="Our services support the development of advanced 
                    medical devices, ensuring exceptional performance and 
                    strict healthcare compliance. "/>
                <IndustryCard 
                    image="/Industry2.svg" 
                    industryName="Aerospace" 
                    subText="Our services support the development of advanced 
                    medical devices, ensuring exceptional performance and 
                    strict healthcare compliance. "/>
                <IndustryCard 
                    image="/Industry3.svg" 
                    industryName="Defense" 
                    subText="Our services support the development of advanced 
                    medical devices, ensuring exceptional performance and 
                    strict healthcare compliance. "/>
                <IndustryCard 
                    image="/Industry4.svg" 
                    industryName="IoT" 
                    subText="Our services support the development of advanced 
                    medical devices, ensuring exceptional performance and 
                    strict healthcare compliance. "/>
                <IndustryCard 
                    image="/Industry5.svg" 
                    industryName="Automobile" 
                    subText="Our services support the development of advanced 
                    medical devices, ensuring exceptional performance and 
                    strict healthcare compliance. "/>
                <IndustryCard 
                    image="/Industry6.svg" 
                    industryName="Lighting" 
                    subText="Our services support the development of advanced 
                    medical devices, ensuring exceptional performance and 
                    strict healthcare compliance. "/>
            </div>
        </section>
    )
}

export function OneToOneMeetingBanner(){
    return(
        <section className="w-11/12 mx-auto p-10 py-14 bg-[#000000] rounded-3xl relative overflow-hidden">
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-semibold text-white">Have An Innovative<br />
                <span className="text-lion-1 leading-relaxed">Idea?</span></h2>
                <p className="text-white text-lg font-extralight w-2/5">Schedule a one-on-one meeting with a member of our sales 
                    team for personalized assistance and insights.</p>
                <div className="flex items-center gap-8 mt-8">
                    <ArrowCapsule text="Schedule 1:1 A Meeting"/>
                    <ArrowCapsuleTransparent text="Contacy Us"/>
                </div>
            </div>
            <div className="absolute right-0 top-0">
                <Image src="/PCB2.svg" alt="orange wave graphic" width={700} height={700}/>
            </div>
        </section>
    )
}