import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import '../styles/App.css'
import Main from '../overLook/Main'
import Search from '../overLook/Search'

export default class BooksApp extends Component {
  state = {    
    books: [],
    shelf: [
      {
        title: 'Currently Reading',
        value: 'currentlyReading'
      },
      {
        title: 'Want To Read',
        value: 'wantToRead'
      },
      {
        title: 'Read',
        value: 'read'
      }
    ]
  }

  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll() 
      this.setState({ books })
    } catch(error){
      console.log(error);
    }
}    

/* Reference : Passing Function To [setState]
     Link :
     [ https://vasanthk.gitbooks.io/react-bits/content/patterns/27.passing-function-to-setState.html ] */

  bookShelfEntry = (book, shelf) => {
    BooksAPI.update(book, shelf).then( async () => {
      const books = await BooksAPI.getAll() 
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={'/search'}>
            <Search 
              shelfBooks={this.state.books}
              shelf={this.state.shelf}
              bookShelfEntry={this.bookShelfEntry}
            />
          </Route>
          <Route exact path={'/'}>
            <Main
              books={this.state.books}
              shelf={this.state.shelf}
              bookShelfEntry={this.bookShelfEntry}
            />
          </Route>
        </Switch>
      </div>
    )
  }
}

/* Use : Incase Of Handling Warnings
      console.log = console.warn = console.error = () => {}*/