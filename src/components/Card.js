import React, { Component } from 'react'
import './Card.css'
import {AiOutlineInfoCircle} from 'react-icons/ai'

export class Card extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <>
                <div className="card-bg">
                    <img src={this.props.img} alt="" />
                    <p className="projectName">{this.props.projectName}</p>
                    <div className="card-footer">
                        <table className="card-props">
                            <tr>
                                <td className="git">
                                    <p>Code</p>
                                </td>
                                <td className="live">
                                    <p>Live</p>
                                </td>
                                <td className="info">
                                    <AiOutlineInfoCircle/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Card
