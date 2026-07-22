import React, { useState } from "react";
import "./PostForm.css";
import { MdAddCircle, MdClose } from "react-icons/md";

function PostForm() {
  const [skills, setSkills] = useState(["JavaScript", "Tailwind", "React"]);

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <section className="post-form-container">
      <h3 className="form-header">
        <MdAddCircle className="header-icon" />
        New Internship
      </h3>

      <form className="form-body" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Job Title</label>
          <input type="text" placeholder="e.g. Frontend Engineering Intern" />
        </div>

        <div className="form-grid">
          <div className="input-group">
            <label>Duration</label>
            <select>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>Summer Only</option>
            </select>
          </div>
          
          <div className="input-group">
            <label>GPA Req.</label>
            <input type="number" step="0.1" placeholder="3.0" />
          </div>
        </div>

        <div className="input-group">
          <label>Required Skills (Tags)</label>
          <div className="tags-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill} 
                <MdClose 
                  className="remove-icon" 
                  onClick={() => handleRemoveSkill(skill)} 
                />
              </span>
            ))}
            <button type="button" className="add-skill-btn">Add Skill +</button>
          </div>
        </div>

        <div className="input-group">
          <label>Brief Description</label>
          <textarea rows="3" placeholder="Describe the role and key learning outcomes..."></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Publish Listing
        </button>
      </form>
    </section>
  );
}

export default PostForm;