import React from 'react'

function BorderBox(props) {
    const borderStyle = {
        boxShadow: '-1rem 0 3rem #000',
        marginBottom: '30px',
        padding: '26px 30px',
        borderRadius: '4px'
    }
    return (
        <div style={borderStyle}>
            {props.children}
        </div>
    )
}

export default BorderBox;