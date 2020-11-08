import React, { Component } from 'react';
import img1 from '../assets/team/1.jpg';
import img2 from '../assets/team/2.jpg';
import img7 from '../assets/logos/creative-market.jpg';
import img4 from '../assets/logos/designmodo.jpg';
import img5 from '../assets/logos/envato.jpg';
import img6 from '../assets/logos/themeforest.jpg';
import img3 from '../assets/team/3.jpg';
import {Link}  from 'react-router-dom';
import TeamItem from './TeamItem';
const Teams=[
    {name:'Kay Garland', title:'Lead Designer', image:img1},
    {name:'Larry Parker', title:'Lead Marketer', image:img2},
    {name:'Diana Petersen', title:'Lead Developer', image:img3}
];
class Team extends Component {
    render() {
        return (
        <div>
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {
                        Teams.map((team,index)=>{
                           return <TeamItem {...team} key={index}/>
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
            </section>

            <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link href="#!"><img className="img-fluid d-block mx-auto" src={img4} alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link href="#!"><img className="img-fluid d-block mx-auto" src={img5} alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link href="#!"><img className="img-fluid d-block mx-auto" src={img6} alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <Link href="#!"><img className="img-fluid d-block mx-auto" src={img7} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default Team;