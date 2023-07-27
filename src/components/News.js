import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8362708e62074e7cac98b7b12db02254";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles : parsedData.articles, totalResults : parsedData.totalResults})
  }

  handleNextClick = async () =>{
    console.log("Next button is clicked");
    if(this.state.page+1>Math.ceil(this.state.totalResults/12)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8362708e62074e7cac98b7b12db02254&page=${this.state.page+1}&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles : parsedData.articles,
        page : this.state.page+1
      })
    }
  }

  handlePrevClick = async () =>{
    console.log("Prev button is clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8362708e62074e7cac98b7b12db02254&page=${this.state.page-1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles : parsedData.articles,
      page : this.state.page-1
    })
    
  }

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2>NewsPlanet - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,105):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News