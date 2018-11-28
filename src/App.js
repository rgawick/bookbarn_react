import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"

class App extends Component {

  constructor(props) {
    super(props)
// initialize the state
    this.state = {
        books: []

    }
}

  componentDidMount() {

    fetch(BOOKS_URL).then((data) => {
      return data.json()
    }).then((json) => {
      this.setState({books : json})
    })

}

  render() {
    return (
      <div>
      <Header/>
      <Content books = {this.state.books}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
