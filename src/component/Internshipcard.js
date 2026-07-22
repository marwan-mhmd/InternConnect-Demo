import { useState } from 'react';
import './Internshipcard.css';
import { MdVerified } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Internshipcard({ internship, actionText, onActionClick }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation();

    const finalActionText = actionText || t("internshipCard.details");

    const handleButtonClick = () => {
        if (onActionClick) {
            onActionClick();
        } else {
            setIsModalOpen(true);
        }
    };
    
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="internship-card h-100">
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <div className="company-logo d-flex align-items-center justify-content-center">
                        <span className="fs-3 fw-bold text-white">{internship.company.charAt(0)}</span>
                    </div>
                    <div className="card-badges">
                        {internship.verified && (
                            <span className="verified-icon text-primary fs-5">
                                <MdVerified />
                            </span>
                        )}
                        {internship.isNew && <span className="new-badge">{t("internshipCard.new")}</span>}
                    </div>
                </div>

                <div className="card-body-text mb-4">
                    <h3 className="job-title">{internship.title}</h3>
                    <p className="company-info">{internship.company} • {internship.location}</p>
                </div>

                <div className="skills-container d-flex flex-wrap gap-2 mb-4">
                    {internship.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>

                <div className="card-footer-info d-flex justify-content-between align-items-center mt-auto">
                    <div className="salary-info">
                        <span className="salary-amount text-dark fw-bold fs-5">
                            {internship.salary === 'Free' ? t("internshipCard.unpaid") : internship.salary}
                        </span>
                        {internship.salary !== 'Free' && (
                            <span className="salary-period text-muted fs-6 fw-normal ms-1">{t("internshipCard.perMonth")}</span>
                        )}
                    </div>
                    <button className="details-btn" onClick={handleButtonClick}>
                        {finalActionText}
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="custom-modal-overlay" onClick={closeModal}>
                    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold mb-0">{internship.title}</h2>
                            <button className="close-modal-btn" onClick={closeModal}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="modal-body mb-4">
                            <h5 className="fw-bold text-primary mb-2">{internship.company}</h5>
                            <p className="text-muted mb-4"><MdVerified className="me-1"/> {internship.location} • {t("internshipCard.fullTime")}</p>
                            
                            <h6 className="fw-bold mb-2">{t("internshipCard.aboutRole")}</h6>
                            <p className="text-muted fs-6">
                                {t("internshipCard.roleDesc")}
                            </p>

                            <h6 className="fw-bold mt-4 mb-2">{t("internshipCard.requirements")}</h6>
                            <ul className="text-muted fs-6">
                                <li>{t("internshipCard.req1")}</li>
                                <li>{t("internshipCard.req2")}</li>
                                <li>{t("internshipCard.req3")} {internship.skills.join(', ')}.</li>
                            </ul>
                        </div>
                        <div className="modal-footer d-flex justify-content-between align-items-center border-top pt-4">
                            <div className="salary-info">
                                <span className="fs-5 fw-bold">{internship.salary === 'Free' ? t("internshipCard.unpaid") : internship.salary}</span>
                            </div>
                            <button className="btn btn-primary px-4 py-2 fw-bold rounded-pill shadow-sm">
                                {t("internshipCard.applyNow")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Internshipcard;