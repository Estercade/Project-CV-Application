import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Work({ jobs, setJobs, shownSection, setShownSection }) {
  const [formShown, setFormShown] = useState('');

  function handleShownSection() {
    if (shownSection === 'work') {
      setShownSection('');
      setFormShown('');
    } else {
      setShownSection('work');
      setFormShown('');
    }
  }

  function handleEditJob(e) {
    formShown === e.target.value ? setFormShown('') : setFormShown(e.target.value);
  }

  function handleAddJobForm() {
    formShown === 'newJob' ? setFormShown('') : setFormShown('newJob');
  }

  return (
    <section className="workSection">
      <button
        type="button"
        onClick={handleShownSection}
      >
        <h2>Professional experience</h2>
      </button>
      <div className="workContainer" hidden={shownSection !== 'work'}>
        <ul>
          {jobs.map((job) => 
            <li key={job.id}>
              <button type="button"
                value={job.id}
                onClick={handleEditJob}
              >
                {job.company}
              </button>              
              {formShown === job.id && <EditJobForm jobs={jobs} setJobs={setJobs} targetJob={job} formShown={formShown} setFormShown={setFormShown} />}
            </li>
          )}
          <li>
            <button type="button" 
              value='newJob'
              onClick={handleAddJobForm}
            >
              Add new
            </button>
            {formShown === 'newJob' && <AddJobForm jobs={jobs} setJobs={setJobs} formShown={formShown} setFormShown={setFormShown} />}
          </li>
        </ul>
      </div>
    </section>
  )
}

function EditJobForm({ jobs, setJobs, targetJob, formShown, setFormShown }) {
  const [company, setCompany] = useState(targetJob.company);
  const [position, setPosition] = useState(targetJob.position);
  const [startDate, setStartDate] = useState(targetJob.startDate);
  const [endDate, setEndDate] = useState(targetJob.endDate);

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }
  
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleSaveEditJob() {
    if (!company | !position | !startDate | !endDate) {
      alert('Please fill out all missing fields!');
    } else {
      let updatedJob = {
        id: targetJob.id,
        company: company,
        position: position,
        startDate: startDate,
        endDate: endDate
      }

      let updatedJobsArray = jobs.map(job => {
        if (job.id === targetJob.id) {
          return updatedJob;
        } else {
          return job;
        }
      });
      setJobs(updatedJobsArray); 
    }
  }

  function handleCancelEditJob() {
    setFormShown('');
  }

  function handleDeleteJob(e) {
    setJobs(jobs.filter((job) => job.id !== e.target.value));
  }
  
  return (
    <form
      action=""
      className="workForm"
    >
      <label htmlFor="company">Company name</label>
      <input
          type="text"
          id="company"
          value={company}
          onChange={handleCompanyChange}
        />
      <br />
      <label htmlFor="position">Position title</label>
      <input
          type="text"
          id="position"
          value={position}
          onChange={handlePositionChange}
          required
        />
      <br />
      <label htmlFor="startDate">Start date</label>
      <input
        type="text"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <br />
      <label htmlFor="endDate">End date</label>
      <input
        type="text"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
      />
      <br />
      <button
        type="button"
        onClick={handleSaveEditJob}
      >
        Save
      </button>
      <button
        type="button"
        onClick={handleCancelEditJob}
      >
        Cancel
      </button>
      <button type="button"
        value={targetJob.id}
        onClick={handleDeleteJob}
      >
        Delete
      </button>
    </form>
  )
}

function AddJobForm({ jobs, setJobs, formShown, setFormShown }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleAddJob() {
    if (!company | !position | !startDate | !endDate) {
      alert('Please fill out all missing fields!');
    } else {
      let newJob = {
        id: uuidv4(),
        company: company,
        position: position,
        startDate: startDate,
        endDate: endDate
      }
      setJobs([
        ...jobs,
        newJob
      ])
      setFormShown('');
    }
  }

  function handleCancelAddJob() {
    setFormShown('');
  }

  return (
    <form
      action=""
      className="addJobForm"
      hidden={formShown !== 'newJob'}
    >
      <label htmlFor="company">Company name</label>
      <input
          type="text"
          id="company"
          value={company}
          onChange={handleCompanyChange}
          required
        />
      <br />
      <label htmlFor="position">Position title</label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={handlePositionChange}
      />
      <br />
      <label htmlFor="startDate">Start date</label>
      <input
        type="text"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <br />
      <label htmlFor="endDate">End date</label>
      <input
        type="text"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
      />
      <br />
      <button
        type="button"
        onClick={handleAddJob}
      >
        Save
      </button>
      <button
        type="button"
        onClick={handleCancelAddJob}
      >
        Cancel
      </button>
    </form>
  )
}

export default Work;