import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarCompany.css";
import { useTranslation } from "react-i18next";
import {
  MdOutlinePeople,
  MdOutlineWorkOutline,
  MdOutlineMail,
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineLogout,
  MdCloudUpload,
  MdClose,
  MdDomainVerification
} from "react-icons/md";

function SidebarCompany({ onOpenModal, activeView, setActiveView, isOpen, closeMenu }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [isVerified, setIsVerified] = useState(true); 
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handlePostClick = () => {
    if (!isVerified) {
      alert(t("companyDocs.unverifiedError"));
    } else {
      onOpenModal();
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    validateFile(e.dataTransfer.files[0]);
  };

  const validateFile = (file) => {
    if (!file) return;
    
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (validTypes.includes(file.type)) {
      setSelectedFile(file);
      setError("");
    } else {
      setSelectedFile(null);
      setError(t("companyDocs.invalidFile"));
    }
  };

  const handleSaveDocs = () => {
    if (selectedFile) {
      alert(t("companyDocs.submittedSuccess"));
      setIsDocsModalOpen(false);
      setSelectedFile(null);
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-mobile-overlay" onClick={closeMenu}></div>}

      <aside className={`sidebar-container ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{t("sidebar.dashboard")}</h2>
          <div style={{ marginTop: '0.5rem' }}>
            {isVerified ? (
              <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: '800', backgroundColor: '#ecfdf5', padding: '0.2rem 0.5rem', borderRadius: '50px' }}>
                • Verified
              </span>
            ) : (
              <span style={{ fontSize: '0.7rem', color: '#ef4444', fontWeight: '800', backgroundColor: '#fef2f2', padding: '0.2rem 0.5rem', borderRadius: '50px' }}>
                • Unverified
              </span>
            )}
          </div>
        </div>

        <nav className="sidebar-nav mt-2">
          <a href="#" className={`sidebar-link ${activeView === "overview" ? "active-link" : ""}`} onClick={(e) => { e.preventDefault(); setActiveView("overview"); }}>
            <MdOutlinePeople size={22} /> {t("sidebar.applicants")}
          </a>
          <a href="#" className={`sidebar-link ${activeView === "internships" ? "active-link" : ""}`} onClick={(e) => { e.preventDefault(); setActiveView("internships"); }}>
            <MdOutlineWorkOutline size={22} /> {t("sidebar.internships")}
          </a>
          <a href="#" className={`sidebar-link ${activeView === "messages" ? "active-link" : ""}`} onClick={(e) => { e.preventDefault(); setActiveView("messages"); }}>
            <MdOutlineMail size={22} /> {t("sidebar.messages")}
          </a>
          <a href="#" className={`sidebar-link ${activeView === "settings" ? "active-link" : ""}`} onClick={(e) => { e.preventDefault(); setActiveView("settings"); }}>
            <MdOutlineSettings size={22} /> {t("sidebar.settings")}
          </a>
        </nav>

        <div className="sidebar-btn-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button className="post-job-btn" onClick={handlePostClick}>
            {t("sidebar.post_internship")}
          </button>
          
          {!isVerified && (
            <button className="custom-btn-primary" onClick={() => setIsDocsModalOpen(true)}>
              {t("sidebar.upload_docs")}
            </button>
          )}
        </div>

        <div className="sidebar-footer">
          <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigate('/aboutus'); }}>
            <MdOutlineHelpOutline size={20} /> {t("sidebar.help")}
          </a>
          <a href="#" className="footer-link" onClick={handleLogout}>
            <MdOutlineLogout size={20} /> {t("sidebar.signout")}
          </a>
        </div>
      </aside>

      {isDocsModalOpen && (
        <div className="upload-modal-overlay" onClick={() => setIsDocsModalOpen(false)}>
          <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="upload-modal-header">
              <h3 className="fw-bold m-0 text-dark d-flex align-items-center gap-2">
                <MdDomainVerification color="#0b5fff" /> {t("companyDocs.legalDocs")}
              </h3>
              <button className="close-modal-btn" onClick={() => setIsDocsModalOpen(false)}><MdClose size={24} /></button>
            </div>
            
            <div className="upload-modal-body mt-3">
              <div 
                className={`drag-drop-zone ${isDragging ? 'dragging' : ''} ${error ? 'error-border' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <MdCloudUpload size={48} className="upload-icon mb-3" />
                {selectedFile ? (
                  <div className="text-primary fw-bold">{selectedFile.name}</div>
                ) : (
                  <p className="fw-bold mb-1">{t("companyDocs.dragDropDocs")}</p>
                )}
                <input type="file" accept=".pdf,.doc,.docx" ref={fileInputRef} onChange={(e) => validateFile(e.target.files[0])} style={{ display: 'none' }} />
              </div>
              {error && <div className="text-danger mt-2 fw-bold text-center">{error}</div>}
            </div>

            <div className="upload-modal-footer mt-4 d-flex justify-content-end gap-2">
              <button className="btn btn-light" onClick={() => setIsDocsModalOpen(false)}>{t("companyDocs.cancel")}</button>
              <button className="btn text-white" style={{ backgroundColor: '#0b5fff' }} disabled={!selectedFile} onClick={handleSaveDocs}>{t("companyDocs.submit")}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SidebarCompany;