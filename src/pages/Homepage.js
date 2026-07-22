import Calltoaction from "../component/Calltoaction";
import Herosec from "../component/Herosec";
import HomeNavbar from "../component/HomeNavbar";
import Internshipslist from "../component/Internshipslist";

function Homepage(){
    return(
        <>
            <HomeNavbar />
            <div className=" main-page-wrapper">
                <Herosec />
                <Internshipslist />
                <Calltoaction />
            </div>
        </>
    )
}
export default Homepage;