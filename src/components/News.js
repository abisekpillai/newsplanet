import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalResults : 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsPlanet`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8362708e62074e7cac98b7b12db02254&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false,
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

  fetchMoreData = async () => {
    this.setState({page : this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8362708e62074e7cac98b7b12db02254&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles : this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults,
      loading : false
    })
  };

  render() {
    console.log("render");
    return (
      <>
        <h1 className="text-center" style={{margin : '35px 0px'}}>NewsPlanet - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
      
      <div className="container my-3">
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,105):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={new Date(element.publishedAt).toUTCString()} source={element.source.name?element.source.name:"Unknown"}/>
                 </div>
        })}
        </div>
      </div>

        </InfiniteScroll>

        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/12)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News