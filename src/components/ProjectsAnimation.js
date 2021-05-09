import React from 'react'
import Lottie from "lottie-react";
import webDevelopment from '../assets/8633-web-development.json'
import Container from "@material-ui/core/Container";

function ProjectsAnimation() {
    return (
        <Container>
        <Lottie animationData={webDevelopment} style={{height: '300px'}}/>;
        </Container>
    )
}

export default ProjectsAnimation
