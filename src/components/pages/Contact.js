import React, { Component } from 'react';
import Field from '../common/Field';
import * as Yup from 'yup';
import {withFormik} from 'formik';
const fields ={
    sections:[
        [
            {name:'name',elementName:'input', type:'text', placeholder: 'Your name'},
            {name:'email',elementName:'input', type:'email', placeholder: 'Your email'},
            {name:'phone',elementName:'input', type:'text', placeholder: 'Your phone'}

        ],
        [
            {name:'message',elementName:'textarea', type:'text', placeholder: 'Your message'}

        ]
    ]
    
}

class Contact extends Component {
    

    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" noValidate="novalidate">
                            <div className="row align-items-stretch mb-5">
                                {
                                    fields.sections.map((section,index)=>{
                                        
                                        return (<div className="col-md-6" key={index}>
                                                    {
                                                        section.map((field,i)=>{
                                                            return(
                                                                <Field 
                                                                {...field} 
                                                                key={i}
                                                                value= {this.props.values[field.name]}
                                                                name={field.name}
                                                                onChange= {this.props.handleChange}
                                                                onBlur={this.props.handleBlur}
                                                                touched={this.props.touched[field.name]}
                                                                errors={this.props.errors[field.name]}

                                                                />
                                                            )
                                                        })
                                                    }
                                            </div>)
                                    })
                                }
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                                >Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default withFormik ({
    mapPropsToValues:()=>({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    validationSchema:Yup.object().shape({
        name: Yup.string()
                .min(3,'Name should be between 3 to 10 characters')
                .required('You should give your name'),
        email: Yup.string()
                .email('Provide valid email')
                .required(),
        phone:Yup.number()
                .min(10,'Phone number should be of 10 digits')
                .max(10).required('Phone number is Mandatory'),
        message: Yup.string()
                .min(100,'Minimum 100 charater are required')
                .max(500,'Limit is of 500 character')

    }),
    handleSubmit: (values, {setSubmitting})=>{
        alert("you submitted the form");
        console.log(JSON.stringify(values));
    }
})(Contact);