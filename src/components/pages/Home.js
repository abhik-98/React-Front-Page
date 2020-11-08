import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/header-bg.jpg';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import About from './About';
import Team from '../common/Team';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to studio"
                    subTitle=" Its nice to meet you"
                    buttonText=" Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services></Services>
                <Portfolio/>
                <Team/>
                <Contact/>
            </div>
        );
    }
}

export default Home;