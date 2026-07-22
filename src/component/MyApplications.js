import React, { useState } from "react";
import "./MyApplications.css";
import { MdOutlineAccessTime, MdOutlineCheckCircle, MdOutlineCancel } from "react-icons/md";

function MyApplications() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      role: "Full-Stack Web Developer Intern",
      company: "ICTHub",
      date: "May 10, 2026",
      status: "Interview",
      type: "Remote"
    },
    {
      id: 2,
      role: "Junior Penetration Tester",
      company: "Shield Security",
      date: "May 12, 2026",
      status: "Pending",
      type: "Alexandria, EG"
    },
    {
      id: 3,
      role: "React Frontend Trainee",
      company: "TechCorp Global",
      date: "April 28, 2026",
      status: "Rejected",
      type: "Cairo, EG"
    }
  ]);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Pending': return <MdOutlineAccessTime className="status-icon text-warning" />;
      case 'Interview': return <MdOutlineCheckCircle className="status-icon text-success" />;
      case 'Rejected': return <MdOutlineCancel className="status-icon text-danger" />;
      default: return null;
    }
  };

  return (
    <div className="applications-container">
      <div className="page-header">
        <h2 className="page-title">My Applications</h2>
        <p className="page-subtitle">Track the status of your internship applications.</p>
      </div>

      <div className="applications-list">
        {applications.map((app) => (
          <div className="app-card" key={app.id}>
            <div className="app-card-left">
              <div className="app-company-logo">
                {app.company.charAt(0)}
              </div>
              <div className="app-info">
                <h3 className="app-role">{app.role}</h3>
                <p className="app-company-loc">{app.company} • {app.type}</p>
                <p className="app-date">Applied on {app.date}</p>
              </div>
            </div>
            
            <div className="app-card-right">
              <div className={`app-status-badge status-${app.status.toLowerCase()}`}>
                {getStatusIcon(app.status)}
                {app.status}
              </div>
              <button className="withdraw-btn">Withdraw</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApplications;