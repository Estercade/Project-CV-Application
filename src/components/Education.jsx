import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Education({ schools, setSchools, shownSection, setShownSection }) {
  const [formShown, setFormShown] = useState('');

  function handleShownSection() {
    if (shownSection === 'education') {
      setShownSection('');
      setFormShown('');
    } else {
      setShownSection('education');
      setFormShown('');
    }
  }

  function handleEditSchool(e) {
    formShown === e.target.value ? setFormShown('') : setFormShown(e.target.value);
  }

  function handleAddSchoolForm() {
    formShown === 'newSchool' ? setFormShown('') : setFormShown('newSchool');
  }

  return (
    <section className="educationSection">
      <button
      type="button"
      onClick={handleShownSection}
        >
      <h2>Education</h2>
        </button>
      <div className="educationContainer" hidden={shownSection !== 'education'} >
        <ul>
          {schools.map((school) => 
            <li key={school.id}>
              <button type="button"
                value={school.id}
                onClick={handleEditSchool}
              >
                {school.name}
              </button>
              {formShown === school.id && <EditSchoolForm schools={schools} setSchools={setSchools} targetSchool={school} formShown={formShown} setFormShown={setFormShown} />}
            </li>
          )}
          <li>
            <button type="button" 
              value='newSchool'
              onClick={handleAddSchoolForm}
            >
              Add new
            </button>
            {formShown === 'newSchool' && <AddSchoolForm schools={schools} setSchools={setSchools} formShown={formShown} setFormShown={setFormShown} />}
          </li>
        </ul>
      </div>
    </section>
  )
}

function EditSchoolForm({ schools, setSchools, targetSchool, formShown, setFormShown }) {
  const [schoolName, setSchoolName] = useState(targetSchool.name);
  const [degree, setDegree] = useState(targetSchool.degree);
  const [startDate, setStartDate] = useState(targetSchool.startDate);
  const [endDate, setEndDate] = useState(targetSchool.endDate);

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }

  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleSaveEditSchool() {
    let updatedSchool = {
      id: targetSchool.id,
      name: schoolName,
      degree: degree,
      startDate: startDate,
      endDate: endDate
    }

    let updatedSchoolsArray = schools.map(school => {
      if (school.id === targetSchool.id) {
        return updatedSchool;
      } else {
        return school;
      }
    });
    setSchools(updatedSchoolsArray);
  }

  function handleCancelEditSchool() {
    setFormShown('');
  }

  function handleDeleteSchool(e) {
    setSchools(schools.filter((school) => school.id !== e.target.value));
  }

  return (
    <form
      action=""
      className="EditSchoolForm"
      hidden={formShown !== targetSchool.id}
    >
      <label htmlFor="schoolName">School name</label>
      <input
          type="text"
          id="schoolName"
          value={schoolName}
          onChange={handleSchoolNameChange}
        />
      <br />
      <label htmlFor="degree">Field of study</label>
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={handleDegreeChange}
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
        onClick={handleSaveEditSchool}
      >
        Save
      </button>
      <button
        type="button"
        onClick={handleCancelEditSchool}
      >
        Cancel
      </button>
      <button type="button" 
        value={targetSchool.id}
        onClick={handleDeleteSchool}
      >
        Delete
      </button>
    </form>
  )
}

function AddSchoolForm({ schools, setSchools, formShown, setFormShown }) {
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }

  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleAddSchoolForm() {
    let newSchool = {
      id: uuidv4(),
      name: schoolName,
      degree: degree,
      startDate: startDate,
      endDate: endDate
    }
    setSchools([
      ...schools,
      newSchool
    ])
    setFormShown('');
  }

  function handleCancelAddSchool() {
    setFormShown('');
  }

  return (
    <form
      action=""
      className="addSchoolForm"
      hidden={formShown !== 'newSchool'}
    >
      <label htmlFor="schoolName">School name</label>
      <input
          type="text"
          id="schoolName"
          value={schoolName}
          onChange={handleSchoolNameChange}
        />
      <br />
      <label htmlFor="degree">Field of study</label>
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={handleDegreeChange}
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
        onClick={handleAddSchoolForm}
      >
        Save
      </button>
      <button
        type="button"
        onClick={handleCancelAddSchool}
      >
        Cancel
      </button>
    </form>
  )
}

export default Education;