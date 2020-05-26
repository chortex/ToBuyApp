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
    <li className='shadow'>
      <span className={classes.join(' ')}>
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
        &nbsp;
        <strong>{index + 1 +'.'}</strong>
        &nbsp;
        { tobuy.title }
      </span>
      
      <button onClick={() => removeTobuy(tobuy.id)} className='btn btn-danger btn-sm btn-circle'>&times;</button>
    </li>
  )
}

TobuyItem.propTypes = {
  tobuy: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TobuyItem