import React, {Component} from 'react'
import '../styles/Navbar.css';
import { FaRegMoon} from "react-icons/fa";
import {FiSun, FiMenu} from "react-icons/fi";
import {HiOutlineDocumentText} from 'react-icons/hi';
import { Link} from 'react-scroll'

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
                    <a href="#" to="/" className="navbar-logo-mobile">
                        Sehaj
                    </a>
                </div>
                <div className="navbar-mobile-icon">
                    {this.state.menuOpen === true ? <a href="#"iOutlineClose  onClick={openMenuItems}/> : <FiMenu onClick={openMenuItems}/>}
                </div>

                <div className="navbar-mobile-card" id={"mobile-menu"} style={{display: "none"}}>
                    <table className="mobile-menu-items">
                        <tr>
                            <td>
                                <a href="#"iOutlineHome/><p>Home</p>
                            </td>
                            <td>
                                <a href="#"iOutlineInfoCircle/><p>About</p>
                            </td>
                            <td>
                            <HiOutlineDocumentText/> <p>Skills</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#"iOutlineFundProjectionScreen/> <p>Portfolio</p>
                            </td>
                            <td>
                                <a href="#"iOutlineSend/> <p>Contact Me</p>
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
                    <a href="#" to="/" className="navbar-logo">
                        Sehaj
                    </a>
                    <ul className="nav-menu">
                        <li className="menu-item">
                            <Link to="home" smooth="true">
                            <a href="#" id="home" className="nav-links">
                                Home
                            </a>
                            </Link>
                        </li>
                        <li className="menu-item">
                        <Link to="about" smooth="true">
                            <a href="#"  id="about" className="nav-links">
                                About
                            </a>
                        </Link>
                        </li>
                        <li className="menu-item">
                        <Link to="skills" smooth="true">
                            <a href="#"  id="skills" className="nav-links">
                                Skills
                            </a>
                        </Link>
                        </li>

                        <li className="menu-item">
                        <Link to="portfolio" smooth="true">
                            <a href="#"  id="portfolio" className="nav-links">
                                Portfolio
                            </a>
                        </Link>
                        </li>
                        <li className="menu-item">
                        <Link to="contact" smooth="true">
                            <a href="#"  id="contactMe" className="nav-links">
                                Contact Me
                            </a>
                        </Link>
                        </li>
                        <li className="menu-item">
                            <a href="#"  className="nav-links" onClick={handleModeChange}>
                                {this.state.mode === "light" ? <FiSun/> : <FaRegMoon/>}
                            </a>
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
