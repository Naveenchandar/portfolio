import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import BorderBox from './BorderBox';
import { ThemeContext } from 'styled-components';

function Experience() {
    const themeContext = useContext(ThemeContext);
    const mainPageStyle = {
        color: themeContext.color
    }
    const expStyle = {
        paddingLeft: '30px',
        color: 'white'
    }
    const BackgroundColor = {
        backgroundColor: themeContext.theme === 'light' ? '#188c91' : '#202026'
    }
    return (
        <Col sm={12} md={6}>
            <div className="workExp" style={expStyle}>
                <h3 style={mainPageStyle}>Work Experience</h3>
                <div className="experienceDeatils">
                    <div className="workItem dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" style={BackgroundColor}>
                        <BorderBox>
                            <h4>Frontend Developer - <a href="https://www.digiscifi.com/" target="_blank" style={{color:'#fff'}} className='univName'>DigiSciFi Technologies</a></h4>
                            <div className="eduYear">Aug 2018- Mar 2019</div>
                            <span>Responsibility :</span>
                            <ul className="workResponsibility">
                                <li><i className="fa fa-circle"></i>Design and develop static Websites</li>
                                <li><i className="fa fa-circle"></i>Mobile Friendly Websites</li>
                            </ul>
                        </BorderBox>
                    </div>
                    <div className="workItem dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" style={BackgroundColor}>
                        <BorderBox>
                            <h4>Frontend Developer - <a href="http://lirctek.com/" target="_blank" style={{color:'#fff'}} className='univName'>Lirctek Technologies</a></h4>
                            <div className="eduYear">Mar 2019 - Present</div>
                            <span>Responsibility :</span>
                            <ul className="workResponsibility">
                                <li><i className="fa fa-circle"></i>Design and develop dynamic Websites</li>
                                <li><i className="fa fa-circle"></i>Creation of API's</li>
                                <li><i className="fa fa-circle"></i>Refinement of code</li>
                            </ul>
                        </BorderBox>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Experience;
