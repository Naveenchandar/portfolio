import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/CarrierPage.css';
import BorderBox from './BorderBox';
import { ThemeContext } from 'styled-components';

function Education() {
    const themeContext = useContext(ThemeContext);
    const mainPageStyle = {
        color: themeContext.color
    }
    const educationStyle = {
        color: 'white',
        paddingRight: '30px'
    }
    const BackgroundColor = {
        backgroundColor: themeContext.theme === 'light' ? '#188c91' : '#202026'
    }
    return (
        <Col sm={12} md={6}>
            <div className="education" style={educationStyle}>
                <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" style={mainPageStyle}>Education</h3>
                <div className="educationDeatils">
                    <div className={`educationItem dark-bg wow fadeInUp`} data-wow-duration="0.8s" data-wow-delay="0.3s" style={BackgroundColor}>
                        <BorderBox>
                            <h4>B.E. - Electronics &amp; Communication Engineering From <a style={{ color: '#fff' }} href="https://kongu.ac.in/" target="_blank" className='univName'>Kongu Engineering College</a></h4>
                            <div className="eduYear">2012-2016</div>
                            {/* <p>It is a long established fact that a reader will be distracted by the readable content of a
                                        page when looking at its layout. The point of using  Lorem Ipsum </p> */}
                        </BorderBox>
                    </div>
                    <div className="educationItem dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" style={BackgroundColor}>
                        <BorderBox>
                            <h4>Grade 12 From <a href="college" style={{ color: '#fff' }} className='univName'>Universal Matric Higher Secondary School</a></h4>
                            <div className="eduYear">2011-2012</div>
                        </BorderBox>
                    </div>
                    <div className="educationItem dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" style={BackgroundColor}>
                        <BorderBox>
                            <h4>Grade 10 From <a href="college" style={{ color: '#fff' }} className='univName'>Universal Matric Higher Secondary School</a></h4>
                            <div className="eduYear">2009-2010</div>
                        </BorderBox>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Education;
