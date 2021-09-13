import React, { useState } from 'react'
import Button from '../formControls/Button/Button'
import TextInput from '../formControls/TextInput/TextInput'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import './ContactForm.scss'

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  dob: Yup.date('Please enter a valid date').required('DOB is required'),
  color: Yup.string().required('Favourite color is required'),
  salary: Yup.string().required('Salary range is required'),
})

const ContactForm = ({ onClose }) => {
  const [success, setSuccess] = useState(false)

  return (
    <div className="contact-form-container">
      <Formik
        initialValues={{
          name: '',
          email: '',
          dob: '',
          color: '',
          salary: '',
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log('Form Values', values)
            actions.resetForm()
            actions.setSubmitting(false)
            setSuccess(true)
          }, 2000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2>Contact Us</h2>
            {success && (
              <div className="success-message">Thank you for contacting us. We will get back to you soon.</div>
            )}
            <div className="form-control">
              <TextInput label="Name" placeholder="Your name here" name="name" />
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
              <Button type="submit">{isSubmitting ? 'Submitting ...' : 'Submit'}</Button>
              <div className="cancel-btn" onClick={onClose}>
                <Button variant="secondary">Close</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
