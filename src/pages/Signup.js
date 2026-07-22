import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaRegUser, FaShieldAlt } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google'; 
import { useTranslation } from 'react-i18next';

function SignUp() {
    const { t } = useTranslation();
    const [userType, setUserType] = useState('student'); 
    
    const [fullName, setFullName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [matchError, setMatchError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        let isValid = true;

        // Demo Mode: Disabled strict regex so recruiters can use simple passwords
        // const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/\\|`~]).{8,}$/;
        // if (!passwordRegex.test(password)) {
        //     setPasswordError(t("signup.passwordRegexError"));
        //     isValid = false;
        // } else {
        //     setPasswordError('');
        // }

        if (password !== confirmPassword || confirmPassword === '') {
            setMatchError(t("signup.passwordMatchError"));
            isValid = false;
        } else {
            setMatchError('');
        }

        if (isValid) {
            setIsLoading(true); // Start fake loading

            // Simulate API delay
            setTimeout(() => {
                localStorage.setItem('token', 'mock_normal_token_123');
                localStorage.setItem('userRole', userType);
                localStorage.setItem('isDemoMode', 'true');
                setIsLoading(false);
                navigate(`/${userType}`); 
            }, 1000);
        }
    };

    const handleGoogleSignUp = (credentialResponse) => {
        setIsLoading(true);
        setTimeout(() => {
            const selectedRole = userType; 
            localStorage.setItem('token', 'mock_google_token_456');
            localStorage.setItem('userRole', selectedRole);
            localStorage.setItem('isDemoMode', 'true');
            setIsLoading(false);
            navigate(`/${selectedRole}`);
        }, 1000);
    };

    return (
    <>
        <Navbar />
        <div className="login-wrapper d-flex flex-column align-items-center justify-content-center">
            <div className="card login-card shadow-lg border-0">
                <div className="card-body p-4 p-md-5">
                    <div className="text-center text-sm-start mb-4">
                        <h1 className="fw-bold h2 mb-2">{t("signup.title")}</h1>
                        <p className="text-muted">{t("signup.subtitle")} <br/>
                        <span className="badge bg-warning text-dark mt-2">Demo Mode Active</span>
                        </p>
                    </div>
                    
                    <form onSubmit={handleRegister}>
                        <div className="user-type-selector d-flex p-1 bg-light rounded-3 mb-4">
                            <button type="button" className={`btn w-50 fw-bold rounded-2 ${userType === 'student' ? 'bg-white shadow-sm text-primary' : 'text-muted'}`} onClick={() => setUserType('student')}>
                                {t("signup.studentTab")}
                            </button>
                            <button type="button" className={`btn w-50 fw-bold rounded-2 ${userType === 'company' ? 'bg-white shadow-sm text-primary' : 'text-muted'}`} onClick={() => setUserType('company')}>
                                {t("signup.companyTab")}
                            </button>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">{t("signup.fullName")}</label>
                            <div className="position-relative">
                                <input type="text" className="form-control custom-input" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                                <span className="input-icon"><FaRegUser /></span> 
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">{t("signup.email")}</label>
                            <input type="email" className="form-control custom-input" placeholder="name@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">{t("signup.password")}</label>
                            <input type="password" className="form-control custom-input" placeholder="Any simple password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            {passwordError && <span className="error-text text-danger small">{passwordError}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">{t("signup.confirmPassword")}</label>
                            <input type="password" className="form-control custom-input" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            {matchError && <span className="error-text text-danger small">{matchError}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100 fw-bold custom-btn-primary mb-4" disabled={isLoading}>
                            {isLoading ? (
                                <span><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Creating...</span>
                            ) : (
                                t("signup.createAccount")
                            )}
                        </button>
                        
                        <div className="position-relative mb-4 text-center">
                            <hr className="opacity-10" />
                            <span className="divider-text bg-white px-3 position-absolute top-50 start-50 translate-middle">
                                {t("signup.or")}
                            </span>
                        </div>

                        <div className="d-flex justify-content-center mb-4">
                            <GoogleLogin size='large' width={350} logo_alignment='center' text="signup_with" onSuccess={handleGoogleSignUp} onError={() => { console.log('Google Sign Up Failed'); }} />
                        </div>

                        <p className="text-center small mb-0">
                            {t("signup.haveAccount")} <Link to="/login" className="text-primary fw-bold text-decoration-none">{t("signup.signIn")}</Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className="security-note d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm mt-3">
                <span className="text-primary"><FaShieldAlt /></span>
                <span className="text-primary-emphasis fw-semibold" style={{ fontSize: '11px' }}>
                    {t("signup.securityNote")}
                </span>
            </div>
        </div>
    </>
    );
}

export default SignUp;