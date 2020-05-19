import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './css/ContactPage.css'

function ContactFooter() {
    const iconColor = {
        color:'white'
    }
    return (
        <>
            <Col sm={12} className="copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <Row>
                    <Col sm={12}>
                        <ul className="socialIcon">
                            <li><a href="facebook" style={iconColor}><i className="fa fa-facebook"></i></a></li>
                            <li><a href="twitter" style={iconColor} ><i className="fa fa-twitter"></i></a></li>
                            <li><a href="github" style={iconColor}><i className="fa fa-github"></i></a></li>
                            <li><a href="dribble" style={iconColor}><i className="fa fa-dribbble"></i></a></li>
                        </ul>
                    </Col>
                    <Col sm={6}/>
                </Row>
            </Col>
        </>
    )
}

export default ContactFooter;
