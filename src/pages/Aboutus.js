import React from 'react';
import HomeNavbar from './../component/HomeNavbar';
import './Aboutus.css';
import { LuGraduationCap } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import Logo from '../logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Aboutus() {
    const { t } = useTranslation();

    return (
        <>
            <HomeNavbar />
            <main className='Aboutus-page'>
                <section className='mission-sec-full '>
                    <div className='container'>
                        <div className='row align-items-center g-5'>
                            <div className='col-lg-7 text-part'>
                                <div className="arch-badge">
                                    <span className="dot"></span> {t("aboutUs.missionBadge")}
                                </div>
                                <h1 className='display-5 hero-title-about mb-4'>
                                    {t("aboutUs.missionTitle1")}<span className='gradient-text'>{t("aboutUs.missionTitle2")}</span>
                                </h1>
                                <p className="hero-desc-about mb-5">
                                    {t("aboutUs.missionDesc")}
                                </p>
                                <div className='statcards d-flex flex-wrap gap-3'>
                                    <div className='stat-card d-flex align-items-center gap-3'>
                                        <LuGraduationCap className="stat-icon" />
                                        <div>
                                            <div className="stat-num">50,000+</div>
                                            <div className="stat-label">{t("aboutUs.studentsImpacted")}</div>
                                        </div>
                                    </div>
                                    <div className='stat-card d-flex align-items-center gap-3'>
                                        <BsBuildings className="stat-icon" />
                                        <div>
                                            <div className="stat-num">1,200+</div>
                                            <div className="stat-label">{t("aboutUs.partnerCompanies")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 position-relative'>
                                <div className="about-img-placeholder shadow-lg">
                                    <img src={Logo} alt='' />
                                </div>
                                <div className='pic-quote shadow-lg'>
                                    <p className="mb-2">{t("aboutUs.quote")}</p>
                                    <span className="quote-author">InternConnect</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='vision-sec-full py-5'>
                    <div className='container'>
                        <div className="text-center mb-5">
                            <h2 className="section-title-about">{t("aboutUs.visionTitle")}</h2>
                            <div className="divider mx-auto"></div>
                        </div>
                        <div className='row g-4'>
                            <div className='col-md-8'>
                                <div className='vision-card h-100'>
                                    <BiWorld className="vision-icon mb-3" />
                                    <h3>{t("aboutUs.vision1Title")}</h3>
                                    <p>{t("aboutUs.vision1Desc")}</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='vision-card h-100 bento-highlight text-white'>
                                    <GiSkills className="vision-icon text-white mb-3" />
                                    <h3>{t("aboutUs.vision2Title")}</h3>
                                    <p>{t("aboutUs.vision2Desc")}</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='vision-card h-100'>
                                    <FaPeopleGroup className="vision-icon mb-3" />
                                    <h3>{t("aboutUs.vision3Title")}</h3>
                                    <p>{t("aboutUs.vision3Desc")}</p>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className='vision-card h-100'>
                                    <FaHandshakeSimple className="vision-icon mb-3" />
                                    <h3>{t("aboutUs.vision4Title")}</h3>
                                    <p>{t("aboutUs.vision4Desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='process-sec-full py-5'>
                    <div className='container'>
                        <div className="row g-5">
                            <div className='col-lg-4 normal-column d-flex flex-column justify-content-center'>
                                <h2 className="section-title-about text-start mb-4">{t("aboutUs.processTitle")}</h2>
                                <p className="process-side-desc mb-4">{t("aboutUs.processSideDesc")}</p>
                                <div>
                                    <Link to={'/signup'} className="btn btn-primary filled-btn d-inline-flex align-items-center btn-process gap-2">
                                        {t("aboutUs.processBtn")} <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                <div className='steps-list d-flex flex-column gap-4'>
                                    <div className='step-item d-flex gap-4'>
                                        <div className="step-num">01</div>
                                        <div>
                                            <h4 className="fw-bold">{t("aboutUs.step1Title")}</h4>
                                            <p className="step-desc">{t("aboutUs.step1Desc")}</p>
                                        </div>
                                    </div>
                                    <div className='step-item d-flex gap-4'>
                                        <div className="step-num">02</div>
                                        <div>
                                            <h4 className="fw-bold">{t("aboutUs.step2Title")}</h4>
                                            <p className="step-desc">{t("aboutUs.step2Desc")}</p>
                                        </div>
                                    </div>
                                    <div className='step-item d-flex gap-4'>
                                        <div className="step-num">03</div>
                                        <div>
                                            <h4 className="fw-bold">{t("aboutUs.step3Title")}</h4>
                                            <p className="step-desc">{t("aboutUs.step3Desc")}</p>
                                        </div>
                                    </div>
                                    <div className='step-item d-flex gap-4'>
                                        <div className="step-num">04</div>
                                        <div>
                                            <h4 className="fw-bold">{t("aboutUs.step4Title")}</h4>
                                            <p className="step-desc">{t("aboutUs.step4Desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='trust-sec-full py-5 position-relative overflow-hidden'>
                    <div className="trust-circles-bg">
                        <svg className="w-100 h-100" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="10 10" strokeWidth="2"></circle>
                            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1"></circle>
                            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5"></circle>
                        </svg>
                    </div>
                    <div className='container position-relative z-2'>
                        <div className="row g-5 align-items-center">
                            <div className='col-lg-6'>
                                <h2 className="section-title-about text-start text-white mb-5">{t("aboutUs.trustTitle1")}<br/>{t("aboutUs.trustTitle2")}</h2>
                                <div className='trust-features d-flex flex-column gap-4'>
                                    <div className='trust-process d-flex gap-3'>
                                        <MdVerified className="trust-icon" />
                                        <div>
                                            <h5 className="fw-bold text-white">{t("aboutUs.trust1Title")}</h5>
                                            <p className="trust-desc">{t("aboutUs.trust1Desc")}</p>
                                        </div>
                                    </div>
                                    <div className='trust-process d-flex gap-3'>
                                        <IoBookOutline className="trust-icon" />
                                        <div>
                                            <h5 className="fw-bold text-white">{t("aboutUs.trust2Title")}</h5>
                                            <p className="trust-desc">{t("aboutUs.trust2Desc")}</p>
                                        </div>
                                    </div>
                                    <div className='trust-process d-flex gap-3'>
                                        <HiMiniArrowTrendingUp className="trust-icon" />
                                        <div>
                                            <h5 className="fw-bold text-white">{t("aboutUs.trust3Title")}</h5>
                                            <p className="trust-desc">{t("aboutUs.trust3Desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="about-img-placeholder shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cta-sec-full py-5 text-center'>
                    <div className="container">
                        <div className="cta-box-about mx-auto p-5 rounded-5 border">
                            <h2 className="section-title-about mb-3">{t("aboutUs.ctaTitle")}</h2>
                            <p className="process-side-desc mb-5 mx-auto" style={{maxWidth: '600px'}}>
                                {t("aboutUs.ctaDesc")}
                            </p>
                            <div className='d-flex justify-content-center gap-3 flex-wrap'>
                                <Link to={"/signup"} className='btn btn-primary filled-btn'>{t("aboutUs.createProfile")}</Link>
                                <Link to={'/contact'} className='btn outline-btn'>{t("aboutUs.contactUs")}</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Aboutus;