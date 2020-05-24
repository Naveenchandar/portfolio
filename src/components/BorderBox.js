import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function BorderBox(props) {
    const themeContext = useContext(ThemeContext);
    const mainPageStyle = {
        color: themeContext.color
    }
    const borderStyle = {
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