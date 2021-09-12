import React from 'react'
import Tabs from '../formControls/Tabs/Tabs'
import './GalleryControl.scss'

const filters = [
  { key: 'none', label: 'No Filter' },
  { key: 'grayscale', label: 'Grayscale' },
  { key: 'negate', label: 'Negative' },
  { key: 'blur', label: 'Blur' },
]

const rowSizes = [
  { key: '2', label: '2' },
  { key: '4', label: '4' },
  { key: '6', label: '6' },
]

const GalleryControl = ({ selectedFilter, setSelectedFilter, rowSize, setRowSize }) => {
  return (
    <div className="gallery-control">
      <Tabs items={filters} value={selectedFilter} onChange={setSelectedFilter} />
      <div className="gallery-row-size">
        <Tabs items={rowSizes} value={rowSize} onChange={setRowSize} />
      </div>
    </div>
  )
}

export default GalleryControl
