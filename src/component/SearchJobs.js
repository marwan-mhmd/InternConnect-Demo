import React, { useState } from "react";
import "./SearchJobs.css";
import { CiSearch } from "react-icons/ci"; 
import { BsStars } from "react-icons/bs"; 
import Internshipcard from "./Internshipcard"; 

const allJobs = [
  {
    id: 1,
    title: "Backend Developer (Node.js/Express)",
    company: "DataFlow Systems",
    location: "Alexandria, EG",
    duration: "3 Months",
    salary: "Paid",
    skills: ["Node.js", "PostgreSQL", "API"], 
    verified: true,
    isNew: true
  },
  {
    id: 2,
    title: "Cybersecurity Trainee",
    company: "SecureNet",
    location: "Remote",
    duration: "6 Months",
    salary: "Free", 
    skills: ["Nmap", "Burp Suite", "Kali Linux"],
    verified: false,
    isNew: false
  },
  {
    id: 3,
    title: "React Developer Intern",
    company: "InnoWeb",
    location: "Cairo, EG",
    duration: "Summer",
    salary: "Paid",
    skills: ["React", "CSS", "Redux"],
    verified: true,
    isNew: true
  },
];

function SearchJobs() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "All Locations",
    duration: "All Durations"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleAiRecommendation = () => {
    console.log("Running AI Match Engine...");
    alert("AI Match Engine feature is coming soon!");
  };

  const filteredJobs = allJobs.filter((job) => {
    const keywordMatch = filters.keyword === "" || 
                         job.title.toLowerCase().includes(filters.keyword.toLowerCase()) || 
                         job.skills.some(skill => skill.toLowerCase().includes(filters.keyword.toLowerCase()));
    
    const locationMatch = filters.location === "All Locations" || job.location.includes(filters.location.split(',')[0]);
    
    const durationMatch = filters.duration === "All Durations" || job.duration === filters.duration;

    return keywordMatch && locationMatch && durationMatch;
  });

  return (
    <div className="search-jobs-container">
      
      <div className="search-header-section">
        <h2 className="search-title">Find Your Next Opportunity</h2>

        <section className="row g-3 align-items-stretch">
          
          <div className="col-12 col-lg-5">
            <div className="filter-card h-100">
              <label>Search Roles or Skills</label>
              <div className="input-with-icon position-relative">
                <span className="search-icon position-absolute"><CiSearch /></span>
                <input
                  type="text"
                  name="keyword"
                  placeholder="e.g. Node.js, Backend..."
                  value={filters.keyword}
                  onChange={handleChange}
                  className="form-control border-0 w-100"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <div className="filter-card h-100">
              <label>Location</label>
              <select
                name="location"
                value={filters.location}
                onChange={handleChange}
                className="form-select border-0 w-100 shadow-none"
              >
                <option value="All Locations">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Alexandria, EG">Alexandria, EG</option>
                <option value="Cairo, EG">Cairo, EG</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <div className="filter-card h-100">
              <label>Duration</label>
              <select
                name="duration"
                value={filters.duration}
                onChange={handleChange}
                className="form-select border-0 w-100 shadow-none"
              >
                <option value="All Durations">All Durations</option>
                <option value="Summer">Summer</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <button
              className="btn text-white w-100 h-100 rounded-4 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm"
              onClick={handleAiRecommendation}
              style={{ minHeight: "65px", backgroundColor: "#0b5fff" }}
            >
              <BsStars className="fs-5" /> AI Match
            </button>
          </div>

        </section>
      </div>

      <div className="row g-4 mt-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="col-12 col-md-6 col-xl-4" key={job.id}>
              <Internshipcard internship={job} actionText="Details" />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No jobs found matching your criteria.</h4>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default SearchJobs;