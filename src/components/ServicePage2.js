import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/ServicePage.css';
import { ThemeContext } from 'styled-components';

function ServicePage2(props) {
    const themeContext = useContext(ThemeContext);
    const mainPageStyle = {
        theme: themeContext.theme,
        color: themeContext.color
    }
    return (
        <>
            <Col sm={6} className='serviceSecondHalf'>
                <div className="serviceItem shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" style={{ borderRadius: `${props.className.borderRadius}`, padding: `${props.className.padding}`,backgroundColor:mainPageStyle.theme === 'light' ? '#188c91' : '#202026' }}>
                    <i className="fa fa-bullseye purple-color"></i>
                    <h3>UI Design</h3>
                    <p>
                        Strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                            </p>
                </div>
            </Col>
            <Col sm={6} className={`serviceSecondHalf ${props.className}`}>
                <div className="serviceItem shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" style={{ borderRadius: `${props.className.borderRadius}`, padding: `${props.className.padding}`,backgroundColor:mainPageStyle.theme === 'light' ? '#188c91' : '#202026' }}>
                    <i className="fa fa-code iron-color"></i>
                    <h3>Web Development</h3>
                    <p>
                        Focused on writing clean, elegant and efficient code.
                            </p>
                </div>
            </Col>
        </>
    )
}
export default ServicePage2;
