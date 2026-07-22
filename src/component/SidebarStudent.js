import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SidebarCompany.css"; 
import { 
  MdOutlineDashboard, 
  MdOutlineDescription, 
  MdOutlineSearch, 
  MdOutlineMail, 
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineLogout,
  MdCloudUpload,
  MdClose
} from "react-icons/md";

function SidebarStudent({ activeView, setActiveView, isOpen, closeMenu }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    validateFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateFile(file);
  };

  const validateFile = (file) => {
    if (file) {
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setSelectedFile(file);
        setError("");
      } else {
        setSelectedFile(null);
        setError(t("student.invalidFile"));
      }
    }
  };

  const handleSaveCV = () => {
    if (selectedFile) {
      alert(t("student.cvUpdated"));
      setIsModalOpen(false);
      setSelectedFile(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
    setError("");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <>
      {isOpen && <div className="sidebar-mobile-overlay" onClick={closeMenu}></div>}

      <aside className={`sidebar-container ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header" style={{ paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
              alt="Student" 
              style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e2e8f0' }}
            />
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0f172a', margin: '0' }}>Sarah Ahmed</h3>
              <p style={{ fontSize: '0.65rem', color: '#64748b', margin: '0' }}>{t("student.csSenior")}</p>
            </div>
          </div>
          <button className="post-job-btn" style={{ width: '100%' }} onClick={() => setIsModalOpen(true)}>
            {t("student.updateCv")}
          </button>
        </div>

        <nav className="sidebar-nav">
          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'overview' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('overview'); }}
          >
            <MdOutlineDashboard size={22} /> 
            {t("student.overview")}
          </a>
          
          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'applications' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('applications'); }}
          >
            <MdOutlineDescription size={22} /> 
            {t("student.applications")}
          </a>

          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'search' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('search'); }}
          >
            <MdOutlineSearch size={22} /> 
            {t("student.search")}
          </a>

          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'messages' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('messages'); }}
          >
            <MdOutlineMail size={22} /> 
            {t("sidebar.messages")}
          </a>

          <a 
            href="#" 
            className={`sidebar-link ${activeView === 'settings' ? 'active-link' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('settings'); }}
          >
            <MdOutlineSettings size={22} /> 
            {t("sidebar.settings")}
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigate('/aboutus'); }}>
            <MdOutlineHelpOutline size={20} /> 
            {t("sidebar.help")}
          </a>
          <a href="#" className="footer-link" onClick={handleLogout}>
            <MdOutlineLogout size={20} /> 
            {t("sidebar.signout")}
          </a>
        </div>
      </aside>

      {isModalOpen && (
        <div className="upload-modal-overlay" onClick={closeModal}>
          <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="upload-modal-header">
              <h3 className="fw-bold m-0 text-dark">{t("student.uploadNewCv")}</h3>
              <button className="close-modal-btn" onClick={closeModal}>
                <MdClose size={24} />
              </button>
            </div>

            <div className="upload-modal-body">
              <div 
                className={`drag-drop-zone ${isDragging ? 'dragging' : ''} ${error ? 'error-border' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <MdCloudUpload size={48} className="upload-icon mb-3" />
                {selectedFile ? (
                  <div className="selected-file-info">
                    <span className="fw-bold text-primary">{selectedFile.name}</span>
                    <span className="text-muted d-block" style={{ fontSize: '12px' }}>
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                ) : (
                  <>
                    <p className="fw-bold mb-1">{t("student.dragDropText")}</p>
                    <p className="text-muted" style={{ fontSize: '12px' }}>{t("student.onlyPdf")}</p>
                  </>
                )}
                
                <input 
                  type="file" 
                  accept=".pdf,application/pdf" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  style={{ display: 'none' }} 
                />
              </div>

              {error && (
                <div className="text-danger mt-3 fw-bold" style={{ fontSize: '14px', textAlign: 'center' }}>
                  {error}
                </div>
              )}
            </div>

            <div className="upload-modal-footer mt-4 d-flex justify-content-end gap-2">
              <button className="btn btn-light" onClick={closeModal}>{t("student.cancel")}</button>
              <button 
                className="btn text-white" 
                style={{ backgroundColor: '#0b5fff' }} 
                onClick={handleSaveCV}
                disabled={!selectedFile}
              >
                {t("student.uploadBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SidebarStudent;