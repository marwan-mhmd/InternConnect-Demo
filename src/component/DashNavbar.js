import React, { useState } from "react";
import "./DashNavbar.css";
import { TfiWorld, TfiBell } from "react-icons/tfi";
import { MdSpaceDashboard } from "react-icons/md"; 
import ProfileCard from "./ProfileCard";
import { useTranslation } from "react-i18next";

function DashNavbar({ onMenuClick }) {
  const [isBellActive, setIsBellActive] = useState(false);
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
        <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          <button 
            className="mobile-menu-btn" 
            onClick={onMenuClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <MdSpaceDashboard size={28} color="#0f172a" />
          </button>
          
          <span className="navbar-brand fw-black brand-logo m-0" style={{ cursor: 'default' }}>
            InternConnect
          </span>
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 pb-3 pb-lg-0 ms-auto">
            <button
              className={`notification-btn ${isBellActive ? "active-bell" : ""}`}
              onClick={() => setIsBellActive(!isBellActive)}
            >
              <TfiBell className="fs-5" />
              <span className="notification-badge"></span>
            </button>

            <div 
              className="lang-toggle d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              onClick={toggleLanguage}
              style={{ cursor: 'pointer' }}
            >
              <span className="icon fs-6">
                <TfiWorld />
              </span>
              <span className="fw-bold lang-text">{t("navbar.lang")}</span>
            </div>

            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashNavbar;