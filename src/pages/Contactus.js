import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaChevronDown } from "react-icons/fa6"; 
import { BsSend } from "react-icons/bs";
import './Contactus.css'; 
import HomeNavbar from "../component/HomeNavbar";
import { useTranslation } from "react-i18next";

function Contactus() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: t("contactUs.faq1Q"),
            answer: t("contactUs.faq1A")
        },
        {
            question: t("contactUs.faq2Q"),
            answer: t("contactUs.faq2A")
        },
        {
            question: t("contactUs.faq3Q"),
            answer: t("contactUs.faq3A")
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="contact-page">
            <HomeNavbar />
            
            <div className="container py-5 mt-5">
                <div className="first-sec text-start mb-5">
                    <div className="arch-badge mx-auto">
                        <span className="dot"></span> {t("contactUs.supportBadge")}
                    </div>
                    <h1 className="hero-title">
                        {t("contactUs.heroTitle1")}<br />
                        <span className="gradient-text">{t("contactUs.heroTitle2")}</span>
                    </h1>
                    <p className="hero-desc">
                        {t("contactUs.heroDesc")}
                    </p>
                </div>

                <div className="row mt-5 g-5 pb-5 align-items-start border-bottom">
                    
                    <div className="col-12 col-lg-5">
                        <div className="contact-info-wrapper d-flex flex-column gap-4">
                            
                            <div className="contact-card d-flex align-items-center p-4 rounded-4 shadow-sm bg-white">
                                <div className="icon-box d-flex justify-content-center align-items-center rounded-circle me-4">
                                    <IoMail className="fs-3 text-primary" />
                                </div>
                                <div className="contacts-text">
                                    <h6 className="text-muted fw-bold mb-1" >{t("contactUs.emailUs")}</h6>
                                    <a href="mailto:support@internconnect.eg" className="mb-0 text-muted fw-black">support@internconnect.eg</a>
                                </div>
                            </div>
                            
                            <div className="contact-card d-flex align-items-center p-4 rounded-4 shadow-sm bg-white">
                                <div className="icon-box d-flex justify-content-center align-items-center rounded-circle me-4">
                                    <FaPhone className="fs-4 text-primary" />
                                </div>
                                <div className="contacts-text">
                                    <h6 className="text-muted fw-bold mb-1">{t("contactUs.callUs")}</h6>
                                    <a href="tel:+201234567890" className="mb-0 text-muted fw-black">+20 (0) 123 456 7890</a>
                                    <p className="text-muted small mb-0 mt-2">{t("contactUs.workingHours")}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="form-wrapper bg-white p-4 p-lg-5 rounded-4 shadow-sm border">
                            <h3 className="fw-black mb-4">{t("contactUs.sendMessage")}</h3>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">{t("contactUs.fullName")}</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control custom-input" placeholder={t("contactUs.namePlaceholder")} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">{t("contactUs.emailLabel")}</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control custom-input" placeholder={t("contactUs.emailPlaceholder")} required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-bold">{t("contactUs.subject")}</label>
                                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control custom-input" placeholder={t("contactUs.subjectPlaceholder")} required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-bold">{t("contactUs.message")}</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} className="form-control custom-input" rows="5" placeholder={t("contactUs.messagePlaceholder")} required></textarea>
                                    </div>
                                    <div className="col-12 mt-4 d-flex justify-content-between align-items-center">
                                        <p className="text-muted small mb-0 d-none d-md-block">{t("contactUs.responseTime")}</p>
                                        <button type="submit" className="btn btn-primary filled-btn py-3 px-4 rounded-3 fw-bold d-flex align-items-center gap-2">
                                            {t("contactUs.sendBtn")} <BsSend className="fs-5" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>

                <section className="faq-section mt-5 pt-4 pb-5 mx-auto">
                    <div className="text-center mb-5">
                        <h2 className="fw-black display-6">{t("contactUs.faqTitle")}</h2>
                        <p className="text-muted">{t("contactUs.faqSubtitle")}</p>
                    </div>
                    
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question p-4 d-flex justify-content-between align-items-center">
                                    <h6 className="fw-bold mb-0">{faq.question}</h6>
                                    <span className="faq-icon text-muted">
                                        <FaChevronDown />
                                    </span>
                                </div>
                                
                                {openFaq === index && (
                                    <div className="faq-answer px-4 pb-4 text-muted">
                                        <p className="mb-0 lh-lg">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Contactus;