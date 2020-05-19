import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function TechnicalSkills() {
    const eachSkills = {
        textAlign: 'left',
        color: 'white'
    }
    const nome = {
        padding: '7px 0'
    }
    return (
        <div className="skillsInner">
            <div className="professionalSkill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <h3>Technical Skills</h3>
                <div style={eachSkills}>
                    <div className="candidatos">
                        <div style={nome}>Html</div>
                        <ProgressBar now={90} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>Css</div>
                        <ProgressBar now={90} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>Bootstrap</div>
                        <ProgressBar now={85} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>Javascript</div>
                        <ProgressBar now={80} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>ReactJs</div>
                        <ProgressBar now={80} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>NodeJs</div>
                        <ProgressBar now={60} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>ExpressJs</div>
                        <ProgressBar now={65} />
                    </div>
                    <div className="candidatos">
                        <div style={nome}>MySQL</div>
                        <ProgressBar now={60} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalSkills;
