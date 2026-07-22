import React, { useState } from "react";
import "./AdminSettings.css";
import { useTranslation } from "react-i18next";

function AdminSettings() {
  const { t } = useTranslation();

  const [adminData, setAdminData] = useState({
    name: "Ahmed Abuzaid",
    email: "admin@internconnect.com",
    role: "System Administrator",
    maintenanceMode: false,
    autoApprove: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdminData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Admin Settings Saved:", adminData);
    alert(t("adminSettings.successMsg"));
  };

  return (
    <div className="admin-page-container" style={{ maxWidth: '800px' }}>
      <div className="page-header">
        <h2 className="page-title">{t("adminSettings.title")}</h2>
        <p className="page-subtitle">{t("adminSettings.subtitle")}</p>
      </div>

      <form className="admin-settings-form" onSubmit={handleSave}>
        
        <div className="settings-block">
          <h3 className="block-title">{t("adminSettings.profile")}</h3>
          <div className="input-row">
            <div className="input-group">
              <label>{t("adminSettings.adminName")}</label>
              <input type="text" name="name" value={adminData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>{t("adminSettings.adminEmail")}</label>
              <input type="email" name="email" value={adminData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-group" style={{ marginTop: '1.5rem' }}>
            <label>{t("adminSettings.role")}</label>
            <input type="text" name="role" value={adminData.role} disabled style={{ backgroundColor: '#e2e8f0', cursor: 'not-allowed' }} />
          </div>
        </div>

        <div className="settings-block">
          <h3 className="block-title">{t("adminSettings.sysPrefs")}</h3>
          <div className="toggle-group">
            <div className="toggle-text">
              <h4>{t("adminSettings.maintenance")}</h4>
              <p>{t("adminSettings.maintenanceDesc")}</p>
            </div>
            <label className="switch">
              <input type="checkbox" name="maintenanceMode" checked={adminData.maintenanceMode} onChange={handleChange} />
              <span className="slider round"></span>
            </label>
          </div>
          
          <div className="toggle-group" style={{ marginTop: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
            <div className="toggle-text">
              <h4>{t("adminSettings.autoApprove")}</h4>
              <p>{t("adminSettings.autoApproveDesc")}</p>
            </div>
            <label className="switch">
              <input type="checkbox" name="autoApprove" checked={adminData.autoApprove} onChange={handleChange} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-settings-btn">{t("adminSettings.saveBtn")}</button>
        </div>

      </form>
    </div>
  );
}

export default AdminSettings;