import React, { Component } from 'react'
import '../styles/Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { Element } from 'react-scroll';

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
                                <a className="contact-a" to="/">
                                    <AiOutlineMail className="contact-icon"/>
                                    <p>sehajbirsingh97@gmail.com</p>    
                                </a>
                                    
                                <a className="contact-a" to="/">
                                    <FiInstagram className="contact-icon"/>
                                    <p>@sehajbir</p>
                                </a>
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
