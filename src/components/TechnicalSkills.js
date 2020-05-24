import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ThemeContext } from 'styled-components';

function TechnicalSkills() {
    const themeContext = useContext(ThemeContext);
    const mainPageStyle = {
        color: themeContext.color
    }
    const eachSkills = {
        textAlign: 'left',
        color: 'white'
    }
    const nome = {
        padding: '7px 0'
    }
    return (
        <div className="skillsInner" style={mainPageStyle}>
            <div className="professionalSkill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <h3>Technical Skills</h3>
                <div style={eachSkills}>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>Html</div>
                        <ProgressBar now={85} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>Css</div>
                        <ProgressBar now={85} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>Bootstrap</div>
                        <ProgressBar now={85} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>Javascript</div>
                        <ProgressBar now={90} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>ReactJs</div>
                        <ProgressBar now={85} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>NodeJs</div>
                        <ProgressBar now={60} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>ExpressJs</div>
                        <ProgressBar now={65} />
                    </div>
                    <div className="candidatos" style={mainPageStyle}>
                        <div style={nome}>MySQL</div>
                        <ProgressBar now={60} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalSkills;
