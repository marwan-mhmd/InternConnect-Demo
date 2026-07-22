import { useState } from "react";
import HomeNavbar from "../component/HomeNavbar";
import Internshipcard from "../component/Internshipcard";
import './AllOpportunities.css';
import { CiSearch } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AllOpportunities() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [internships] = useState([
        { id: 1, title: "Junior Product Strategist", company: "Lumina Systems", location: "Remote", skills: ["Design", "Analysis"], salary: "Free", verified: true },
        { id: 2, title: "Frontend Architecture Intern", company: "Nebula Cloud", location: "Alexandria, EG", skills: ["React", "Tailwind"], salary: "Free", verified: false },
        { id: 3, title: "Data Science Fellowship", company: "Quantum Analytics", location: "Cairo, EG", skills: ["Python", "AI/ML"], salary: "Free", verified: true },
        { id: 4, title: "Cybersecurity Intern", company: "Fortress Defense", location: "Remote", skills: ["Security", "Linux"], salary: "$500", verified: true },
        { id: 5, title: "UX Research Associate", company: "Insight Labs", location: "Alexandria, EG", skills: ["Research", "Psychology"], salary: "Free", verified: false },
        { id: 6, title: "Financial Systems Intern", company: "Apex Wealth", location: "Dubai, UAE", skills: ["SQL", "Finance"], salary: "$450", verified: false },
        { id: 7, title: "Backend Developer", company: "CloudFlow", location: "Remote", skills: ["Node.js", "PostgreSQL"], salary: "$4,000", verified: true },
        { id: 8, title: "UI/UX Designer", company: "Creative Minds", location: "Alexandria, EG", skills: ["Figma", "UI/UX"], salary: "$3,500", verified: false },
        { id: 9, title: "Machine Learning Engineer", company: "AI Core", location: "Remote", skills: ["Python", "TensorFlow"], salary: "$6,000", verified: true },
        { id: 10, title: "Full Stack Intern", company: "Tech Hub", location: "Cairo, EG", skills: ["React", "Node.js"], salary: "Free", verified: true },
        { id: 11, title: "Data Analyst", company: "DataSync", location: "Alexandria, EG", skills: ["Excel", "SQL"], salary: "$3,200", verified: false },
        { id: 12, title: "DevOps Intern", company: "ServerPro", location: "Remote", skills: ["Docker", "AWS"], salary: "$4,500", verified: false },
        { id: 1, title: "Junior Product Strategist", company: "Lumina Systems", location: "Remote", skills: ["Design", "Analysis"], salary: "$4,200", verified: true },
        { id: 2, title: "Frontend Architecture Intern", company: "Nebula Cloud", location: "Alexandria, EG", skills: ["React", "Tailwind"], salary: "$5,500", verified: false },
        { id: 3, title: "Data Science Fellowship", company: "Quantum Analytics", location: "Cairo, EG", skills: ["Python", "AI/ML"], salary: "$4,800", verified: true },
        { id: 4, title: "Cybersecurity Intern", company: "Fortress Defense", location: "Remote", skills: ["Security", "Linux"], salary: "$5,000", verified: true },
        { id: 5, title: "UX Research Associate", company: "Insight Labs", location: "Alexandria, EG", skills: ["Research", "Psychology"], salary: "Free", verified: false },
        { id: 6, title: "Financial Systems Intern", company: "Apex Wealth", location: "Dubai, UAE", skills: ["SQL", "Finance"], salary: "$4,500", verified: false },
        { id: 7, title: "Backend Developer", company: "CloudFlow", location: "Remote", skills: ["Node.js", "PostgreSQL"], salary: "$4,000", verified: true },
        { id: 8, title: "UI/UX Designer", company: "Creative Minds", location: "Alexandria, EG", skills: ["Figma", "UI/UX"], salary: "$3,500", verified: false },
        { id: 9, title: "Machine Learning Engineer", company: "AI Core", location: "Remote", skills: ["Python", "TensorFlow"], salary: "$6,000", verified: true },
        { id: 10, title: "Full Stack Intern", company: "Tech Hub", location: "Cairo, EG", skills: ["React", "Node.js"], salary: "Free", verified: true },
        { id: 11, title: "Data Analyst", company: "DataSync", location: "Alexandria, EG", skills: ["Excel", "SQL"], salary: "$3,200", verified: false },
        { id: 12, title: "DevOps Intern", company: "ServerPro", location: "Remote", skills: ["Docker", "AWS"], salary: "$4,500", verified: false },
    
    ]);

    const [filters, setFilters] = useState({
        keyword: "",
        location: "All",
        duration: "All"
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
        setCurrentPage(1); 
    };

    const handleAiRecommendation = () => {
        const isUserLoggedIn = false; 
        if (!isUserLoggedIn) {
            navigate('/login');
        } else {
            console.log("Running AI Match Engine...");
        }
    };

    const filteredInternships = internships.filter((intern) => {
        const keywordMatch = filters.keyword === "" || 
                            intern.title.toLowerCase().includes(filters.keyword.toLowerCase()) || 
                            intern.skills.some(skill => skill.toLowerCase().includes(filters.keyword.toLowerCase()));
        
        const locationMatch = filters.location === "All" || intern.location.includes(filters.location.split(',')[0]);

        return keywordMatch && locationMatch;
    });

    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    const currentInternships = filteredInternships.slice(indexOfFirstItem, indexOfLastItem); 

    const totalPages = Math.ceil(filteredInternships.length / itemsPerPage);
    
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="all-opportunities-page">
            <HomeNavbar />
            <main className="container main-content">
                <div className="page-header d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">
                    <div className="title">
                        <h1 className="gradient-text display-5">{t("allOpportunities.title")}</h1>
                        <p className="text-muted mb-0">{t("allOpportunities.subtitle1")}{filteredInternships.length}{t("allOpportunities.subtitle2")}</p>
                    </div>
                    <div className="available-count d-none d-md-block">
                        <span className="badge-custom">
                            <strong className="text-primary">{filteredInternships.length}</strong> {t("allOpportunities.opportunitiesFound")}
                        </span>
                    </div>
                </div>
                <section className="row g-3 mb-5 align-items-stretch">
                    <div className="col-12 col-lg-5">
                        <div className="filter-card h-100">
                            <label>{t("allOpportunities.searchLabel")}</label>
                            <div className="input-with-icon position-relative">
                                <span className="search-icon position-absolute"><CiSearch /></span>
                                <input 
                                    type="text" 
                                    name="keyword"
                                    value={filters.keyword}
                                    onChange={handleChange}
                                    className="form-control border-0 w-100" 
                                    placeholder={t("allOpportunities.searchPlaceholder")} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="filter-card h-100">
                            <label>{t("allOpportunities.locationLabel")}</label>
                            <select name="location" value={filters.location} onChange={handleChange} className="form-select border-0 w-100">
                                <option value="All">{t("allOpportunities.allLocations")}</option>
                                <option value="Global (Remote)">{t("allOpportunities.globalRemote")}</option>
                                <option value="Alexandria, EG">{t("allOpportunities.alexandria")}</option>
                                <option value="Cairo, EG">{t("allOpportunities.cairo")}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="filter-card h-100">
                            <label>{t("allOpportunities.durationLabel")}</label>
                            <select name="duration" value={filters.duration} onChange={handleChange} className="form-select border-0 w-100">
                                <option value="All">{t("allOpportunities.allDurations")}</option>
                                <option value="1-3 Months">{t("allOpportunities.duration1")}</option>
                                <option value="3-6 Months">{t("allOpportunities.duration2")}</option>
                                <option value="6+ Months">{t("allOpportunities.duration3")}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12  col-md-4 col-lg-2">
                        <button 
                            className="btn btn-primary filled-btn w-100 h-100 rounded-4 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm" 
                            onClick={handleAiRecommendation}
                            style={{ minHeight: "65px" }} 
                        >
                            <BsStars className="fs-5" /> {t("allOpportunities.aiMatch")}
                        </button>
                    </div>
                </section>
                <div className="row g-4">
                    {currentInternships.length > 0 ? (
                        currentInternships.map((internship) => (
                            <div className="col-12 col-md-6 col-lg-4" key={internship.id}>
                                <Internshipcard internship={internship}/>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h4 className="text-muted">{t("allOpportunities.noInternships")}</h4>
                        </div>
                    )}
                </div>
                {totalPages > 1 && (
                    <div className="pagination-container d-flex justify-content-center mt-5">
                        <nav>
                            <ul className="pagination gap-2">
                                {pageNumbers.map(number => (
                                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                        <button 
                                            onClick={() => paginate(number)} 
                                            className="page-link rounded-pill shadow-sm">
                                            {number}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </main>
        </div>
    );
}

export default AllOpportunities;