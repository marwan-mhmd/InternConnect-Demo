import React, { useState } from "react";
import "./Student.css";
import DashNavbar from "../component/DashNavbar";
import SidebarStudent from "../component/SidebarStudent";
import StudentOverview from "../component/StudentOverview";
import MyApplications from "../component/MyApplications";
import SearchJobs from "../component/SearchJobs";
import StudentMessages from "../component/StudentMessages";
import StudentSettings from "../component/StudentSettings";
import Footer from "../component/Footer";

function Student() {
  const [activeView, setActiveView] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="company-page-wrapper">
      <DashNavbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      <SidebarStudent 
        activeView={activeView} 
        setActiveView={setActiveView}
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />

      <main className="company-main-content">
        <div className="company-content-inner">
          {activeView === "overview" && <StudentOverview setActiveView={setActiveView} />}
          {activeView === "applications" && <MyApplications />}
          {activeView === "search" && <SearchJobs />}
          {activeView === "messages" && <StudentMessages />}
          {activeView === "settings" && <StudentSettings />}
        </div>
      </main>
    </div>
  );
}

export default Student;