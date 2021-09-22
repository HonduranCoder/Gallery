import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <li className="image-conatiner">
                   <img className="images" src= {this.props.url} alt = {this.props.text}/> <h1>{this.props.title}</h1><p>{this.props.description} is like a {this.props.keyword} with {this.props.horns} horn(s)</p>
            </li>
        )
    }
}