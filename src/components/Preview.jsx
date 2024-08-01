import { useState } from 'react'

function Preview({ person, schools, jobs }) {
  return (
    <div className="previewContainer">
      <div className="resumeHeader">
        <h1 className="fullName">{person.name}</h1>
        <p>{person.email}</p>
        <p>{person.phone}</p>
        <p>{person.location}</p>
      </div>
      <div className="educationContainer">
        <h2 className="educationTitle">Education</h2>
        <EducationList schools={schools} />
      </div>
      <div className="workContainer">
        <h2 className="workTitle">Professional experience</h2>
        <WorkList jobs={jobs} />
      </div>
    </div>
  )
}

function EducationList({schools}) {
  return (
    <ul className="schoolsList">
      {schools.map((school) => 
        <li key={school.id}>
          <p>{school.name}</p>
          <p>{school.startDate} - {school.endDate}</p>
          <p>{school.degree}</p>
        </li>     
      )}
    </ul>
  )
}

function WorkList({jobs}) {
  return (
    <ul className="workList">
      {jobs.map((job) => 
        <li key={job.id}>
          <p>{job.company}</p>
          <p>{job.startDate} - {job.endDate}</p>
          <p>{job.position}</p>
          <p>{job.description}</p>
        </li>
      )}
    </ul>
  )
}

export default Preview;