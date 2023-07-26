import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8362708e62074e7cac98b7b12db02254";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles : parsedData.articles})
  }

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2>NewsPlanet - Top Headlines</h2>
        {this.state.articles.map((element)=>{console.log(element)})}
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,105):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
        })}
        </div> 
      </div>
    )
  }
}

export default News