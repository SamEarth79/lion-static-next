import SearchComponent from "./search";
import Header from '@/components/Header/Header';
import "../../app/globals.css";
import Footer from "@/components/Footer/Footer";
const SearchMpn = () =>{

    return(
        <div>
            <Header />
            <SearchComponent />
            <Footer />
        </div>
    )
}
export default SearchMpn;