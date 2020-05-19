import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Animated } from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/MainPage.css'

function MainPage(props) {
    return (
        <>
            <section className="mainPage" id={props.id}>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <Animated animationIn="fadeInUp" animationInDelay={0.3} animationInDuration={0.8} isVisible={true}>
                        <Container>
                            <Col sm={12}>
                                <div style={{ padding: '180px 0' }}>
                                    <Col lg={6} className="firstHalf">
                                        <div className="helloSpan">
                                            <span>Hello I'm</span>
                                        </div>

                                        <h2 className="name">Naveen Chandar</h2>
                                        <h4 className="designation">Frontend Developer</h4>
                                        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                                            <ul style={{ listStyleType: 'none' }} className="profileInfo">
                                                <li><i className="fa fa-envelope"></i><a href="mailto:">naveenchandece@email.com</a></li>
                                                <li><i className="fa fa-phone"></i><a href="callto:">+91 7418887397</a></li>
                                                <li><i className="fa fa-map-marker"></i><address> R.V.E. Layout, Tiruppur, Tamilnadu</address></li>
                                            </ul>

                                            <ul style={{ listStyleType: 'none' }} className='socialIcons'>
                                                <li><a href="facebook"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="twitter"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="github"><i className="fa fa-github"></i></a></li>
                                                <li><a href="dribble"><i className="fa fa-dribbble"></i></a></li>
                                            </ul>
                                        </ScrollAnimation>
                                    </Col>
                                </div>
                                <Col lg={6} className="secondHalf">
                                    {/* <img src='/undraw.png' alt="image" /> */}
                                </Col>
                            </Col>
                        </Container>
                    </Animated>
                </ScrollAnimation>
            </section>
        </>
    )
}

export default MainPage;
