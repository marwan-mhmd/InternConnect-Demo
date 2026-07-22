import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TfiWorld } from "react-icons/tfi";
import './Navbar.css';

function Navbar({ page }) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar" dir="ltr">
            <div className="container"> 
                <Link to={'/'} className="navbar-brand navbar-logo">InternConnect</Link>
                
                <div className="ms-auto d-flex align-items-center gap-4">
                    
                    <div 
                        className="lang-toggle d-flex align-items-center gap-2"
                        onClick={toggleLanguage}
                        style={{ cursor: 'pointer', color: '#0f172a' }}
                    >
                        <span className="icon fs-6">
                            <TfiWorld />
                        </span>
                        <span className="fw-bold lang-text">{t("navbar.lang")}</span>
                    </div>

                    {page === 'login' ? (
                        <Link to={'/contact'} className="nav-link support-link">{t("navbar.support")}</Link>
                    ) : (
                        <>
                            <Link to={'/'} className="nav-link support-link d-none d-md-block">{t("navbar.explore")}</Link>
                            <Link to={'/login'} className="btn btn-primary rounded-pill px-4 fw-bold custom-btn-primary">{t("navbar.login")}</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;