import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary" style={{left: '90%',zIndex : '1'}}>
        {source}
        </span>
          <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/R.ad72b7fecbe0de6526bdde511965ff04?rik=%2bZcPTM8g%2bKiTmQ&riu=http%3a%2f%2fentechdesigns.com%2fnew_site%2fwp-content%2fthemes%2fen-tech%2fimages%2fnot_available_icon.jpg&ehk=UI0frGbrfodEmx3CUtAoVkW7kPtvieYdu3SuVf0niHk%3d&risl=&pid=ImgRaw&r=0"} className="card-img-top" alt="..." width="400" height="200"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} at {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem