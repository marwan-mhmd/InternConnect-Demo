import React, { useState } from "react";
import "./CompanySettings.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useTranslation } from "react-i18next";

function CompanySettings() {
  const { t } = useTranslation();

  const [companyData, setCompanyData] = useState({
    companyName: "TechCorp Global",
    industry: "Software Development",
    website: "https://techcorpglobal.com",
    email: "hr@techcorpglobal.com",
    about: "We are a leading tech company specializing in AI and modern web solutions.",
    logoLetter: "T"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Data ready to be sent to Database:", companyData);
    alert(t("companySettings.successMsg"));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2 className="settings-title">{t("companySettings.title")}</h2>
        <p className="settings-subtitle">{t("companySettings.subtitle")}</p>
      </div>

      <form className="settings-form" onSubmit={handleSave}>
        
        <div className="settings-section">
          <h3 className="section-title">{t("companySettings.companyLogo")}</h3>
          <div className="logo-upload-container">
            <div className="current-logo">
              {companyData.companyName.charAt(0).toUpperCase()}
            </div>
            <button type="button" className="upload-btn">
              <MdOutlinePhotoCamera size={18} />
              {t("companySettings.changeLogo")}
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="section-title">{t("companySettings.basicInfo")}</h3>
          <div className="settings-grid">
            <div className="input-group">
              <label>{t("companySettings.companyName")}</label>
              <input 
                type="text" 
                name="companyName" 
                value={companyData.companyName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="input-group">
              <label>{t("companySettings.industry")}</label>
              <input 
                type="text" 
                name="industry" 
                value={companyData.industry} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>{t("companySettings.websiteUrl")}</label>
              <input 
                type="url" 
                name="website" 
                value={companyData.website} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>{t("companySettings.contactEmail")}</label>
              <input 
                type="email" 
                name="email" 
                value={companyData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          <div className="input-group mt-3">
            <label>{t("companySettings.aboutCompany")}</label>
            <textarea 
              rows="4" 
              name="about" 
              value={companyData.about} 
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="settings-actions">
          <button type="button" className="cancel-btn">{t("companySettings.cancel")}</button>
          <button type="submit" className="save-btn">{t("companySettings.saveChanges")}</button>
        </div>

      </form>
    </div>
  );
}

export default CompanySettings;