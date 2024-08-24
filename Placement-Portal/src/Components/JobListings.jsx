import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Fetch jobs based on filter and sort options
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs', {
        params: { skill: selectedSkill, sort: sortOption },
      });
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching job listings:', error);
    }
  };

  // Fetch unique skills for the filter dropdown
  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:3000/skills');
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  useEffect(() => {
    fetchSkills();
    fetchJobs();
  }, [selectedSkill, sortOption]);

  const handleApply = (jobId) => {
    console.log(`Applying for job with ID: ${jobId}`);
    // Implement the apply functionality here
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="mb-4 flex space-x-4">
        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        >
          <option value="">Select Skill</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        >
          <option value="">Sort By</option>
          <option value="alphabetical">Alphabetical (A-Z)</option>
          <option value="lpa">LPA (High to Low)</option>
        </select>
      </div>
      <ul className="bg-gray-100 p-4 rounded shadow">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="p-4 border-b last:border-b-0">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p>Skills: {job.skills_required}</p>
                  <p>LPA: {job.lpa}</p>
                  <p>Location: {job.location}</p>
                  <p>Company: {job.company_name}</p>
                </div>
                <button
                  onClick={() => handleApply(job.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Apply Now
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </div>
  );
};

export default JobListings;
