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
    <div className="educationContainer formSubsection">
      <button type="button" onClick={handleShownSection} className="schoolListButton">
        <h2 className="educationTitle formSectionTitle">
          Education
          <span className="expandedIconSection" hidden={shownSection === 'education'} aria-hidden>&#43;</span>
          <span className="collapsedIconSection" hidden={shownSection !== 'education'} aria-hidden>&#8722;</span>
        </h2>
      </button>
      <div className="educationFormListContainer" hidden={shownSection !== 'education'} >
        <ul className="educationFormList">
          {schools.map((school) => 
            <li key={school.id} className="educationFormListItem">
              <button type="button" value={school.id} onClick={handleEditSchool} className="educationFormSchoolButton">
                {school.name}
                <span className="expandedIcon" hidden={formShown === school.id} aria-hidden>&#43;</span>
                <span className="collapsedIcon" hidden={formShown !== school.id} aria-hidden>&#8722;</span>
              </button>
              {formShown === school.id && <EditSchoolForm schools={schools} setSchools={setSchools} targetSchool={school} formShown={formShown} setFormShown={setFormShown} />}
            </li>
          )}
          <li>
            <button type="button" value='newSchool' onClick={handleAddSchoolForm} className="addNewSchoolButton">
              Add new
            </button>
            {formShown === 'newSchool' && <AddSchoolForm schools={schools} setSchools={setSchools} formShown={formShown} setFormShown={setFormShown} />}
          </li>
        </ul>
      </div>
    </div>
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
    if (!schoolName | !degree | !startDate | !endDate) {
      alert('Please fill out all required fields!');
    } else {
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
  }

  function handleCancelEditSchool() {
    setFormShown('');
  }

  function handleDeleteSchool(e) {
    setSchools(schools.filter((school) => school.id !== e.target.value));
  }

  return (
    <form action="" className="EditSchoolForm" hidden={formShown !== targetSchool.id}>
      <div className="schoolFormItem">
        <label htmlFor="schoolName">
          School name
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="schoolName" value={schoolName} onChange={handleSchoolNameChange} area-describedby="required-school-name" required />
      </div>
      <div className="schoolFormItem">
        <label htmlFor="degree">
          Field of study
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="degree" value={degree} onChange={handleDegreeChange} area-describedby="required-degree" required />
      </div>
      <div className="schoolFormItem">
        <label htmlFor="startDate">
          Start date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="startDate" value={startDate} onChange={handleStartDateChange} area-describedby="required-degree-start-date" required />
      </div>
      <div className="schoolFormItem">
        <label htmlFor="endDate">
          End date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="endDate" value={endDate} onChange={handleEndDateChange} area-describedby="required-description" required />
      </div>
      <div className="formControlsContainer editSchoolFormControls">
        <button type="button" onClick={handleSaveEditSchool} className="saveEditSchoolButton">
          Save
        </button>
        <button type="button" onClick={handleCancelEditSchool} className="cancelEditSchoolButton">
          Cancel
        </button>
        <button type="button" value={targetSchool.id} onClick={handleDeleteSchool} className="deleteSchoolButton">
          Delete
        </button>
      </div>
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
    if (!schoolName | !degree | !startDate | !endDate) {
      alert('Please fill out all required fields!');
    } else {
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
  }

  function handleCancelAddSchool() {
    setFormShown('');
  }

  return (
    <form action="" className="addSchoolForm" hidden={formShown !== 'newSchool'}>
      <div className="addSchoolFormItem">
        <label htmlFor="schoolName">
          School name
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="schoolName" value={schoolName} onChange={handleSchoolNameChange} />
      </div>
      <div className="addSchoolFormItem">
        <label htmlFor="degree">
          Field of study
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="degree" value={degree} onChange={handleDegreeChange} />
      </div>
      <div className="addSchoolFormItem">
        <label htmlFor="startDate">
          Start date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="startDate" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div className="addSchoolFormItem">
        <label htmlFor="endDate">
          End date
          <span className="required formRequirement">required</span>
        </label>
        <input type="text" id="endDate" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div className="formControlsContainer">
        <button type="button" onClick={handleAddSchoolForm} className="saveAddSchoolButton">
          Save
        </button>
        <button type="button" onClick={handleCancelAddSchool} className="cancelAddSchoolButton">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Education;