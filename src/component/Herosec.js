import './Herosec.css';
import { FaArrowRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Logo from '../logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Herosec() {
    const { t } = useTranslation();

    return (
        <section className="herosec d-flex align-items-center">
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 herotext d-flex flex-column align-items-start">
                        <div className="arch-badge">
                            <span className="dot"></span> {t("hero.badge")}
                        </div>
                        <h1 className="hero-title">
                            {t("hero.title1")}<br />
                            <span className="gradient-text">{t("hero.title2")}</span>{t("hero.title3")}
                        </h1>
                        <p className="hero-desc">
                            {t("hero.desc")}
                        </p>
                        <div className="hero-buttons d-flex gap-3 mt-3">
                            <Link to="/allopportunities" className="btn btn-primary filled-btn d-flex align-items-center gap-2">
                                {t("hero.findInternships")} <FaArrowRight />
                            </Link>
                            <Link to="/signup" className="btn outline-btn d-flex align-items-center gap-2">
                                {t("hero.postOpportunities")} <CiCirclePlus className="fs-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0 position-relative heropic-container">
                        <div className="heropic-placeholder">
                            <img src={Logo} alt='' />
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default Herosec;