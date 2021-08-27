import React, { Component } from 'react'
import '../styles/Skills.css'
import {Html, Css, Js, SkillReact, Dojo, tapestry, postgres, mysql, java, jasper, python, cplusplus} from "../images/index";
import { Element } from 'react-scroll';
 
export class Skills extends Component {

    render() {

        return (
            <Element name='skills'>
                <div className="about-heading">
                    <h1 className="section-header">
                        Skills
                    </h1>
                </div>

                <div className="skills-section">
                    <table className="skills-table">
                        <tr>
                            <td className="skill">
                                <img alt='Skill' src={Html} />
                                <p>HTML</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={Css} />
                                <p>CSS</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={Js} />
                                <p>JavaScript</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={SkillReact} />
                                <p>React JS</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="skill">
                                <img alt='Skill' src={Dojo} height={100}/>
                                <p>Dojo Toolkit</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={tapestry} height={100} />
                                <p>Apache Tapestry</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={mysql} />
                                <p>MySQL</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={postgres} />
                                <p>PostgreSQL</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="skill">
                                <img alt='Skill' src={jasper} height={100}/>
                                <p>Jasper Reports</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={java}/>
                                <p>Java</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={cplusplus} />
                                <p>C++</p>
                            </td>
                            <td className="skill">
                                <img alt='Skill' src={python} />
                                <p>Python</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </Element>
        )
    }
}

export default Skills
