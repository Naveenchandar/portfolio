import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/ContactPage.css';

function ContactInfo() {
    return (
        <>
            <Col xs={12} className="contactSectionTitle wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <h3>Contact Me</h3>
            </Col>
            <Col xs={12} className="footerAddress">
                <Row>
                    <Col xs={12} md={4}>
                        <div className="addressFooterItem dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <div className="eachIcon">
                                <i className="fa fa-location-arrow"></i>
                            </div>
                            <div className="eachInfo">
                                <h4>Address</h4>
                                <address>
                                R.V.E. Layout, Tiruppur, <br />
                                                 Tamilnadu
                                            </address>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="addressFooterItem dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <div className="eachIcon">
                                <i className="fa fa-envelope-o"></i>
                            </div>
                            <div className="eachInfo secondeachInfo">
                                <h4>Email</h4>
                                <a href="mailto:yourmail@email.com">naveenchandece@gmail.com</a><br />
                                <a style={{ visibility: 'hidden' }} href="mailto:yourmail@email.com">naveenchandece@gmail.com</a><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="addressFooterItem dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                            <div className="eachIcon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="eachInfo secondeachInfo">
                                <h4>Phone</h4>
                                <a href="callto:+91 7418887397">+91 7418887397</a><br />
                                <a style={{ visibility: 'hidden' }} href="callto:+91 7418887397">+91 7418887397</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ContactInfo;
