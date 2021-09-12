import React, { useEffect, useState } from 'react'
import './App.scss'
import ContactForm from './components/ContactForm/ContactForm'
import Button from './components/formControls/Button/Button'
import Gallery from './components/Gallery/Gallery'
import GalleryControl from './components/GalleryControl/GalleryControl'

const App = () => {
  const [images, setImages] = useState()
  const [showContactForm, setShowContactForm] = useState()
  const [selectedFilter, setSelectedFilter] = useState('none')
  const [rowSize, setRowSize] = useState('5')

  useEffect(() => {
    fetch(`images`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data)
        setImages(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [selectedFilter])

  return (
    <div className="app-container">
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      <div className="main-container">
        <GalleryControl
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          rowSize={rowSize}
          setRowSize={setRowSize}
        />
        <Gallery images={images} selectedFilter={selectedFilter} rowSize={rowSize} />
      </div>
      <footer>
        <Button onClick={() => setShowContactForm(true)} variant="secondary">
          Contact Us
        </Button>
      </footer>
    </div>
  )
}

export default App
