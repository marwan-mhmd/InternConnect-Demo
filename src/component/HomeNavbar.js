import React from 'react';
import './HomeNavbar.css';
import { TfiWorld } from "react-icons/tfi";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomeNavbar() {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar shadow-sm" dir="ltr">
            <div className="container-fluid px-4 px-lg-5">
                <Link className="navbar-brand fw-black brand-logo m-0" to="/">
                    InternConnect
                </Link>
                
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav me-auto ms-lg-5 mb-2 mb-lg-0 gap-lg-4 mt-3 mt-lg-0">
                        <li className="nav-item">
                            <Link 
                                className={`nav-link nav-link-custom ${location.pathname === '/' ? 'active-link' : ''}`} 
                                to="/"
                            >
                                {t("homeNavbar.findWork")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link nav-link-custom ${location.pathname === '/aboutus' ? 'active-link' : ''}`} 
                                to="/aboutus"
                            >
                                {t("homeNavbar.aboutUs")}
                            </Link>
                        </li>
                    </ul>
                    
                    <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 pb-3 pb-lg-0">
                        <div 
                            className="lang-toggle d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                            onClick={toggleLanguage}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="icon fs-6"><TfiWorld /></span>
                            <span className="fw-bold lang-text">{t("homeNavbar.lang")}</span>
                        </div>
                        <Link to={"/login"} className="btn nav-btn-text fw-bold">{t("homeNavbar.signIn")}</Link>
                        <Link to={"/signup"} className="btn btn-primary rounded-pill px-4 fw-bold custom-btn-primary">
                            {t("homeNavbar.joinNow")}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HomeNavbar;