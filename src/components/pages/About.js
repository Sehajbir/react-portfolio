import React, { Component } from 'react';
import '../styles/About.css';

export class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            mode : "light"
        }
    }

    render() {

        function getWindowHeight(){
            return window.innerHeight - 250;
        }

        return (
            <div>
                <div className="about-heading">
                    <h1 className="section-header">
                        About Me
                    </h1>
                </div>

                <table className="about-sections">
                    <tr>
                        <td style={{height: getWindowHeight()}} className="txt-section">
                            <p>I am <b>Sehajbir Singh</b>, a Computer Science graduate from Thapar Institute of Engineering and Technology (TIET).</p>
                            <p>I started working on Frontend development in my early college days, slowly building up my skills by working on many projects.</p>
                            <p>In my final year, I went for an internship as a Software Engineering Intern at Interra Systems, where my primary focus of work was to improve the UI of one their products.</p>
                            <p>I later joined the same organinsation as a Full time employee and have been working since then as a Software Engineer.</p>
                        </td>
                        <td style={{height: getWindowHeight()}} className="timeline-section">
                            <span className="timelineImg"></span>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default About
