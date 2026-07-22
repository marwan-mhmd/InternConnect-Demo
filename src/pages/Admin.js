import React, { useState } from "react";
import DashNavbar from "../component/DashNavbar"; 
import SidebarAdmin from "../component/SidebarAdmin";
import AdminOverview from "../component/AdminOverview";
import AdminVerifications from "../component/AdminVerifications";
import AdminCompanies from "../component/AdminCompanies";
import AdminSettings from "../component/AdminSettings";
import Footer from "../component/Footer";

function Admin() {
  const [activeView, setActiveView] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="company-page-wrapper" style={{ backgroundColor: '#F0F7FF' }}>
      
      <DashNavbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      <SidebarAdmin 
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
      
      <main className="company-main-content">
        <div className="company-content-inner">
          
          {activeView === "overview" && <AdminOverview setActiveView={setActiveView} />}
          {activeView === "verifications" && <AdminVerifications />}
          {activeView === "companies" && <AdminCompanies />}
          {activeView === "settings" && <AdminSettings />}

        </div>
      </main>
    </div>
  );
}

export default Admin;