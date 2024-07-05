import { FooterRow1, FooterRow2 } from "./FooterUtils";

export default function Footer(){
    return(
        <footer className="w-11/12 mx-auto rounded-[50px] bg-[#F7921E0A] flex flex-col p-14">
            <FooterRow1 />
            <hr className="my-10"/>
            <FooterRow2 />
        </footer>
    )
}