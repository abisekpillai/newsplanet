import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "general"
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8362708e62074e7cac98b7b12db02254&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
  }

  async componentDidMount(){
    this.updateNews();
  }

  handleNextClick = async () =>{
    this.setState({page : this.state.page+1});
    this.updateNews();
  }

  handlePrevClick = async () =>{
    this.setState({page : this.state.page-1});
    this.updateNews();
  }

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsPlanet - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,105):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={new Date(element.publishedAt).toUTCString()} source={element.source.name?element.source.name:"Unknown"}/>
                 </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/12)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News