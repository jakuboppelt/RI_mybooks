import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../App.css';
import { searchQuery } from '../../store/search';
import { SearchComponentWithRouter } from './SearchComponentWithRouter';

class Search extends Component {

  render() {
    return (
      <div className="app">
        <SearchComponentWithRouter searchQuery={this.props.searchQuery} results={this.props.results} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchQuery: function (query) {
      dispatch(searchQuery(query));
    }
  };
};

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;