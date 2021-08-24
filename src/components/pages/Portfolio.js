import React, { Component } from 'react'
import Card from '../Card'
import '../styles/Portfolio.css'
import demo from '../images/skills/tapestry.png'

export class Portfolio extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="about-heading">
                    <h1 className="section-header">
                        Portfolio
                    </h1>
                </div>
                {this.props.mobile ? <table className="portfolio-1">
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                    
                    
                </table> : <><table className="portfolio-3">
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                </table>
                <table className="portfolio-2">
                    <tr>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                        <td>
                            <Card git="github" live="live" img={demo} projectName="Orion"/>
                        </td>
                    </tr>
                </table>
                </>}
                
            </div>
        )
    }
}

export default Portfolio
