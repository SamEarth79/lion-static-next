import { Capsule, TransparentCapsule } from "../Buttons/Buttons"

export function HeaderNav() {
    return (
        <nav>
            <ul className="flex justify-around gap-[32px] font-medium text-lg">
                <li>About Us</li>
                <li>Services</li>
                <li>Capabilities</li>
                <li>Resources</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export function Authenticate() {
    return (
        <div className="flex gap-[24px] font-semibold text-lg">
            {/* <h2 className="py-2 px-4 cursor-pointer hover:-translate-y-1 transition-transform duration-300">Login</h2> */}
            
            <TransparentCapsule text="Log In" className="hover:-translate-y-1 transition-transform duration-300"/>
            <Capsule text="Sign Up" className="hover:-translate-y-1 transition-transform duration-300"/>
        </div>
    )
}