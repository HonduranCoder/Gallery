import React from 'react';
import Header from './components/Header.js';
import images from './components/data.js';
import ImageList from './components/ImageList.js';
import './App.css';

export default class App extends React.Component {
  //State has a keyword that can start as an empty string-> no images, don't use the array use keyword or horns from data.js 
  state = {
    keyword: ''
    }

    handleChange = (e) => {
      this.setState({ keyword: e.target.value})
    }
  
  //function to filter the images array with the state option. Line 9.5 filter array = function(images). return all images that match the keyword in State
  render() {
    const filteredImages = images.filter((image) => {
      if (this.state.keyword === '') return true
      if (image.keyword === this.state.keyword) return true
      return false
     }) 
    return (
      <>
        <Header />
        {/*need a dropdown to create filter option, establish state on line 7.5, */} 
        <select onChange= {this.handleChange}>
          <option value ="">All</option>
          <option value ="uniWhal">UniWhal</option>
          <option value ="rhino">Rhino</option>
          <option value ="unicorn">Unicorn</option>
          <option value ="uniLego"> Unilego</option>
          <option value ="narwhal"> Narwhal</option>
          <option value ="triceratops"> Triceratops</option>
          <option value ="markor">Markor</option>
          <option value ="mouflon">Mouflan</option>
          <option value ="chameleon">Chameleon</option>
          <option value ="lizard">Lizard</option>
          <option value ="dragon">Dragon</option>
          </select>
        <ul>
        {
          filteredImages.map(image =>
            <ImageList 
              url = {image.url}
              title = {image.title}
              description = {image.description}
              keyword = {image.keyword}
              horns ={image.horns} 
            />)
        }
        </ul>
      </>
    );
  }
}