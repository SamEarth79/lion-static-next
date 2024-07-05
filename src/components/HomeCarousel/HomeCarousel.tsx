import Image from "next/image"
import { ArrowCapsule } from "../Buttons/Buttons"

function TransparencyReliabilityTimeDelivery() {
    return (
        <div className="flex items-center gap-2 py-9">
            <div className="flex items-center gap-1">
                <Image src="Transparency.svg" alt="transparency" width={20} height={20}/>
                <p>Transparency</p>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1">
                <Image src="Reliability.svg" alt="reliability" width={20} height={20}/>
                <p>Reliability</p>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1">
                <Image src="TimeDelivery.svg" alt="time delivery" width={20} height={20}/>
                <p>TimeDelivery</p>
            </div>
        </div>
    )
}

function CarouselScreen1(){
    return (
        <div className="w-full flex overflow-hidden">
            <div className="w-[60%] pl-10 py-14 flex flex-col gap-2">
                <h1 className="text-[45px] font-bold leading-[3.5rem]">Leading PCB Manufacturers With A Commitment To Quality</h1>
                <h2 className="text-lg font-light capitalize w-10/12">Delivering high-quality, reliable PCBs with unparalleled expertise to meet your unique requirements.</h2>
                <TransparencyReliabilityTimeDelivery />
                <ArrowCapsule text="Instant Quote" className="w-fit"/>
            </div>
            <div className="w-[40%] flex flex-col justify-center relative">
                <div className="relative h-fit">
                    <Image src="/Carousel1.svg" alt="carousel1" width={500} height={500}/>
                    <div className="absolute left-0 bottom-2">
                        <div className="w-12 h-12 bg-lion-1 border-4 border-white rounded-xl relative right-8 top-2"></div>
                        <div className="w-20 h-20 bg-lion-3 border-[4px] border-white rounded-3xl"></div>
                    </div>
                </div>
                <div className="absolute right-24 -top-8">
                    <div className="w-16 h-16 bg-lion-3 border-4 border-white rounded-2xl relative left-8 top-2"></div>
                    <div className="w-10 h-10 bg-lion-1 border-[4px] border-white rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}

export default function HomeCarousel() {
    return (
        <div className="bg-[#F7F7F7B3] w-[65%] mx-[68px] rounded-[50px] border border-[#F7921E44]">
            <CarouselScreen1 />
        </div>
    )
}