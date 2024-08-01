import { useState } from 'react'
import GeneralInfo from './GeneralInfo.jsx'
import Education from './Education.jsx'
import Work from './Work.jsx'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [person, setPerson] = useState({
    name: "John Smith",
    email: "johnsmith@madeupwebsite.com",
    phone: "123-456-7890",
    location: "Somewhere"
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
      startDate: "Jun 2010",
      endDate: "June 2015"
    },
    {
      id: uuidv4(),
      company: "Definitely real workplace",
      position: "Definitely real job",
      startDate: "August 2015",
      endDate: "August 2020"
    }
  ])
  const [shownSection, setShownSection] = useState('work');

  function ShowEducation() {
    return (
      <ul>
        
      </ul>
    )
  }

  return (
    <>
      <ShowEducation />
      <GeneralInfo person={person} setPerson={setPerson} />
      <br />
      <Education schools={schools} setSchools={setSchools} shownSection={shownSection} setShownSection={setShownSection} />
      <br />
      <Work jobs={jobs} setJobs={setJobs} shownSection={shownSection} setShownSection={setShownSection} />
    </>
  )
}

export default App
