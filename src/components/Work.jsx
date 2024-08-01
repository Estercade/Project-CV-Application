import { useState } from 'react'

function Work({ shownSection, setShownSection }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDateWork, setStartDateWork] = useState('');
  const [endDateWork, setEndDateWork] = useState('');

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }
  
  function handleStartDateWorkChange(e) {
    setStartDateWork(e.target.value);
  }

  function handleEndDateWorkChange(e) {
    setEndDateWork(e.target.value);
  }

  function handleShownSection() {
    if (shownSection === 'work') {
      setShownSection('');
    } else {
      setShownSection('work')
    }
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
              />
            <br />
            <label htmlFor="startDateWork">Start date</label>
            <input
              type="text"
              id="startDateWork"
              value={startDateWork}
              onChange={handleStartDateWorkChange}
            />
            <br />
            <label htmlFor="endDateWork">End date</label>
            <input
              type="text"
              id="endDateWork"
              value={endDateWork}
              onChange={handleEndDateWorkChange}
            />
        </form>
      </div>
    </section>
  )
}

export default Work;