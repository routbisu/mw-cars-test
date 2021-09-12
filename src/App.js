import React, { useEffect, useState } from 'react'
import './App.scss'
import Gallery from './components/Gallery/Gallery'
import GalleryControl from './components/GalleryControl/GalleryControl'

const App = () => {
  const [images, setImages] = useState()
  const [selectedFilter, setSelectedFilter] = useState('none')
  const [rowSize, setRowSize] = useState('6')

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
      <GalleryControl
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        rowSize={rowSize}
        setRowSize={setRowSize}
      />
      <Gallery images={images} selectedFilter={selectedFilter} rowSize={rowSize} />
    </div>
  )
}

export default App
