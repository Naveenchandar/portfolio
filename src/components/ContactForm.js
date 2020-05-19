import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/ContactPage.css';

function ContactForm() {
    const darkVersinFormControl = {
        boxShadow: '0 0px 2px 0 rgba(255, 255, 255, 0.8), 0 0px 1px 1px rgba(255, 255, 255, 0.8)'
    }
    const formControlStyle = {
        backgroundColor: 'transparent'
    }
    const buttonStyle = {
        backgroundColor: '#188c91'
    }
    return (
        <>
            <Col sm={12} md={6} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <form id="contactForm" className="singleForm quate-form wow fadeInUp" data-toggle="validator" noValidate={true}>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <Row>
                        <Col sm={12} md={6}>
                            <input name="name" className="contactName form-control" style={darkVersinFormControl,formControlStyle} id="name" type="text" placeholder="First Name" required="" />
                        </Col>
                        <Col sm={12} md={6}>
                            <input name="name" className="contactEmail form-control" style={darkVersinFormControl,formControlStyle} id="L_name" type="text" placeholder="Last Name" required="" />
                        </Col>
                        <Col sm={12}>
                            <input name="name" className="contactSubject form-control" style={darkVersinFormControl,formControlStyle} id="email" type="email" placeholder="Your Email" required="" />
                        </Col>
                        <Col sm={12}>
                            <textarea className="contactMessage" id="message" rows="6" placeholder="Your Message" style={darkVersinFormControl,formControlStyle} required=""></textarea>
                        </Col>
                        <Col sm={12} className="btn-form">
                            <button type="submit" className="btn btn-fill btn-block disabled" style={buttonStyle} id="form-submit">Send Message</button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </>
    )
}

export default ContactForm;
