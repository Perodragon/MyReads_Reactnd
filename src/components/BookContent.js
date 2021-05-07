import React , {Component} from 'react'

export default class BookContent extends Component {

    /* Reference : Conditional Rendering
     Link :
    [https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/] */
    
    handleChange = (e) => {
            this.props.bookShelfEntry(this.props.book, e.target.value)
        }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: 
                                    `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ""})` 
                                }}>
                    </div>
                        <div className="book-shelf-changer">
                            <select 
                                value={this.props.book.shelf} 
                                onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            { this.props.shelf.map((shelf,bookID) => (
                                <option 
                                    key={bookID} 
                                    value={shelf.value}
                                >
                                    { shelf.title }
                                </option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ this.props.book.title }</div>
                <div className="book-authors">{ this.props.book.authors }</div>
            </div>
        )
    }
}