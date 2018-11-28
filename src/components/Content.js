import React, { Component } from 'react';

const IMAGES_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"

export class Content extends Component {

  render() {

    let bookItems = this.props.books.map(function(book,index){
      return <li key={index} className="list_item">
      <h3>{book.title}</h3>
      <img className="image_link" src={`${IMAGES_URL}${book.imageLink}`} />
      </li>
    })

    return (
      <div className="book_container">
      {bookItems}
      </div>
    )
  }

}


export default Content
