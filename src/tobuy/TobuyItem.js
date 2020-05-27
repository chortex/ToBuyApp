import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TobuyItem({ tobuy, index, onChange }) {
  const {removeTobuy} = useContext(Context)
  const classes = []

  if (tobuy.completed) {
    classes.push('text-muted')
  }

  return (
    <li>
      <span className={classes.join(' ')} onClick={() => onChange(tobuy.id)}>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            onChange={() => onChange(tobuy.id)}
            checked={tobuy.completed}
            className='custom-control-input'
            id={tobuy.id}
          />
          <label className="custom-control-label" htmlFor={tobuy.id}></label>
        </div>
        &nbsp;{ tobuy.title }
      </span>
      
      <button onClick={() => removeTobuy(tobuy.id)} className='remove-btn text-secondary'><i className="fa fa-times"></i></button>
    </li>
  )
}

TobuyItem.propTypes = {
  tobuy: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TobuyItem