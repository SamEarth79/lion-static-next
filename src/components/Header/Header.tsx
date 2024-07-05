import Image from "next/image";
import { Authenticate, HeaderNav } from "./HeaderUtils";

export default function Header() {

    const headerStyles = {
        backgroundColor: "#00000004",
        width: "100%",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px"
    };

	return (
		<header style={headerStyles}>
			<Image src="/LionCircuitsLogo.svg" alt="logo" width={140} height={100}/>
            <HeaderNav />
            <Authenticate />
		</header>
	);
}
