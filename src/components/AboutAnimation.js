import React from 'react'
import Lottie from "lottie-react";
import aboutUsAnimation from '../assets/9694-about.json'
import Container from "@material-ui/core/Container";

function AboutAnimation() {
    return (
        <Container>
            <Lottie animationData={aboutUsAnimation} style={{height: '200px', marginTop: "10px"}}/>;
        </Container>
    )
}

export default AboutAnimation
