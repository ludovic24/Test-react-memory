import React from 'react'
import PropTypes from 'prop-types'
import './GuessCount.css'

//nombre de perles

const GuessCount = ({guesses}) => <div className="guesses" >{guesses}</div>


GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired,
}

export default GuessCount