import React, { Component } from 'react';
import '../styles/Hero.css';
import {FiInstagram} from "react-icons/fi";
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineDownload, AiOutlineArrowDown} from 'react-icons/ai';
import Button from '../Button';
import heroImg from '../images/hero.png'

export class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {

        function getWindowHeight(){
            return window.innerHeight - 70;
        }

        const {mobile} = this.props;

        return (
            <>
            {mobile  ?<div>
                <table style={{height: getWindowHeight()}} className="hero-table-mobile">
                    <tr className="hero-tr-img">
                        <img style={{width:"65%", borderRadius: "50%", marginTop: "40px"}} src={heroImg} alt="" />
                    </tr>
                    <tr className="hero-tr-about">
                        <td className="about-mobile">
                            <h1>Hi! I'm Sehajbir</h1> 
                            <h3>Creative Frontend Designer with 2+ years of Industry Experience</h3>
                            <Button btnType="btn-normal" btnText="Contact Me" />
                            <Button btnType="btn-outline" btnText="Resume" btnIcon={<AiOutlineDownload/>}></Button>
                        </td>
                    </tr>
                    <tr style={{display: "block", marginTop: "20px"}}>
                        <table className="social-icons-mobile">
                            <tr>
                                <td>
                                    <FiInstagram />
                                </td>
                                <td>
                                    <AiOutlineLinkedin />
                                </td>
                                <td>
                                    <AiOutlineGithub/>
                                </td>
                            </tr>
                        </table>
                    </tr>
                </table>
            </div>  : <div>
                <table style={{height: getWindowHeight()}} className="hero-table">
                    <tr className="hero-tr">
                        <td className="socials">
                            <table className="social-icons">
                                <tr>
                                    <FiInstagram />
                                </tr>
                                <tr>
                                    <AiOutlineLinkedin />
                                </tr>
                                <tr>
                                    <AiOutlineGithub/>
                                </tr>
                            </table>
                        </td>
                        <td className="about">
                            <h1>Hi! I'm Sehajbir</h1> 
                            <h3>Creative Frontend Designer with 2+ years of Industry Experience</h3>
                            <Button btnType="btn-normal" btnText="Contact Me" />
                            <Button btnType="btn-outline" btnText="Resume" btnIcon={<AiOutlineDownload/>}></Button>
                        </td>
                        <td className="image">
                            <img style={{width:"80%", borderRadius: "50%"}} src={heroImg} alt="" />
                        </td>
                    </tr>
                </table>
            </div>}
            <div className="scrollDown">
                <AiOutlineArrowDown />
            </div>
            </>
            
        )
    }
}

export default Hero
