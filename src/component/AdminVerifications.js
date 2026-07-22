import React, { useState } from "react";
import "./AdminVerifications.css";
import { MdOutlinePolicy, MdOutlineFactCheck, MdVerified, MdCancel, MdRemoveRedEye } from "react-icons/md";
import { useTranslation } from "react-i18next";

function AdminVerifications() {
  const { t } = useTranslation();

  const [requests, setRequests] = useState([
    {
      id: 1,
      company: "Shield Security",
      type: "Commercial Register",
      date: "May 28, 2026",
      docUrl: "#",
      status: "Pending"
    },
    {
      id: 2,
      company: "ICTHub",
      type: "Tax Card",
      date: "May 30, 2026",
      docUrl: "#",
      status: "Pending"
    },
    {
      id: 3,
      company: "InnoWeb",
      type: "Commercial Register",
      date: "June 1, 2026",
      docUrl: "#",
      status: "Pending"
    }
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
    if(action === 'approved') {
        alert(t("adminVerifications.successApprove"));
    } else {
        alert(t("adminVerifications.successReject"));
    }
  };

  return (
    <div className="admin-page-container">
      <div className="page-header">
        <h2 className="page-title">{t("adminVerifications.title")}</h2>
        <p className="page-subtitle">{t("adminVerifications.subtitle")}</p>
      </div>

      <div className="verifications-grid">
        {requests.map((req) => (
          <div className="verify-card" key={req.id}>
            <div className="verify-card-header">
              <div className="company-info">
                <h3>{req.company}</h3>
                <span className="date-text">{t("adminVerifications.submitted")} {req.date}</span>
              </div>
              <span className="doc-badge">
                {req.type === "Tax Card" ? <MdOutlineFactCheck /> : <MdOutlinePolicy />}
                {req.type}
              </span>
            </div>
            
            <div className="verify-card-body">
              <button className="view-doc-btn">
                <MdRemoveRedEye size={18} /> {t("adminVerifications.viewDoc")}
              </button>
            </div>

            <div className="verify-card-footer">
              <button className="reject-action-btn" onClick={() => handleAction(req.id, 'rejected')}>
                <MdCancel size={18} /> {t("adminVerifications.reject")}
              </button>
              <button className="approve-action-btn" onClick={() => handleAction(req.id, 'approved')}>
                <MdVerified size={18} /> {t("adminVerifications.approve")}
              </button>
            </div>
          </div>
        ))}
        
        {requests.length === 0 && (
          <p className="empty-state">{t("adminVerifications.emptyState")}</p>
        )}
      </div>
    </div>
  );
}

export default AdminVerifications;