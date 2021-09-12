import React from 'react'
import PropTypes, { string } from 'prop-types'
import './Tabs.scss'

const Tabs = ({ value, onChange, items }) => {
  return (
    <div className="tabs-container">
      {items &&
        items.map(({ key, label }) => (
          <button key={key} className={`tab ${key === value && 'active'}`} onClick={() => onChange(key)}>
            {label}
          </button>
        ))}
    </div>
  )
}

Tabs.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: string,
      label: string,
    })
  ).isRequired,
}

export default Tabs
