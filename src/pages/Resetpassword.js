import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsPersonLock } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

function Resetpassword() {
    const { token } = useParams();
    const { t } = useTranslation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [passwordError, setPasswordError] = useState('');
    const [matchError, setMatchError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/\\|`~]).{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError(t("resetPassword.regexError"));
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword || confirmPassword === '') {
            setMatchError(t("resetPassword.matchError"));
            isValid = false;
        } else {
            setMatchError('');
        }

        if (isValid) {
            console.log("Ready to update password:", password);
            console.log("Token to send:", token);
        }
    };

    return (
        <>
            <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-surface pb-5">
                <div className="card login-card shadow-lg border-0 position-relative overflow-hidden " >
                    <div className="card-body p-4 p-sm-5">
                        
                        <div className="text-center mb-4">
                            <div className='icon-circle mx-auto d-flex justify-content-center align-items-center'>
                                <BsPersonLock className="fs-3 text-primary" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="text-center mb-4">
                                <h2 className="fw-bold mb-2">{t("resetPassword.title")}</h2>
                                <p className="text-muted px-2">{t("resetPassword.subtitle")}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputNewpassword" className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">
                                    {t("resetPassword.newPasswordLabel")}
                                </label>
                                <div className="input-with-icon position-relative">
                                    <span className="search-icon position-absolute text-muted"><MdLockOutline /></span>
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={`form-control custom-input pe-5 ${passwordError ? 'is-invalid' : ''}`} 
                                        id="InputNewpassword" 
                                        placeholder={t("resetPassword.newPasswordPlaceholder")} 
                                        required 
                                    />
                                    <button 
                                        type="button" 
                                        className="btn position-absolute end-0 top-50 translate-middle-y border-0 text-muted"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {passwordError && <span className="text-danger small mt-1 d-block fw-semibold">{passwordError}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="InputConfnewpassword" className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">
                                    {t("resetPassword.confirmPasswordLabel")}
                                </label>
                                <div className="input-with-icon position-relative">
                                    <span className="search-icon position-absolute text-muted"><MdLockOutline /></span>
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={`form-control custom-input pe-5 ${matchError ? 'is-invalid' : ''}`} 
                                        id="InputConfnewpassword" 
                                        placeholder={t("resetPassword.confirmPasswordPlaceholder")} 
                                        required 
                                    />
                                    <button 
                                        type="button" 
                                        className="btn position-absolute end-0 top-50 translate-middle-y border-0 text-muted"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {matchError && <span className="text-danger small mt-1 d-block fw-semibold">{matchError}</span>}
                            </div>
                            <button type="submit" className="btn btn-primary filled-btn w-100 fw-bold d-flex justify-content-center align-items-center gap-2 mb-4 py-3">
                                {t("resetPassword.updateBtn")}
                            </button>
                            <div className="d-flex justify-content-center mt-2">
                                <Link to="/login" className="back-link d-flex align-items-center gap-2 fw-bold text-muted text-decoration-none">
                                    <FaArrowLeft className="back-arrow" /> {t("resetPassword.backToLogin")}
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resetpassword;