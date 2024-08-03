import { useState } from 'react'

function Preview({ person, schools, jobs }) {
  return (
    <div className="previewContainer">
      <div className="previewHeader">
        <h1 className="previewHeaderFullName">{person.name}</h1>
        <div className="contactInfo">
          {person.email !== "" && <div className="contactEmail">
            <img src="/email.svg" alt="" className="contactIcon emailIcon" />
            {person.email}
          </div>}
          {person.phone !== "" && <div className="contactPhone">
            <img src="/phone.svg" alt="" className="contactIcon phoneIcon" />
            {person.phone}
          </div>}
          {person.location !== "" && <div className="contactLocation">
            <img src="/map-marker.svg" alt="" className="contactIcon locationIcon" />
            {person.location}
          </div>}
          {person.gitHub !== "" && <div className="contactGitHub">
            <img src="/github.svg" alt="" className="contactIcon gitHubIcon" />
            {person.gitHub}
          </div>}
        </div>
      </div>
      <div className="workInfoContainer">
        <h2 className="workInfoHeader sectionHeader">Professional experience</h2>
        <WorkList jobs={jobs} />
      </div>
      <div className="educationInfoContainer">
        <h2 className="educationInfoHeader sectionHeader">Education</h2>
        <EducationList schools={schools} />
      </div>
    </div>
  )
}

function WorkList({jobs}) {
  return (
    <ul className="workInfoList">
      {jobs.map((job) => 
        <li key={job.id} className="jobContainer">
          <div className="rowContainer">
            <div className="jobCompany"><strong>{job.company}</strong></div>
            <div className="jobDates">{job.startDate} - {job.endDate}</div>
          </div>
          <div className="jobPosition">{job.position}</div>
          {job.description !== "" && <div className="jobDescription">{job.description}</div>}
        </li>
      )}
    </ul>
  )
}

function EducationList({schools}) {
  return (
    <ul className="educationInfoList">
      {schools.map((school) => 
        <li key={school.id} className="schoolContainer">
          <div className="rowContainer">
            <div className="schoolName"><strong>{school.name}</strong></div>
            <div className="schoolDates">{school.startDate} - {school.endDate}</div>
          </div>
          <div className="schoolDegree">{school.degree}</div>
        </li>     
      )}
    </ul>
  )
}

export default Preview;