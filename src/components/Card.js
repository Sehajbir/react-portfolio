import React, { Component } from 'react'
import './Card.css'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BrowserRouter, Link} from 'react-router-dom';

export class Card extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.data);
        return (
            <>
                <div className="card-bg">
                    <img src={this.props.data.image} alt="" />
                    <p className="projectName">{this.props.data.projectName}</p>
                    <div className="card-footer">
                        <table className="card-props">
                            <tr>
                                {this.props.data.code === "N.A." && this.props.data.live === "N.A." ? 
                                <BrowserRouter>
                                    <td className="info">
                                        <Link to={{pathname: this.props.data.additional}} target="_blank">
                                            Info
                                        </Link>
                                    </td>
                                </BrowserRouter>
                                :
                                <BrowserRouter>
                                    <td className="git">
                                        {this.props.data.code === "N.A." ? <p title="Confidential" className="disabled"> Code </p> : <Link to={{pathname: this.props.data.code}} target="_blank">
                                            <p>Code</p>
                                        </Link>}
                                        
                                    </td>
                                    <td className="live">
                                        {this.props.data.live === "N.A." ? <p title="Confidential" className="disabled"> Live </p> :  <Link to={{pathname: this.props.data.live}} target="_blank">
                                            <p>Live</p>
                                        </Link>}
                                       
                                    </td>
                                </BrowserRouter>
                                } 
                                
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Card
