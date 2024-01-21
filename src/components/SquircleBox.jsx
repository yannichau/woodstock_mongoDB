import React, { Component } from "react";
import './SquircleBox.css';

class SquircleBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        if (this.props.appearance === "teal") {
            return (
                <div className="col md-4 p-3 text-white rounded-3 mt-2 " style={{ backgroundColor:'teal'}}>
                    <h4>{this.props.title}</h4>
                    <div>{this.props.content}</div>
                </div>
            );
        } else if (this.props.appearance === "dark") {
            return (
                <div className="col md-4 p-3 text-white rounded-3 mt-2 " style={{ backgroundColor: 'rgb(51,51,51)'}}>
                    <h4>{this.props.title}</h4>
                    <div>{this.props.content}</div>
                </div>
            );
        } else if (this.props.appearance === "bordered-grey") {
            return (
                <div className="col md-4 p-3 bg-light border rounded-3 mt-2 ">
                    <h4>{this.props.title}</h4>
                    <div>{this.props.content}</div>
                </div>
            );
        } else if (this.props.appearance === "bordered-white") {
            return (
                <div className="col md-4 p-3 bg-white border-dark border rounded-3 mt-2 ">
                    <h4>{this.props.title}</h4>
                    <div>{this.props.content}</div>
                </div>
            );
        }else { // "grey" - grey without border
            return (
                <div className="col md-4 p-3 bg-light rounded-3 mt-2  ">
                    <h4>{this.props.title}</h4>
                    <div>{this.props.content}</div>
                </div>
            );
        }
    }

}

export default SquircleBox;