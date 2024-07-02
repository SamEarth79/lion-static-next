import Image from "next/image"

export function Capsule({text, className}: {text: string, className?: string}) {
    return (
        <button className={`h-[40px] px-10 bg-gradient-lion rounded-[32px] cursor-pointer text-white ${className}`}>{text}</button>
    )
}

export function TransparentCapsule({text, className}: {text: string, className?: string}) {
    return (
        <button className={`h-[40px] px-4 rounded-[32px] cursor-pointer ${className}`}>{text}</button>
    )
}

export function ArrowCapsule({text, className}: {text: string, className?: string}) {
    return (
        <button className={`h-[38px] pl-[28px] pr-[4px] bg-gradient-lion rounded-[32px] 
                            cursor-pointer text-white ${className}
                            flex items-center justify-between gap-4 shadow-lg shadow-[#FF951C55]`}>
            {text}
            <Image className="bg-white px-[4px] py-[8.5px] rounded-full" src={"/Arrow.svg"} alt="arrow_icon" width={30} height={20}/>
        </button>
    )
}