import React from 'react';
import { withRouter } from 'react-router-dom';

import { BookComponent } from '../Book/BookComponent';

class SearchComponent extends React.Component {

  state = {
    showSearchPage: false,
  }

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.searchQuery(event.target.value);
    }
  }

  render() {
    const results = this.props.results;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.props.history.push('/')}>
            Close
              </button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms in SEARCH_TERMS.MD

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onKeyDown={this.handleKeyDown} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" >{
            Array.isArray(results) && results.map((book, index) =>
              <li key={'li-' + index}>
                <BookComponent key={'book' + index} title={book.title} authors={book.authors} cover={book.imageLinks} id={book.id} shelf={book.shelf} updateBookshelf={false}/>
              </li>
            )
          }
          </ol>
        </div>
      </div>
    );
  }
}

export const SearchComponentWithRouter = withRouter(SearchComponent);
export default SearchComponentWithRouter;
