import React from 'react'
import ImageItem from './ImageItem.js'

class ImageList extends React.Component {
    
    render() {
        return ( 
            <ul>
                {
                this.props.filteredImages.map(image => 
                (<ImageItem 
                url = {image.url}
                title = {image.title}
                description = {image.description}
                keyword = {image.keyword}
                horns ={image.horns} />)
                )}
            </ul>
            );
    }
}

export default ImageList;