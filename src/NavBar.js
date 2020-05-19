import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './css/NavBar.css';

function NavBar() {
    const [bgColor, setBgColor] = useState('');
    const [boxShadow, setBoxShadow] = useState('');
    const [padding, setPadding] = useState('');
    const [windowScroll, setWindowScroll] = useState('');
    useEffect(() => {
        document.addEventListener('scroll', () => {
            setBoxShadow(window.scrollY > 50 ? "rgb(0, 120, 248) 2px 3px 10px 2px" : "")
            setPadding(window.scrollY > 50 ? "15px" : "")
            setBgColor(window.scrollY < 50 ? "inherit" : "#202026");
            setWindowScroll(window.scrollY);
        })
    })
    return (
        <Container>
            {windowScroll < 50 ?
                <Nav justify variant="tabs" style={{ backgroundColor: bgColor }} defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#MainPage">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#AboutPage">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#SkillsPage">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#CarrierPage">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#ContactPage">Contact</Nav.Link>
                    </Nav.Item>
                </Nav> :
                <Nav justify variant="tabs" style={{ backgroundColor: bgColor,position:'fixed',maxWidth:'1140px', width:'100%',zIndex:'1' }} defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#MainPage">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#AboutPage">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#SkillsPage">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#CarrierPage">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#ContactPage">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            }
        </Container>
    )
}

export default NavBar;