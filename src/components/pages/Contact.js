import React, { Component } from 'react'
import '../styles/Contact.css'
import {AiOutlineMail, AiOutlineSend} from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { Element } from 'react-scroll';
import { BrowserRouter, Link } from 'react-router-dom';
import {Button} from '../Button'

export class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            email_error: ''
        }
    };


    handleEmailChange = event =>{
        this.setState({ email : event.target.value}, () =>{
            this.validateEmail();
        });
    };

    validateEmail = () =>{
        const {email} = this.state;
        this.setState({
            email_error: 
                (email.length > 3 && email.indexOf("@") != -1  && email.lastIndexOf(".") != -1 && email.substring(email.lastIndexOf(".")).length > 2) ? null : "Please enter a valid Email"
        })
    }

    render() {
        return (
            <Element name='contact'>
                <div className="about-heading contact">
                    <h1 className="section-header">
                        Contact Me
                    </h1>
                    <p>Get in touch</p>
                </div>

                <table className="contact-table">
                    <tr>
                        <td className="contact-left">
                            <div className="contact-details">
                                <div className="contact-a">
                                    <BrowserRouter>
                                        <Link to={{pathname: "mailto: sehajbirsingh97@gmail.com"}} target="_blank">
                                            <AiOutlineMail className="contact-icon"/>
                                            <p>sehajbirsingh97@gmail.com</p>    
                                        </Link>
                                    </BrowserRouter>
                                </div>
                                    
                                <div className="contact-a">
                                    <BrowserRouter>
                                        <Link to={{pathname: "https://www.instagram.com/sehaj.bir/"}} target="_blank">
                                            <FiInstagram className="contact-icon"/>
                                            <p>@sehajbir</p>
                                        </Link>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </td>
                        <td className="contact-right">
                            <input type="text" className="contact-form" placeholder="Name" />
                            <input onChange={this.handleEmailChange} type="text" className="contact-form" placeholder="Email" />
                            <div className="email-error">
                                {this.state.email_error}
                            </div>
                            <br/>
                            <textarea placeholder="Message" className="message" name="Message" id="" cols="30" rows="10"></textarea>
                            <br/>
                            <Button btnIcon={<AiOutlineSend/>} btnType="btn-outline"></Button>
                        </td>
                        
                    </tr>
                </table>
            </Element>
        )
    }
}

export default Contact
