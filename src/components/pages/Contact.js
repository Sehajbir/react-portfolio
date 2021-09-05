import React, { Component } from 'react'
import '../styles/Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { Element } from 'react-scroll';
import { BrowserRouter, Link } from 'react-router-dom';

export class Contact extends Component {
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

                        </td>
                    </tr>
                </table>
            </Element>
        )
    }
}

export default Contact
