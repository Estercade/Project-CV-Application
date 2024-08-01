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
  const [shownSection, setShownSection] = useState('education');

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
      <Work shownSection={shownSection} setShownSection={setShownSection} />
    </>
  )
}

export default App
