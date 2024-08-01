import { useState } from 'react'

function GeneralInfo({ person, setPerson }) {
  const [fullName, setFullName] = useState(person.name);
  const [email, setEmail] = useState(person.email);
  const [phone, setPhone] = useState(person.phone);
  const [location, setLocation] = useState(person.location);

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

  function handleSubmitPerson() {
    setPerson({ 
      name: fullName, 
      email: email,
      phone: phone,
      location: location
    });
  }

  function handleCancelPersonFor() {
    setFullName(person.name);
    setEmail(person.email);
    setPhone(person.phone);
    setLocation(person.location);
  }

  return (
    <div className="generalInfoContainer">
      <h2>Personal information</h2>
      <form action="" className="generalInfoForm">
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          autoComplete="name"
          onChange={handleNameChange}
        />

        <br />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          autoComplete="email"
          onChange={handleEmailChange}
        />

        <br />

        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          autoComplete="tel"
          onChange={handlePhoneChange}
        />

        <br />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />

        <br />

        <button 
          type="button"
          onClick={handleSubmitPerson}>
          Submit
        </button>
        <button 
          type="button"
          onClick={handleCancelPersonFor}>
          Cancel
        </button>

      </form>
    </div>
  )
}

export default GeneralInfo;