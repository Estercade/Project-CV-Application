import { useState } from 'react'

function GeneralInfo({ person, setPerson }) {
  const [fullName, setFullName] = useState(person.name);
  const [email, setEmail] = useState(person.email);
  const [phone, setPhone] = useState(person.phone);
  const [location, setLocation] = useState(person.location);
  const [gitHub, setGitHub] = useState(person.gitHub);

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  } 

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleGitHubChange(e) {
    setGitHub(e.target.value);
  }

  function handleSubmitPerson() {
    if (!fullName) {
      alert('Please fill out all required fields!');
    } else {
      setPerson({ 
        name: fullName, 
        email: email,
        phone: phone,
        location: location,
        gitHub: gitHub
      });
    }
  }

  function handleCancelPersonFor() {
    setFullName(person.name);
    setEmail(person.email);
    setPhone(person.phone);
    setLocation(person.location);
    setGitHub(person.gitHub);
  }

  return (
    <div className="generalInfoContainer formSubsection">
      <h2 className="generalInfoTitle formSectionTitle">Personal information</h2>
      <form action="" className="generalInfoForm">
        <div className="generalInfoFormItem">
          <label htmlFor="fullName">
            Full name
            <span className="required formRequirement">required</span>
          </label>
          <input type="text" id="fullName" value={fullName} autoComplete="name" onChange={handleNameChange} area-describedby="required-full-name" required />
        </div>
        <div className="generalInfoFormItem">
          <label htmlFor="email">
            Email
            <span className="recommended formRequirement">recommended</span>
          </label>
          <input type="text" id="email" value={email} autoComplete="email" onChange={handleEmailChange} />
        </div>
        <div className="generalInfoFormItem">
          <label htmlFor="phone">
            Phone number
            <span className="recommended formRequirement">recommended</span>
          </label>
          <input type="tel" id="phone" value={phone} autoComplete="tel" onChange={handlePhoneChange} />
        </div>
        <div className="generalInfoFormItem">
          <label htmlFor="location">
            Location
            <span className="recommended formRequirement">recommended</span>
          </label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>

        <div className="generalInfoFormItem">
          <label htmlFor="gitHub">
            GitHub
            <span className="optional formRequirement">optional</span>
          </label>
          <input type="text" id="gitHub" value={gitHub} onChange={handleGitHubChange} />
        </div>
        <div className="formControlsContainer generalInfoFormControls">
          <button type="button" onClick={handleSubmitPerson} className="saveEditGeneralInfoButton">
            Save
          </button>
          <button type="button" onClick={handleCancelPersonFor} className="cancelEditGeneralInfoButton">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default GeneralInfo;