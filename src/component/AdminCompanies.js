import React, { useState } from "react";
import "./AdminCompanies.css";
import { MdOutlineBusiness, MdLocationOn, MdMoreVert } from "react-icons/md";
import { useTranslation } from "react-i18next";

function AdminCompanies() {
  const { t } = useTranslation();

  const [companies] = useState([
    { id: 1, name: "ICTHub", location: "Alexandria, EG", activeInternships: 4, status: "Active" },
    { id: 2, name: "Shield Security", location: "Remote", activeInternships: 2, status: "Active" },
    { id: 3, name: "DataFlow Systems", location: "Cairo, EG", activeInternships: 0, status: "Inactive" },
    { id: 4, name: "Nexus Web", location: "Alexandria, EG", activeInternships: 1, status: "Active" }
  ]);

  return (
    <div className="admin-page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="page-title">{t("adminCompanies.title")}</h2>
          <p className="page-subtitle">{t("adminCompanies.subtitle")}</p>
        </div>
      </div>

      <div className="companies-list">
        {companies.map(company => (
          <div className="admin-company-card" key={company.id}>
            <div className="company-card-left">
              <div className="company-avatar">
                <MdOutlineBusiness size={24} />
              </div>
              <div className="company-details">
                <h3>{company.name}</h3>
                <p><MdLocationOn size={14} /> {company.location}</p>
              </div>
            </div>
            
            <div className="company-card-right">
              <div className="internship-count">
                <span className="count-number">{company.activeInternships}</span>
                <span className="count-label">{t("adminCompanies.activeRoles")}</span>
              </div>
              <span className={`company-status ${company.status.toLowerCase()}`}>
                {company.status}
              </span>
              <button className="options-btn"><MdMoreVert size={20} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCompanies;