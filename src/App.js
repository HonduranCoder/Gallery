import React from 'react';
import Header from './components/Header.js';
import images from './components/data.js';
import ImageList from './components/ImageList.js';
import Dropdown from './components/Dropdown.js';
import './App.css';

export default class App extends React.Component {
  //State has a keyword that can start as an empty string-> no images, don't use the array use keyword or horns from data.js 
  state = {
    keyword: '',
    horns: '',
    }

    handleKeyword = (e) => {
      this.setState({ keyword: e.target.value})
    }
    
    handleHorns = (e) => {
      this.setState({horns: Number(e.target.value)})
    }
  
  //function to filter the images array with the state option. Line 9.5 filter array = function(images). return all images that match the keyword in State
  render() {
    const filteredImages = images
    .filter((image) => {
      if (this.state.keyword === '') return true
      if (image.keyword === this.state.keyword) return true
      return false
     }) 
     .filter((image) => {
      if (this.state.horns === '') return true
      if (image.horns === this.state.horns) return true
      return false
     })

     //get an array for just the keywords and get an array for all the horn options (Diyana helped here)
     const keywordsArray = images.map(entry=>entry.keyword)
     const hornsArray = images.map(entry=>entry.horns) 
     return (
      <div className ="main">        
        <Header />
                 <Dropdown option={keywordsArray} select={this.state.keyword} handleChange = {this.handleKeyword} />
                  
               
                  <Dropdown option ={hornsArray} select={this.state.horns} handleChange = {this.handleHorns} /> 
                <ImageList filteredImages={filteredImages}/>
                 
        </div>
    )
  }
}