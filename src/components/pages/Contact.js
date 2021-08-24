import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'

export class Contact extends Component {
    render() {
        return (
            <div>
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
                                <Link className="contact-link" to="/">
                                    <AiOutlineMail className="contact-icon"/>
                                    <p>sehajbirsingh97@gmail.com</p>    
                                </Link>
                                    
                                <Link className="contact-link" to="/">
                                    <FiInstagram className="contact-icon"/>
                                    <p>@sehajbir</p>
                                </Link>
                            </div>
                        </td>
                        <td className="contact-right">

                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Contact
