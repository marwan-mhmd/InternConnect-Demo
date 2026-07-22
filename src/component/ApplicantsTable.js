import React, { useState } from "react";
import "./ApplicantsTable.css";
import { MdVerified } from "react-icons/md";
import { FaTimes } from "react-icons/fa"; // استيراد أيقونة الإغلاق

const applicantsData = [
  {
    id: 1,
    name: "Omar Khalid",
    uni: "Cairo University",
    gpa: "3.85",
    credits: 102,
    skills: ["Python", "React"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGBwYlbR5Br5J-FswwnLYaPWw7Oed-2-CurWO801s3HaBT6x6gIgYxHDrAEYmiGhwyBeRyQML0Sn_aZ7wcxQ1MTilu2MxA7XkQQ2XHZ8t7youCJKDPi9vx7UwAbk1Vkj0rgnCw1GHB1p23dpeGq5MzC0Dnqts0yJiyOapZcDb9M9aNpNfUyVizqf1Aqbv96S2n7jNkKNrIE1MqHQ6J-cVd6lZ66u2aF9w9M7u7QmRQ01ykrkSB4fAUilkEAqDbaQN9095l_2UzQlng"
  },
  {
    id: 2,
    name: "Lina Mansour",
    uni: "American University",
    gpa: "3.92",
    credits: 94,
    skills: ["Figma", "UI/UX"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-WYDuieKO2Id-9iSMWT0sbKE18ogcp-Gfccc_S_P0PCYRufi7lQQM0H-Qa-toO6KKEeq0-kktV3MRVgrwd9plNyqNchFKPoW-nAybYjbbqTZBQZ_e326MnLlkZShkXKMhT3E4F3ucRviGNsdzqL0RVUo2tmrkKJNpDVaxOJRxeYHEGWNa0eIzZWLBLy0QhOQ3a_hD2XoV5-5UMPLlNxXqQN-DZYZCvfaD7hHeOkq3-03HyirqJoq9VzNVEBrvDkldTsaWOrTIFFM1"
  },
  {
    id: 3,
    name: "Ahmed El-Sayed",
    uni: "King Saud University",
    gpa: "3.60",
    credits: 110,
    skills: ["Java", "Spring"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMF0WCGgikEtpZLIO7-0opf2G8IWyeUXQuGTuWdn5-VxLNga7ddNhfyrZjUZVnGdz34hwFumQo8S8vdDZNaHwqVt_2phzrLGe8R1r96dL2KeInu8PcZ4JxEM022TFvTGGrAFx5Jq81s1Nek8viryv1ftfimNYYNcHYOO_ptiasikod9S2FKRoxefli344ejzSO2NiuyNTYk3kRCXhWhqXvyQFj979laV9NR0JDRG_DMrdqf6sbCHRmxhWKa6FHXO2mNtDAbhi6kEPR"
  }
];

function ApplicantsTable() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="table-container">
      <div className="table-header-bar">
        <h3 className="table-title">Active Applicants</h3>
        <div className="table-filters">
          <button className="filter-btn">By GPA</button>
          <button className="filter-btn active-filter">Recent</button>
          <button className="filter-btn">By Skills</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="applicants-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>GPA</th>
              <th>Credit Hrs</th>
              <th>Primary Skills</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicantsData.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="candidate-info">
                    <img src={student.img} alt={student.name} className="candidate-img" />
                    <div>
                      <div className="candidate-name">{student.name}</div>
                      <div className="candidate-uni">{student.uni}</div>
                    </div>
                  </div>
                </td>
                <td className="font-mono">{student.gpa}</td>
                <td>{student.credits}</td>
                <td>
                  <div className="skills-container">
                    {student.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </td>
                <td className="text-right">
                  <button 
                    className="view-profile-btn"
                    onClick={() => setSelectedStudent(student)}
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedStudent && (
        <div className="profile-modal-overlay" onClick={closeModal}>
          <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="profile-summary-content">
              <img 
                src={selectedStudent.img} 
                alt={selectedStudent.name} 
                className="profile-main-img" 
              />
              <div className="profile-info-main">
                <h1 className="profile-name">{selectedStudent.name}</h1>
                <p className="profile-degree">B.S. Computer Science • {selectedStudent.uni}</p>
                
                <div className="profile-stats-row">
                  <div className="stat-item">
                    <span className="stat-label">CURRENT GPA</span>
                    <span className="stat-value text-primary">{selectedStudent.gpa} / 4.0</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">CREDIT HRS</span>
                    <span className="stat-value text-primary">{selectedStudent.credits}</span>
                  </div>
                </div>

                <div className="profile-skills-row">
                  {selectedStudent.skills.map((skill, index) => (
                    <span key={index} className="skill-tag-light">{skill}</span>
                  ))}
                  <span className="verified-skill">
                    <MdVerified /> Verified Skill
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicantsTable;