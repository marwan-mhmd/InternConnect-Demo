import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SidebarCompany.css";
import { 
  MdOutlineDashboard, 
  MdOutlineDomainVerification, 
  MdOutlineBusiness, 
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineLogout
} from "react-icons/md";

function SidebarAdmin({ activeView, setActiveView, isOpen, closeMenu }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <>
      {isOpen && <div className="sidebar-mobile-overlay" onClick={closeMenu}></div>}

      <aside className={`sidebar-container ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header" style={{ paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0b5fff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
              A
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0f172a', margin: '0' }}>{t("admin.superAdmin")}</h3>
              <p style={{ fontSize: '0.65rem', color: '#64748b', margin: '0' }}>{t("admin.systemManager")}</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'overview' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('overview'); }}
          >
            <MdOutlineDashboard size={22} /> 
            {t("admin.overview")}
          </a>
          
          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'verifications' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('verifications'); }}
          >
            <MdOutlineDomainVerification size={22} /> 
            {t("admin.verifications")}
          </a>

          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'companies' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('companies'); }}
          >
            <MdOutlineBusiness size={22} /> 
            {t("admin.companies")}
          </a>

          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'settings' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('settings'); }}
          >
            <MdOutlineSettings size={22} /> 
            {t("sidebar.settings")}
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigate('/aboutus'); }}>
            <MdOutlineHelpOutline size={20} /> 
            {t("sidebar.help")}
          </a>
          <a href="#" className="footer-link" onClick={handleLogout}>
            <MdOutlineLogout size={20} /> 
            {t("sidebar.signout")}
          </a>
        </div>
      </aside>
    </>
  );
}

export default SidebarAdmin;