import React from 'react'
import PropTypes from 'prop-types'
import TobuyItem from './TobuyItem'

function TobuyList(props) {
  return (
    <ul>
      { props.tobuys.map((tobuy, index) => {
        return (
          <TobuyItem
            tobuy={tobuy}
            key={tobuy.id}
            index={index}
            onChange={props.onToggle}
          />
        )
      }) }
    </ul>
  )
}

TobuyList.propTypes = {
  tobuys: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TobuyList
