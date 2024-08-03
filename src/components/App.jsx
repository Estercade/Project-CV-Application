import { useState } from 'react'
import GeneralInfo from './GeneralInfo.jsx'
import Education from './Education.jsx'
import Work from './Work.jsx'
import Preview from './Preview.jsx'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [person, setPerson] = useState({
    name: "John Smith",
    email: "johnsmith@madeupwebsite.com",
    phone: "123-456-7890",
    location: "Somewhere",
    gitHub: "madeupgithub@github.com"
  });
  const [schools, setSchools] = useState([
    {
      id: uuidv4(),
      name: "Rutgers University",
      degree: "Cell Biology and Neuroscience",
      startDate: "September 2000",
      endDate: "June 2005"
    },
    {
      id: uuidv4(),
      name: "New Jersey Institute of Technology",
      degree: "Computer Science",
      startDate: "September 2005",
      endDate: "June 2010"
    }
  ]);
  const [jobs, setJobs] = useState([
    {
      id: uuidv4(),
      company: "Real workplace",
      position: "Real job",
      startDate: "June 2010",
      endDate: "June 2015",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: uuidv4(),
      company: "Definitely real workplace",
      position: "Definitely real job",
      startDate: "August 2015",
      endDate: "August 2020",
      description: "Metus quam in lectus cubilia augue. Elementum dis ridiculus fusce purus litora nec luctus. Posuere nisl nisi class phasellus feugiat tortor netus. Fames bibendum mattis semper mauris faucibus enim risus mattis. Quam fermentum tristique at consectetur nullam phasellus. Libero lacinia vel nisi curae netus montes. Placerat quam lorem sagittis at eget tristique. Ainterdum nulla natoque venenatis magnis dolor condimentum. Erat primis suspendisse aenean sit dui, sodales interdum. Egestas rutrum tempor imperdiet gravida justo lobortis magnis felis."
    }
  ])
  const [shownSection, setShownSection] = useState('education');

  return (
    <>
      <section className="formSection">
        <GeneralInfo person={person} setPerson={setPerson} />
        <Work jobs={jobs} setJobs={setJobs} shownSection={shownSection} setShownSection={setShownSection} />
        <Education schools={schools} setSchools={setSchools} shownSection={shownSection} setShownSection={setShownSection} />
      </section>
      <section className="previewSection">
        <Preview person={person} schools={schools} jobs={jobs} />
      </section>
    </>
  )
}

export default App
