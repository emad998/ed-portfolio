import React from 'react'
import Lottie from "lottie-react";
import contactUsAnimation from '../assets/37147-contact-us.json'
import Container from "@material-ui/core/Container";

function ContactAnimation() {
    return (
        <Container>
            <Lottie animationData={contactUsAnimation} style={{height: '300px', marginTop: "10px"}}/>
        </Container>
    )
}

export default ContactAnimation
