import React from 'react'
import Button from '../formControls/Button/Button'
import TextInput from '../formControls/TextInput/TextInput'
import './ContactForm.scss'

const ContactForm = ({ onClose }) => {
  const submitHandler = (evt) => {
    evt.preventDefault()
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={submitHandler}>
        <h2>Contact Us</h2>
        <div className="form-control">
          <TextInput label="Name" name="name" />
        </div>
        <div className="form-control">
          <TextInput label="Email" name="email" />
        </div>
        <div className="form-control">
          <TextInput label="Date of birth" name="dob" />
        </div>
        <div className="form-control">
          <TextInput label="Favorite colour" name="color" />
        </div>
        <div className="form-control">
          <TextInput label="Salary range" name="salary" />
        </div>
        <div className="buttons-section">
          <Button type="submit">Submit</Button>
          <div className="cancel-btn" onClick={onClose}>
            <Button variant="secondary">Close</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
