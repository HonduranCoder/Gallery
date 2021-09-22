import React from 'react';

class ImageItem extends React.Component {
    render () {
        return (
            <li>
                <img alt={this.props.ddescription} src={this.props.url} />
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </li>
        )
    }

}

export default ImageItem;