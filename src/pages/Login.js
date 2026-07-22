import React, { useState } from 'react';
import './Login.css'; 
import Navbar from '../component/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // 1. Added loading state for realistic UX
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start fake loading

        // Simulate API call delay (1 second)
        setTimeout(() => {
            let role = "student"; // Default role for any random recruiter email
            let mockToken = "demo_mode_token_123456"; 

            // Check if they specifically want to test company or admin dashboards
            if (email.includes("company")) {
                role = "company";
            } else if (email.includes("admin")) {
                role = "admin";
            }

            // Set fake auth data
            localStorage.setItem('token', mockToken);
            localStorage.setItem('userRole', role);
            localStorage.setItem('isDemoMode', 'true'); // Helpful flag for your protected routes

            setIsLoading(false);
            navigate(`/${role}`); 
        }, 1000);
    };

    return (
        <>
        <Navbar page="login"/>
        <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100">
            <div className="card login-card shadow-lg border-0">
                <div className="card-body p-4 p-sm-5">
                    <form onSubmit={handleLogin}>
                        <div className="text-center text-sm-start mb-4">
                            <h2 className="fw-bold mb-2">{t("login.welcome")}</h2>
                            <p className="text-muted">{t("login.subtitle")} <br/> 
                            <span className="badge bg-warning text-dark mt-2">Demo Mode Active</span>
                            </p>
                        </div>
                        {/* Demo Hint Alert */}
                        <div className="alert alert-info py-2 px-3 small mb-3 border-0 shadow-sm" style={{ backgroundColor: '#eef2ff', color: '#3b82f6', fontSize: '0.85rem' }}>
                            <strong>💡 Demo Tip:</strong> Include <b>"company"</b> or <b>"admin"</b> in your email to access those specific dashboards (e.g., hr@company.com). Otherwise, you will log in as a Student.
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">
                                {t("login.email")}
                            </label>
                            {/* Removed required to make it even easier for quick testing, but you can keep it */}
                            <input type="email" value={email} className="form-control custom-input" id="exampleInputEmail1" placeholder="Enter any email for demo" required onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label text-uppercase fw-bold text-start d-block ms-1 custom-label">
                                {t("login.password")}
                            </label>
                            <input type="password" value={password} className="form-control custom-input" id="exampleInputPassword1" placeholder="Any password works" required onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="form-check mb-0">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label text-muted small fw-bold" htmlFor="exampleCheck1">{t("login.rememberMe")}</label>
                            </div>
                            <Link to="/forgotpassword" className="text-primary small fw-bold text-decoration-none forgot-link">{t("login.forgotPassword")}</Link>
                        </div>
                        
                        {/* 2. Updated button to show loading state */}
                        <button type="submit" className="btn btn-primary w-100 fw-bold custom-btn-primary mb-4" disabled={isLoading}>
                            {isLoading ? (
                                <span><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Logging in...</span>
                            ) : (
                                t("login.signIn")
                            )}
                        </button>

                        <div className="position-relative mb-4 text-center">
                            <hr className="text-muted opacity-25" />
                            <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 small fw-bold text-uppercase divider-text">
                                {t("login.or")}
                            </span>
                        </div>
                        
                        <div className="d-flex justify-content-center mb-4">
                            <GoogleLogin size='large' width={350} logo_alignment='center'
                                onSuccess={credentialResponse => {
                                    // 3. Fake Google Login success
                                    setIsLoading(true);
                                    setTimeout(() => {
                                        localStorage.setItem('token', "demo_google_token");
                                        localStorage.setItem('userRole', 'student');
                                        setIsLoading(false);
                                        navigate('/student');
                                    }, 1000);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-muted small fw-bold">{t("login.noAccount")}</span>
                            <Link to={'/signup'} className="text-primary fw-bold text-decoration-none signup-link">{t("login.signUp")}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;