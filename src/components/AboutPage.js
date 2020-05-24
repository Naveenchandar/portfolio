import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animated } from "react-animated-css";
import '../css/AboutPage.css';
import { ThemeContext } from 'styled-components';

function AboutPage(props) {
    const themeContext = useContext(ThemeContext);
    const mainPageStyle = {
        color: themeContext.color
    }
    return (
        <section id={props.id}>
            <Animated animationIn="fadeInUp" animationInDelay={0.3} animationInDuration={0.8} isVisible={true}>
                <Container>
                    <Row className='section-separator'>
                        <Col sm={6} className="aboutFirstHalf">
                            <div className="about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                <img src="assets/images/ab-img.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col sm={6} className="aboutSecondHalf">
                            <div className="aboutInner" style={mainPageStyle}>
                                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                                <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">I’m Naveen - Frontend developer at Lirctek Technologies, Bangalore.&nbsp; Web technology enthusiast. Passionate about creating user intuitive design. Obsessed with performance tuning. </p>
                                {/* strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p> */}
                                <div className="aboutTag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                    <ul>
                                        <li><span>Html</span></li>
                                        <li><span>Css</span></li>
                                        <li><span>Bootstrap</span></li>
                                        <li><span>Javascript</span></li>
                                        <li><span>ReactJs</span></li>
                                    </ul>
                                </div>
                                <a href="downloadcv" className="cvDownload btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i className="fa fa-download"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </Animated>
        </section>
    )
}

export default AboutPage;
