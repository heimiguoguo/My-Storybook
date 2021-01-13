import React from 'react'
import PropTypes from 'prop-types';

export const Hello = ({ name }) => {
    return (
        <div>hello {name}</div>
    )
}

Hello.PropTypes = {
    name: PropTypes.string
}