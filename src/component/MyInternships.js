import React, { useState } from 'react';
import Internshipcard from './Internshipcard'; 
import './MyInternships.css'; 
import { useTranslation } from 'react-i18next';

function MyInternships() {
    const { t } = useTranslation();

    const [companyPostings, setCompanyPostings] = useState([
        { id: 1, title: "Frontend Engineering Intern", company: "TechCorp", location: "Remote", skills: ["React", "JavaScript", "CSS"], salary: "Paid", verified: true, isNew: true },
        { id: 2, title: "Backend Developer Intern", company: "TechCorp", location: "Alexandria, EG", skills: ["Node.js", "MongoDB", "API"], salary: "Free", verified: true, isNew: false },
        { id: 3, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 4, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 5, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 6, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 7, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 8, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 9, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 10, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 11, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false },
        { id: 12, title: "UI/UX Designer", company: "TechCorp", location: "Cairo, EG", skills: ["Figma", "Wireframing", "Prototyping"], salary: "Paid", verified: true, isNew: false }
    ]);

    const [editingJob, setEditingJob] = useState(null);

    const handleEditClick = (job) => {
        setEditingJob({ ...job, skillsString: job.skills.join(', ') });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingJob(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        const updatedSkills = editingJob.skillsString.split(',').map(s => s.trim());
        const updatedJob = { ...editingJob, skills: updatedSkills };
        delete updatedJob.skillsString;

        setCompanyPostings(companyPostings.map(job => 
            job.id === updatedJob.id ? updatedJob : job
        ));
        setEditingJob(null);
    };

    return (
        <div className="my-internships-section position-relative">
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h2 className="fw-bold mb-2 text-dark">{t("myInternships.title")}</h2>
                    <p className="text-muted mb-0">
                        {t("myInternships.subtitle")}
                    </p>
                </div>
            </div>
            
            <div className="row g-4">
                {companyPostings.map((job) => (
                    <div className="col-12 col-md-6 col-xl-4" key={job.id}>
                        <Internshipcard 
                            internship={job} 
                            actionText="Edit" 
                            onActionClick={() => handleEditClick(job)}
                        />
                    </div>
                ))}
            </div>

            {editingJob && (
                <div className="edit-modal-overlay" onClick={() => setEditingJob(null)}>
                    <div className="edit-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 className="mb-4 fw-bold">Edit Internship</h3>
                        <form onSubmit={handleSave}>
                            <div className="mb-3">
                                <label className="form-label text-muted fw-bold" style={{fontSize: '12px'}}>JOB TITLE</label>
                                <input type="text" className="form-control" name="title" value={editingJob.title} onChange={handleChange} required />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label text-muted fw-bold" style={{fontSize: '12px'}}>LOCATION</label>
                                    <input type="text" className="form-control" name="location" value={editingJob.location} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-muted fw-bold" style={{fontSize: '12px'}}>SALARY TYPE</label>
                                    <select className="form-select" name="salary" value={editingJob.salary} onChange={handleChange}>
                                        <option value="Paid">Paid</option>
                                        <option value="Free">Unpaid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label text-muted fw-bold" style={{fontSize: '12px'}}>SKILLS (Comma separated)</label>
                                <input type="text" className="form-control" name="skillsString" value={editingJob.skillsString} onChange={handleChange} required />
                            </div>
                            <div className="d-flex justify-content-end gap-2">
                                <button type="button" className="btn btn-light" onClick={() => setEditingJob(null)}>Cancel</button>
                                <button type="submit" className="btn text-white" style={{backgroundColor: '#0b5fff'}}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyInternships;