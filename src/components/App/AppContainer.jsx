import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../store/bookshelfs/actions';
import AppComponent from './AppComponent';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllBooks());
  }

  render() {
    const { bookshelfs, books, loaded } = this.props;
    console.log(books);

    if (!loaded) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <AppComponent bookshelfs={bookshelfs}></AppComponent>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    loaded: state.app.loaded,
    bookshelfs: state.bookshelfs
  };
}

export const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;