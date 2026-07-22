import Companyoffer from "./Companyoffer";
import Studentoffer from "./Studentoffer";
import './Calltoaction.css'; 

function Calltoaction() {
    return (
        <section className="calltoaction">
            <div className="container">
                <div className="row g-4 align-items-stretch">
                    <div className="col-12 col-lg-6">
                        <Studentoffer />
                    </div>
                    <div className="col-12 col-lg-6">
                        <Companyoffer />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Calltoaction;