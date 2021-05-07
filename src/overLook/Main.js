import React , { Component } from 'react'
import SearchNav from '../components/SearchNav'
import BookShelf from '../components/BookShelf'

export default class Main extends Component {
    render() {
      
      const backgroundStyle = {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5eaea",
        fontFamily: "cursive",            
        opacity: "1.6",
        fontWeight: "bold",
        fontSize:"18px",
        margin:"0 8px",
        marginTop:"15px"
      };

        return (
          <div 
            className="list-books"
            style={backgroundStyle}
          >
            <div className="list-books-title">
              <h1>MyReads.[BookStore]</h1>
            </div>
            <BookShelf 
              shelf={this.props.shelf} 
              books={this.props.books}
              bookShelfEntry={this.props.bookShelfEntry}
            />
            <SearchNav/>
          </div>
        )
    }
}