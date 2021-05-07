import React, { Component } from 'react'
import BookContent from './BookContent'

export default class BooksList extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { this.props.books.map( (bookTitle) => (
                        <li key={bookTitle.id}>
                            <BookContent
                                book={bookTitle}
                                shelf={this.props.shelf}
                                bookShelfEntry={this.props.bookShelfEntry}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}