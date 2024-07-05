import Image from "next/image";
import { ArrowCapsuleTransparent, Capsule } from "../Buttons/Buttons";

export function FooterRow1(){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col items-start gap-4 w-3/12">
                <Image src="/LionCircuitsLogo2.svg" alt="logo" width={140} height={100}/>
                <p className="text-sm leading-tight font-light">Schedule a one-on-one meeting with a member of our 
                    sales team for personalised assistance and insights.</p>
                <ArrowCapsuleTransparent text="Schedule 1:1 a meeting" className="text-black"/>
            </div>
            <div className="flex justify-around w-8/12">
                <div className="flex flex-col w-1/12 gap-4">
                    <h3 className="text-lg font-semibold">Services</h3>
                    <div className="flex flex-col items-start font-extralight text-[15px] gap-[4px] leading-tight">
                        <a href="">Fabrication</a>
                        <a href="">Assembly</a>
                        <a href="">Component Sourcing</a>
                    </div>
                </div>
                <div className="flex flex-col w-1/12 gap-4">
                    <h3 className="text-lg font-semibold">Capabilites</h3>
                    <div className="flex flex-col items-start font-extralight text-[15px] gap-[4px] leading-tight">
                        <a href="">Fabrication</a>
                        <a href="">Assembly</a>
                        <a href="">Component Sourcing</a>
                    </div>
                </div>
                <div className="flex flex-col w-1/12 gap-4">
                    <h3 className="text-lg font-semibold">Industries</h3>
                    <div className="flex flex-col items-start font-extralight text-[15px] gap-[4px] leading-tight">
                        <a href="">Medical</a>
                        <a href="">Aerospace</a>
                        <a href="">Defense</a>
                        <a href="">IoT</a>
                        <a href="">Automobile</a>
                        <a href="">Lighting</a>
                    </div>
                </div>
                <div className="flex flex-col w-2/12 gap-4">
                    <h3 className="text-lg font-semibold">Support</h3>
                    <div className="flex flex-col items-start font-extralight text-[15px] gap-[4px] leading-tight">
                        <a href="">How to Order</a>
                        <a href="">Shipping Info</a>
                        <a href="">User Guides</a>
                        <a href="">Resource Center</a>
                        <a href="">Blogs</a>
                        <a href="">FAQs</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">Get In Touch!</h3>
                    <div className="flex flex-col items-start font-extralight text-[15px] gap-2">
                        <div className="flex items-center gap-2">
                            <Image src="/Phone.svg" alt="phone" width={24} height={24}/>
                            080 4711 2351
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/Mail.svg" alt="email" width={24} height={24}/>
                            <div className="">
                                sales@lioncircuits.com<br />
                                support@lioncircuits.com
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Image src="/Clock.svg" alt="location" width={24} height={24}/>
                            <div className="">
                                Mon-Fri: 10AM - 7PM<br />
                                Sat: 10AM - 5PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function FooterRow2(){

    function IconCapsule({image, text, customWidth, customHeight}: {image: string, text: string, customWidth?: number, customHeight?: number}){
        return(
            <div className="flex items-center justify-start gap-2 bg-white border-[0.1px] border-gray-200 rounded-full px-1 py-[2px]">
                <Image src={image} alt={text} width={customWidth ? customWidth : 30} height={customHeight ? customHeight : 30} className="bg-[#FEF1E1] rounded-full p-[4px]"/>
                <p className="text-sm font-light">{text}</p>
            </div>
        )
    }

    return(
        <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-fit">
                <p className="text-lg font-light">Subscribe To Our Newsletter</p>
                <div className="flex items-center gap-4">
                    <input type="text" placeholder="Email address" 
                    className="px-4 py-2 border border-[FFFFFF33] rounded-xl shadow-inner 
                    placeholder:font-extralight"/>
                    <Capsule text="Subscribe"/>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                    <p className="text-lg font-light">Follow Us</p>
                    <div className="flex gap-4">
                        <Image src="/LinkedIn.svg" alt="linkedin" width={24} height={24}/>
                        <Image src="/Instagram.svg" alt="Instagram" width={24} height={24}/>
                        <Image src="/Facebook.svg" alt="Facebook" width={24} height={24}/>
                        <Image src="/X.svg" alt="X" width={24} height={24}/>
                        <Image src="/Youtube.svg" alt="Youtube" width={34} height={34}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/2 gap-4">
                <div className="flex gap-10">
                    <div className="text-lg font-semibold w-1/2">Payment Methods</div>
                    <div className="flex flex-wrap gap-4">
                        <IconCapsule image="/UPI.svg" text="UPI/QR"/>
                        <IconCapsule image="/Card.svg" text="Card"/>
                        <IconCapsule image="/Netbanking.svg" text="Net Banking"/>
                        <IconCapsule image="/Wallet.svg" text="Wallet"/>
                        <IconCapsule image="/PayLater.svg" text="Pay Later"/>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="text-lg font-semibold w-1/2">Delivery Methods</div>
                    <div className="flex flex-wrap gap-4">
                        <IconCapsule image="/DTDC.svg" text="DTDC" customWidth={34} customHeight={34}/>
                        <IconCapsule image="/BlueDart.svg" text="BlueDart" customWidth={34} customHeight={34}/>
                    </div>
                </div>
            </div>
        </div>
    )
}