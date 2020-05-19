import React from 'react';
import Col from 'react-bootstrap/Col';
import {
    CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProfessionalSkills() {
    const layoutStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white',
        paddingLeft : '0',
        paddingRight : '0',
        marginBottom: '30px',
        marginTop: '30px'
    }
    const listStyle = {
        display: 'inline-block',
        margin: '0 auto',
        width: '65%',
        textAlign: 'center',
        paddingLeft : '0',
        paddingRight : '0',
        marginBottom: '30px',
    }
    return (
        <>
            <Col sm={12} style={layoutStyle}>
                <Col sm={6}>
                    <li style={listStyle}>
                        <CircularProgressbar
                            value={80}
                            strokeWidth={6}
                        />
                        <div className="pr-skill-name"><br/>Communication</div>
                    </li>
                </Col>
                <Col sm={6}>
                    <li style={listStyle}>
                        <CircularProgressbar
                            value={80}
                            strokeWidth={6}
                        />
                        <div className="pr-skill-name"><br/>Team Work</div>
                    </li>
                </Col>
            </Col>
            <Col sm={12} style={layoutStyle}>
                <Col sm={6}>
                    <li style={listStyle}>
                        <CircularProgressbar
                            value={70}
                            strokeWidth={6}
                        />
                        <div className="pr-skill-name"><br/>Independent Work</div>
                    </li>
                </Col>
                <Col sm={6}>
                    <li style={listStyle}>
                        <CircularProgressbar
                            value={80}
                            strokeWidth={6}
                        />
                        <div className="pr-skill-name"><br/>Creativity</div>
                    </li>
                </Col>
            </Col>
        </>
    )
}

export default ProfessionalSkills;
