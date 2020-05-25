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
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          onChange={() => onChange(tobuy.id)}
          checked={tobuy.completed}
        />
        <strong>{index + 1 +'.'}</strong>
        &nbsp;
        { tobuy.title }
      </span>
      
      <button onClick={() => removeTobuy(tobuy.id)} className='btn btn-danger btn-sm'>&times;</button>
    </li>
  )
}

TobuyItem.propTypes = {
  tobuy: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TobuyItem