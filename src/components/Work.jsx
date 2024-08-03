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
    <div className="workContainer formSubsection">
      <button type="button" onClick={handleShownSection} className="workListButton">
        <h2 className="workInfoTitle formSectionTitle">
          Professional experience
          <span className="expandedIconSection" hidden={shownSection === 'work'} aria-hidden>&#43;</span>
          <span className="collapsedIconSection" hidden={shownSection !== 'work'} aria-hidden>&#8722;</span>
        </h2>
      </button>
      <div className="workContainer" hidden={shownSection !== 'work'}>
        <ul className="workFormList">
          {jobs.map((job) => 
            <li key={job.id} className="workFormListItem">
              <button type="button" value={job.id} onClick={handleEditJob} className="workFormJobButton">
                {job.company}
                <span className="expandedIcon" hidden={formShown === job.id} aria-hidden>&#43;</span>
                <span className="collapsedIcon" hidden={formShown !== job.id} aria-hidden>&#8722;</span>
              </button>              
              {formShown === job.id && <EditJobForm jobs={jobs} setJobs={setJobs} targetJob={job} formShown={formShown} setFormShown={setFormShown} />}
            </li>
          )}
          <li>
            <button type="button" value="newJob" onClick={handleAddJobForm} className="addNewJobButton">
              Add new
            </button>
            {formShown === 'newJob' && <AddJobForm jobs={jobs} setJobs={setJobs} formShown={formShown} setFormShown={setFormShown} />}
          </li>
        </ul>
      </div>
    </div>
  )
}

function EditJobForm({ jobs, setJobs, targetJob, formShown, setFormShown }) {
  const [company, setCompany] = useState(targetJob.company);
  const [position, setPosition] = useState(targetJob.position);
  const [startDate, setStartDate] = useState(targetJob.startDate);
  const [endDate, setEndDate] = useState(targetJob.endDate);
  const [description, setDescription] = useState(targetJob.description);

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

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSaveEditJob() {
    if (!company | !position | !startDate | !endDate) {
      alert('Please fill out all required fields!');
    } else {
      let updatedJob = {
        id: targetJob.id,
        company: company,
        position: position,
        startDate: startDate,
        endDate: endDate,
        description: description
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
    <form action="" className="workForm">
      <div className="workFormItem">
        <label htmlFor="company">
          Company name
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="company" value={company} onChange={handleCompanyChange} area-describedby="required-company-name" required />
      </div>
      <div className="workFormItem">
        <label htmlFor="position">
          Position title
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="position" value={position} onChange={handlePositionChange} area-describedby="required-position-title" required />
      </div>
      <div className="workFormItem">
        <label htmlFor="startDate">
          Start date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="startDate" value={startDate} onChange={handleStartDateChange} area-describedby="required-position-start-date" required />
      </div>
      <div className="workFormItem">
        <label htmlFor="endDate">
          End date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="endDate" value={endDate} onChange={handleEndDateChange} area-describedby="required-position-end-date" required />
      </div>
      <div className="workFormItem">
        <label htmlFor="description">
          Job description
          <span className="optional formRequirement">optional</span>
        </label>
        <textarea type="text" id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="formControlsContainer editJobFormControls">
        <button type="button" onClick={handleSaveEditJob} className="saveEditJobButton">
          Save
        </button>
        <button type="button" onClick={handleCancelEditJob} className="cancelEditJobButton">
          Cancel
        </button>
        <button type="button" value={targetJob.id} onClick={handleDeleteJob} className="deleteJobButton">
          Delete
        </button>
      </div>
    </form>
  )
}

function AddJobForm({ jobs, setJobs, formShown, setFormShown }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

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

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleAddJob() {
    if (!company | !position | !startDate | !endDate) {
      alert('Please fill out all required fields!');
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
    <form action="" className="addJobForm" hidden={formShown !== 'newJob'}>
      <div className="addJobFormItem">
        <label htmlFor="company">
          Company name
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="company" value={company} onChange={handleCompanyChange} />
      </div>
      <div className="addJobFormItem">
        <label htmlFor="position">
          Position title
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="position" value={position} onChange={handlePositionChange} />
      </div>
      <div className="addJobFormItem">
        <label htmlFor="startDate">
          Start date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="startDate" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div className="addJobFormItem">
        <label htmlFor="endDate">
          End date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="endDate" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div className="addJobFormItem">
        <label htmlFor="description">
            Job description
          <span className="optional formRequirement">optional</span>
        </label>
        <textarea type="text" id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="formControlsContainer jobFormControls">
        <button type="button" onClick={handleAddJob} className="addNewJobButton">
          Save
        </button>
        <button type="button" onClick={handleCancelAddJob}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Work;