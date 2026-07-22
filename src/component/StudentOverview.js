import React from "react";
import "./StudentOverview.css";
import Internshipcard from "./Internshipcard";
import { MdVerified, MdTrendingUp } from "react-icons/md";
import { useTranslation } from "react-i18next";

function StudentOverview({ setActiveView }) {
  const { t } = useTranslation();

  const recommendedJobs = [
    {
      id: 1,
      title: "UI Engineer Intern",
      company: "Creative Collective",
      location: "Riyadh (Remote)",
      salary: "$1,200",
      verified: true,
      isNew: false,
      skills: ["Figma", "React", "Tailwind"]
    },
    {
      id: 2,
      title: "Data Science Trainee",
      company: "Nexus Systems",
      location: "Dubai, UAE",
      salary: "$1,500",
      verified: false,
      isNew: true,
      skills: ["Python", "SQL", "Pandas"]
    }
  ];

  const recentApplications = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Global Tech Solutions",
      status: "PENDING",
      nextStep: "Initial Screening"
    },
    {
      id: 2,
      title: "Junior UX Designer",
      company: "Design Hub Arabia",
      status: "ACCEPTED",
      nextStep: "View Offer"
    }
  ];

  return (
    <div className="student-overview-container">
      
      <div className="overview-top-row">
        <div className="profile-summary-card">
          <div className="profile-summary-content">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" 
              alt="Ahmed Abuzaid" 
              className="profile-main-img" 
            />
            <div className="profile-info-main">
              <h1 className="profile-name">Sarah Ahmed</h1>
              <p className="profile-degree">B.S. Computer Engineering • AAST</p>
              
              <div className="profile-stats-row">
                <div className="stat-item">
                  <span className="stat-label">{t("studentOverview.gpa")}</span>
                  <span className="stat-value text-primary">3.81 / 4.0</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{t("studentOverview.internships")}</span>
                  <span className="stat-value text-primary">02 {t("studentOverview.completed")}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{t("studentOverview.graduation")}</span>
                  <span className="stat-value text-primary">September 2026</span>
                </div>
              </div>

              <div className="profile-skills-row">
                <span className="skill-tag-light">Full-Stack</span>
                <span className="skill-tag-light">React.js</span>
                <span className="skill-tag-light">Node.js</span>
                <span className="skill-tag-light">PostgreSQL</span>
                <span className="verified-skill">
                  <MdVerified /> {t("studentOverview.verifiedSkill")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-strength-card">
          <p className="strength-label">{t("studentOverview.profileStrength")}</p>
          <h2 className="strength-percentage">
            88% <MdTrendingUp size={24} />
          </h2>
          <p className="strength-desc">
            {t("studentOverview.strengthDesc")}
          </p>
          <button className="review-matches-btn">{t("studentOverview.reviewMatches")}</button>
        </div>
      </div>

      <div className="overview-bottom-row">
        <div className="ai-recommended-section">
          <div className="section-header">
            <h3 className="section-title">{t("studentOverview.aiRecommended")}</h3>
            <a 
              href="#" 
              className="view-all-link" 
              onClick={(e) => { e.preventDefault(); setActiveView("search"); }}
            >
              {t("studentOverview.viewAll")}
            </a>
          </div>
          
          <div className="recommended-cards-grid">
            {recommendedJobs.map(job => (
              <Internshipcard 
                key={job.id} 
                internship={job} 
                actionText="Details" 
              />
            ))}
          </div>
        </div>

        <div className="application-tracker-section">
          <div className="section-header">
            <h3 className="section-title">{t("studentOverview.appTracker")}</h3>
          </div>
          
          <div className="tracker-box">
            <div className="tracker-box-header">
              <span className="tracker-subtitle">{t("studentOverview.recentApps")}</span>
              <span className="tracker-total">04 {t("studentOverview.total")}</span>
            </div>

            <div className="tracker-list">
              {recentApplications.map(app => (
                <div className="tracker-item" key={app.id}>
                  <div className="tracker-item-top">
                    <div>
                      <h4 className="tracker-job-title">{app.title}</h4>
                      <p className="tracker-company">{app.company}</p>
                    </div>
                    <span className={`status-badge status-${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </div>
                  {app.status === 'PENDING' ? (
                    <p className="tracker-next-step">{t("studentOverview.nextStep")} {app.nextStep}</p>
                  ) : (
                    <button 
                      className="view-offer-btn" 
                      onClick={() => setActiveView("applications")}
                    >
                      {app.nextStep}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StudentOverview;