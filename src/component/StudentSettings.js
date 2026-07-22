import React, { useState } from "react";
import "./StudentSettings.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useTranslation } from "react-i18next";

function StudentSettings() {
  const { t } = useTranslation();

  const [studentData, setStudentData] = useState({
    fullName: "Sarah Ahmed ",
    major: "Computer Engineering",
    university: "AAST",
    gpa: "3.81",
    graduationYear: "2026",
    email: "student@aast.edu",
    skills: "React, Node.js, Express.js, PostgreSQL, Cybersecurity",
    linkedinUrl: "https://linkedin.com/in/sarahahmed"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Student Data ready for DB:", studentData);
    alert(t("studentSettings.successMsg"));
  };

  return (
    <div className="student-settings-container">
      <div className="settings-header">
        <h2 className="settings-title">{t("studentSettings.title")}</h2>
        <p className="settings-subtitle">{t("studentSettings.subtitle")}</p>
      </div>

      <form className="settings-form" onSubmit={handleSave}>
        
        <div className="settings-section">
          <h3 className="section-title">{t("studentSettings.profilePic")}</h3>
          <div className="logo-upload-container">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" 
              alt="Profile" 
              className="current-avatar"
            />
            <button type="button" className="upload-btn">
              <MdOutlinePhotoCamera size={18} />
              {t("studentSettings.changePhoto")}
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="section-title">{t("studentSettings.academicInfo")}</h3>
          <div className="settings-grid">
            <div className="input-group">
              <label>{t("studentSettings.fullName")}</label>
              <input 
                type="text" 
                name="fullName" 
                value={studentData.fullName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="input-group">
              <label>{t("studentSettings.university")}</label>
              <input 
                type="text" 
                name="university" 
                value={studentData.university} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>{t("studentSettings.major")}</label>
              <input 
                type="text" 
                name="major" 
                value={studentData.major} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>{t("studentSettings.gradYear")}</label>
              <input 
                type="text" 
                name="graduationYear" 
                value={studentData.graduationYear} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>{t("studentSettings.cumGpa")}</label>
              <input 
                type="number" 
                step="0.01" 
                name="gpa" 
                value={studentData.gpa} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>{t("studentSettings.email")}</label>
              <input 
                type="email" 
                name="email" 
                value={studentData.email} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="section-title">{t("studentSettings.profLinks")}</h3>
          <div className="input-group mt-3">
            <label>{t("studentSettings.primarySkills")}</label>
            <input 
              type="text" 
              name="skills" 
              value={studentData.skills} 
              onChange={handleChange} 
            />
          </div>
          <div className="input-group mt-3">
            <label>{t("studentSettings.linkedinUrl")}</label>
            <input 
              type="url" 
              name="linkedinUrl" 
              value={studentData.linkedinUrl} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className="settings-actions">
          <button type="button" className="cancel-btn">{t("studentSettings.cancel")}</button>
          <button type="submit" className="save-btn">{t("studentSettings.saveChanges")}</button>
        </div>

      </form>
    </div>
  );
}

export default StudentSettings;