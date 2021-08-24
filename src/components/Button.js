import React, { Component } from 'react'
import './Button.css';

export class Button extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
            {this.props.btnIcon ? <button className={this.props.btnType}>{this.props.btnText} {this.props.btnIcon}</button> : <button className={this.props.btnType}>{this.props.btnText}</button>}
            
            </>
        )
    }
}

export default Button
