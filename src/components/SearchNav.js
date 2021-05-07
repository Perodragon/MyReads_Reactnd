import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import Button from 'react-bootstrap/Button'
/*Reference : React Bootstrap
     Link : 
      [ https://react-bootstrap.github.io/components/buttons/ ] */

export default class SearchNav extends Component {
    render() {
        return (            
            <div className="open-search">
              <Link to='/search'>
                <button>
                    Add a book
                </button>
              </Link>
            </div>
           
        )
    }
}