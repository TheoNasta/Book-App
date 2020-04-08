import React from "react";
import styled, { css } from "styled-components";
import { search } from "./BooksAPI";
import Book from "./book";
import { Link } from "react-router-dom";

class SearchModal extends React.Component {
  state = {
    searchQuery: "",
    searchResults: [],
  };

  // componentDidMount() {
  //   search(this.state.searchQuery).then((books) =>
  //     this.setState({ searchResults: books })
  //   );
  // }

  // updateQuery = (searchQuery) => {
  //   this.setState({
  //     searchQuery: searchQuery.trim(),
  //   });
  // };

  updateQuery = (searchQuery) => {
    search(searchQuery).then((books) => {
      if (!books || books.error) return this.setState({ searchResults: [] });
      this.setState({ searchResults: books });
    });
  };

  render() {
    const { searchResults, searchQuery } = this.state;

    console.log(this.state.searchResults);

    /*    const showingBooks =
      searchQuery === ""
        ? searchResults
        : searchResults.filter((b) =>
            b.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          */
    return (
      <SearchWrapper>
        <Link to="/" className="CloseBtn">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.77692 9.38775L-0.000151038 1.61069L1.41406 0.196472L9.19113 7.97354L7.77692 9.38775Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.222782 7.77707L7.99985 1.54972e-06L9.41406 1.41422L1.637 9.19128L0.222782 7.77707Z"
              fill="black"
            />
          </svg>
          Close
        </Link>
        <input
          type="text"
          placeholder="Search by title or author"
          className="searchBar"
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        <SearchResults>
          {searchResults &&
            searchResults.map((book) => (
              <Book book={book} onUpdate={this.props.onUpdate}></Book>
            ))}
        </SearchResults>
      </SearchWrapper>
    );
  }
}

const SearchWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;

  .searchBar {
    width: 1080px;
    max-width: 80%;
    background-color: #fbfbfb;
    border: 1px solid #e7e7e7;
    font-family: SF Pro Display, sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 141.7%;
    color: #676767;
    padding: 25px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  .CloseBtn {
    float: right;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 141.7%;
    color: #000000;
    margin-right: 2.5%;
    margin-top: 15px;
    cursor: pointer;

    svg {
      margin-right: 6px;
    }
  }
`;

const SearchResults = styled.div`
  width: 1080px;
  max-width: 80%;
  background-color: white;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export default SearchModal;
