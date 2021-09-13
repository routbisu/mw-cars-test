import React from 'react'
import './Gallery.scss'
import Thumbnail from './Thumbnail/Thumbnail'

const Gallery = ({ images, selectedFilter, rowSize }) => {
  return (
    <div className="gallery-container">
      {images &&
        images.map((image) => (
          <div key={image.id} style={{ flexBasis: `${Number(100 / rowSize)}%` }}>
            <Thumbnail selectedFilter={selectedFilter} key={image.id} image={image} />
          </div>
        ))}
    </div>
  )
}

export default Gallery
