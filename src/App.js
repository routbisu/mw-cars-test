import React, { useEffect, useState } from 'react'
import './App.scss'
import Gallery from './components/Gallery/Gallery'

const App = () => {
  const [images, setImages] = useState()

  useEffect(() => {
    fetch('images')
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data)
        setImages(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div className="app-container">
      <Gallery images={images} />
    </div>
  )
}

export default App
