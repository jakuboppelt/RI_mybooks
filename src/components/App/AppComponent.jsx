import React from 'react';
import '../../App.css';
import Bookshelf from '../Bookshelf/BookshelfComponent';
import Search from '../Search/SearchContainer';
import {  withRouter} from 'react-router-dom';

const bookshelfsDefinition = [
  {
    title: 'Currently Reading',
    dataTitle: 'currentlyReading'
  },
  {
    title: ' Want to Read',
    dataTitle: 'wantToRead'
  },
  {
    title: 'Read',
    dataTitle: 'read'
  }
];

class AppComponent extends React.Component {

  state = {
    showSearchPage: false,
  }

  render() {
    const { bookshelfs } = this.props;
    const showSearchPage = this.state.showSearchPage;

    return (
      <div className="app">
        {showSearchPage ? <Search /> : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {
                  bookshelfsDefinition.map((bookshelfDefinition, index) => {
                    const books = bookshelfs[bookshelfDefinition.dataTitle];
                    return <Bookshelf key={index} title={bookshelfDefinition.title} books={books} shelf={bookshelfDefinition.dataTitle} />;
                  })
                }
              </div>
              <div className="open-search">
                <button onClick={() => this.props.history.push('/search')}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default withRouter(AppComponent);
