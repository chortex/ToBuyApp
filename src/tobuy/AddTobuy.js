import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddTobuy({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }

  }

  return (
    <form style={{marginBottom: '2rem', display: 'flex', justifyContent: 'space-between'}} onSubmit={submitHandler} >
      <input placeholder="Your item.." className='field shadow' value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit" className='btn btn-success btn-lg shadow'>Add</button>
    </form>
  )
}

AddTobuy.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTobuy