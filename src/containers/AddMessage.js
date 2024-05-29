import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input

    return (
        <section id="new-message">
            <input 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me')
                        input.value = ''
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}>
                    
                </input>
        </section>
    )
}

AddMessage.PropTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage