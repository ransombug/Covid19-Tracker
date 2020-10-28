import React from 'react'
import {Container} from 'reactstrap'
import '../App.css'

import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
    return (
        <Container
        id="footer"
         fluid  tag="footer" 
         className="fixed-bottom text-center bg-info text-white text-uppercase"
        >
            <AiFillFacebook className="m-1"></AiFillFacebook>
            <AiFillInstagram className="m-1"></AiFillInstagram>
            <AiFillLinkedin className="m-1"></AiFillLinkedin>
            <AiFillTwitterCircle className="m-1"></AiFillTwitterCircle>
            <p>COPYRIGHT 2020. ALL RIGHTS RESERVED.</p>
        </Container>
    )
}
