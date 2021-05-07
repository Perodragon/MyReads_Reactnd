import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksList from '../components/BooksList'
import * as BooksAPI from '../js/BooksAPI'
import AlexandriaLibrary from '../images/alexandriaLibraryBackground.jpg'

export default class Search extends Component {

    state = {
        books: [],
        searchInput: ""        
    }

    /* Reference : 
            React [handleChange] Function,
            Async/await Pattern
        Links :
        [https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/]
        [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function] */

    handleChange = async locatedEvent => {
        try {
            const searchInput = locatedEvent.target.value
            this.setState({searchInput})
            if (searchInput.trim()){      
                const booksOutput = await BooksAPI.search(searchInput)
                if (booksOutput.error){
                    this.setState({books: []})
                } else {
                    this.setState({books: booksOutput})
            }}else{
                this.setState({books: []})
            }
        } catch (error) {
            console.log(error)
        }
    }

    /* Reference : Javascript [ findIndex ] method
        Links :
            [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex ]*/

    render() {

        /* Reference : React Css Styling
            Links :
                [ https://www.w3schools.com/react/react_css.asp ]
                [ https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/ ] */
                
        const backgroundStyle = {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            background: "center / cover no-repeat fixed",
            backgroundImage: `url(${AlexandriaLibrary})`,
            fontFamily: "cursive",            
            opacity: "2.2",
            fontWeight: "bold",
            fontSize:"18px",
            margin:"0 8px",
            marginTop:"15px"
          };

        if(this.state.books && this.state.books.length > 0) {
            this.state.books
                .forEach(book => {
                    const bookID = this.props.shelfBooks
                        .findIndex(target => target.id === book.id)
                            if(bookID !== -1)
                                book['shelf'] = this.props.shelfBooks[bookID].shelf
                            else 
                                book['shelf'] = 'none'
                            })
        }

        return (
            <div 
                className="search-books"
                style={backgroundStyle}
            >
                <div className="search-books-bar">
                    <Link to={'/'}>
                        <button className="close-search">
                                Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            value={this.state.searchInput}
                            placeholder="Search by title or author" 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.books && this.state.books.length >0 && 
                        <BooksList
                            books={this.state.books}
                            shelf={this.props.shelf}
                            bookShelfEntry={this.props.bookShelfEntry}
                        />
                    }                
                    {this.state.books.length === 0 && (                        
                        <div>
                            <h1 style={{
                                    textAlign:"center", 
                                    color:"rgba(112, 4, 107, 0.733)",
                                    textShadow: "-1px 0 white, 0 0.6px white, 0.6px 0 white, 0 -1px white"
                                }}>
                             No results to display : <br></br> [  {`${this.state.searchInput}`}  ]
                            </h1>
                        <ol style={{                                    
                                    color:"rgba(7, 6, 104, 0.733))",
                                    textShadow: "-0.6px 0 white, 0 0.4px white, 0.6px 0 white, 0 -0.6px white"
                                }}>
                            <li>Check your spelling.</li>
                            <li>Enter fewer letters, e.g. ("as").</li>
                            <li>Enter similar search words, e.g. [artificial Intelligence].</li>
                        </ol>
                        </div>
                    )}                                       
                </div>
            </div>
        )
    }
}

/* Reference : No Results OutLook
    Links :
        [ https://pixelfridge.digital/8-awesome-examples-of-no-results-found-pages/ ]*/