import React, { Component } from 'react'
import BooksList from './BooksList'

 /* Reference : Ternary Conditional Rendering (&&)
     Link :
        [https://www.robinwieruch.de/conditional-rendering-react ]*/

export default class BookShelf extends Component {
    render() {
        return (
            <div className="list-books-content">
              <div>
                { this.props.shelf.map( (shelf, bookID) => {
                  const shelfBooks = this.props.books.filter( book => book.shelf === shelf.value)
                  return shelfBooks.length > 0 &&            
                    <div 
                      className="bookshelf" 
                      key={bookID}
                      shelf={shelf}>
                    <h2 className="bookshelf-title">
                      { shelf.title }
                    </h2>
                    <BooksList                    
                      books={shelfBooks}
                      shelf={this.props.shelf}
                      bookShelfEntry={this.props.bookShelfEntry}
                    />
                    </div>            
                })}
              </div>
            </div>
        )
    }
}