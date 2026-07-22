import React, { useState } from "react";
import "./Company.css"; 
import DashNavbar from "../component/DashNavbar";
import SidebarCompany from "../component/SidebarCompany";
import ApplicantsTable from "../component/ApplicantsTable";
import PostForm from "../component/PostForm";
import MyInternships from "../component/MyInternships";
import CompanyMessages from "../component/CompanyMessages";
import CompanySettings from "../component/CompanySettings";
import Footer from "../component/Footer";
import { useTranslation } from "react-i18next";

function Company() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="company-page-wrapper">
      <DashNavbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      <SidebarCompany 
        onOpenModal={() => setIsModalOpen(true)} 
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
      
      <main className="company-main-content">
        <div className="company-content-inner">
          
          {activeView === "overview" && (
            <div className="company-header-section">
              <div className="dash-head-container">
                <div className="dash-text-section">
                  <h1 className="dash-title">
                    {t("companyDash.title1")}<br />
                    <span className="text-highlight">{t("companyDash.title2")}</span>
                  </h1>
                  <p className="dash-subtitle">
                    {t("companyDash.subtitle1")}<span className="text-bold-primary">{t("companyDash.subtitle2")}</span>{t("companyDash.subtitle3")}
                  </p>
                </div>
                <div className="dash-stats-section">
                  <div className="stat-card stat-card-light">
                    <span className="stat-number stat-text-primary">84%</span>
                    <span className="stat-label">{t("companyDash.matchRate")}</span>
                  </div>
                  <div className="stat-card stat-card-primary">
                    <span className="stat-number">12</span>
                    <span className="stat-label stat-label-light">{t("companyDash.newToday")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="company-grid-layout">
            <div className="table-column-full">
               {activeView === "overview" && <ApplicantsTable />}
               {activeView === "internships" && <MyInternships />}
               {activeView === "messages" && <CompanyMessages />}
               {activeView === "settings" && <CompanySettings />}
            </div>
          </div>

        </div>
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <PostForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Company;