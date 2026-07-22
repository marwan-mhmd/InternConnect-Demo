import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Internshipcard from "./Internshipcard";
import './Internshipslist.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Internshipslist() {
    const { t } = useTranslation();

    const [internships, setInternships] = useState([
        {
            id: 1,
            title: "UX/UI Design Fellow",
            company: "Lumina Design Studio",
            location: "Remote",
            skills: ["Product Design", "Figma", "Prototyping"],
            salary: "Free", 
            verified: true,
            isNew: false
        },
        {
            id: 2,
            title: "Quantitative Analyst",
            company: "Vertex Capital",
            location: "Alexandria, EG",
            skills: ["Python", "Data Science", "Finance"],
            salary: "Paid",
            verified: false,
            isNew: true
        },
        {
            id: 3,
            title: "AI Research Intern",
            company: "NeuralNet Labs",
            location: "Cairo, EG",
            skills: ["Machine Learning", "PyTorch", "NLP"],
            salary: "Free",
            verified: true,
            isNew: false
        }
    ]);

    return (
        <section className="internships-list">
            <div className="container">
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div className="sec-text">
                        <h2 className="fw-bold mb-2">{t("internshipsList.title")}</h2>
                        <p className="text-muted mb-0">
                            {t("internshipsList.desc")}
                        </p>
                    </div>
                    <div className="view-all d-none d-md-block"> 
                        <Link to={"/allopportunities"} className="text-decoration-none fw-bold d-flex align-items-center gap-2" style={{color: 'var(--primary-color)'}}>
                            {t("internshipsList.viewAll")} <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className="row g-4">
                    {internships.map((internship) => (
                        <div className="col-12 col-md-6 col-lg-4" key={internship.id}>
                            <Internshipcard internship={internship} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Internshipslist;