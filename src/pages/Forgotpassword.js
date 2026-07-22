import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';
import { BsPersonLock } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"; 
import { useTranslation } from 'react-i18next';
import './Forgotpassword.css';

function Forgotpassword() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email to reset:", email);
    };

    return (
        <>
            <Navbar />
            <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100">
                <div className="card login-card shadow-lg border-0 position-relative overflow-hidden">
                    <div className="card-body p-4 p-sm-5">
                        <div className="text-center mb-4">
                            <div className='icon-circle mx-auto d-flex justify-content-center align-items-center'>
                                <BsPersonLock className="fs-3 text-primary" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="text-center mb-4">
                                <h2 className="fw-bold mb-2">{t("forgotPassword.title")}</h2>
                                <p className="text-muted px-2">{t("forgotPassword.subtitle")}</p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="InputEmail" className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">
                                    {t("forgotPassword.emailLabel")}
                                </label>
                                <div className="input-with-icon position-relative">
                                    <span className="search-icon position-absolute text-muted"><MdOutlineMail /></span>
                                    <input 
                                        type="email" 
                                        value={email} 
                                        className="form-control custom-input" 
                                        id="InputEmail" 
                                        placeholder={t("forgotPassword.emailPlaceholder")} 
                                        required 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary filled-btn w-100 fw-bold d-flex justify-content-center align-items-center gap-2 mb-4 py-3">
                                {t("forgotPassword.resetBtn")} <FaArrowRight />
                            </button>
                            <div className="d-flex justify-content-center mt-2">
                                <Link to="/login" className="back-link d-flex align-items-center gap-2 fw-bold text-muted text-decoration-none">
                                    <FaArrowLeft className="back-arrow" /> {t("forgotPassword.backToLogin")}
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Forgotpassword;