import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';
import { FaRegMoon, FaDev} from "react-icons/fa";
import {FiSun, FiMenu} from "react-icons/fi";
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineSend, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {HiOutlineDocumentText} from 'react-icons/hi';

class Navbar extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            mode: "light",
            menuOpen: false
        }
    }


    render(){
        var mode = "light";

    const handleModeChange = () => {
        console.log("here");
        const body = document.getElementsByTagName('body')[0];
        if(this.state.mode === "light"){
            body.setAttribute("data-theme", "dark");
            this.setState({mode : "dark"});
            return;
        }
        
        if(this.state.mode === "dark"){
            body.setAttribute("data-theme", "light");
            this.setState({mode : "light"});
            return;
        }
    }

    const {mobile} = this.props;

    const openMenuItems = () =>{
        console.log("function called");
        var ele = document.getElementById("mobile-menu");
        console.log(ele);
        if(ele.style.display === "none"){
            ele.style.display = "flex";
            this.setState({menuOpen: true});
        }
        else{
            ele.style.display = "none"
            this.setState({menuOpen: false});
        }

        
    }

    // checkMobile();
    // if(width, height > )

    return (
        <>
        {mobile ? 
        <>
                <div className="navbar-mobile-container">
                    <Link to="/" className="navbar-logo-mobile">
                        Sehaj
                    </Link>
                </div>
                <div className="navbar-mobile-icon">
                    {this.state.menuOpen === true ? <AiOutlineClose  onClick={openMenuItems}/> : <FiMenu onClick={openMenuItems}/>}
                </div>

                <div className="navbar-mobile-card" id={"mobile-menu"} style={{display: "none"}}>
                    <table className="mobile-menu-items">
                        <tr>
                            <td>
                                <AiOutlineHome/><p>Home</p>
                            </td>
                            <td>
                                <AiOutlineInfoCircle/><p>About</p>
                            </td>
                            <td>
                            <HiOutlineDocumentText/> <p>Skills</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <AiOutlineFundProjectionScreen/> <p>Portfolio</p>
                            </td>
                            <td>
                                <AiOutlineSend/> <p>Contact Me</p>
                            </td>
                            <td>
                                {this.state.mode === "light" ? <FiSun onClick={handleModeChange}/> : <FaRegMoon onClick={handleModeChange}/>}<p>Theme</p>
                            </td>
                        </tr>
                    </table>
                </div>
                </>
            :
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        Sehaj
                    </Link>
                    <ul className="nav-menu">
                        <li className="menu-item">
                            <Link to='/' id="home" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/' id="about" className="nav-links">
                                About
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/' id="skills" className="nav-links">
                                Skills
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/' id="portfolio" className="nav-links">
                                Portfolio
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/' id="contactMe" className="nav-links">
                                Contact Me
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/' className="nav-links" onClick={handleModeChange}>
                                {this.state.mode === "light" ? <FiSun/> : <FaRegMoon/>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        }
        </>
    )
    }    
}

export default Navbar
