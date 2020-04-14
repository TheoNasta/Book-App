import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import styled, { css } from "styled-components";
import SearchModal from "./Search";
import Heading from "./Headings";
import Header from "./Header";
import Book from "./Book";
import { getAll } from "./BooksAPI";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {},
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
  };

  getBookIndex() {
    const shelveNames = ["currentlyReading", "wantToRead", "read"];
    const bookIndex = {};
    shelveNames.forEach((shelfName) => {
      const booksIdsOnShelf = this.state.shelves[shelfName];
      booksIdsOnShelf.forEach((bookId) => {
        bookIndex[bookId] = shelfName;
      });
    });
    return bookIndex;
  }

  componentDidMount() {
    getAll().then((books) =>
      this.setState({
        books: books.reduce((acc, book) => {
          acc[book.id] = book;
          return acc;
        }, {}),
        shelves: {
          currentlyReading: books
            .filter((book) => book.shelf === "currentlyReading")
            .map((b) => b.id),
          wantToRead: books
            .filter((book) => book.shelf === "wantToRead")
            .map((b) => b.id),
          read: books.filter((book) => book.shelf === "read").map((b) => b.id),
        },
      })
    );
  }

  render() {
    const updateBookOrder = (newBookOrder) => {
      this.setState({
        ...this.state,
        shelves: {
          ...newBookOrder,
        },
      });
    };

    const renderBook = (book) => {
      return <Book book={book} onUpdate={updateBookOrder} key={book.id}></Book>;
    };

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header
                onNavigate={() => {
                  this.setState(() => ({ showSearchPage: true }));
                }}
              />
              <CurrentlyReading>
                <Wrapper>
                  <Heading size="big">Currently Reading</Heading>
                  <BookshelfBooks>
                    {this.state.shelves.currentlyReading.map((bookId) =>
                      renderBook(this.state.books[bookId])
                    )}
                  </BookshelfBooks>
                </Wrapper>
              </CurrentlyReading>
              <Wishlist>
                <Wrapper>
                  <Heading size="big">Want to Read</Heading>
                  <BookshelfBooks>
                    {this.state.shelves.wantToRead.map((bookId) =>
                      renderBook(this.state.books[bookId])
                    )}
                  </BookshelfBooks>
                </Wrapper>
              </Wishlist>
              <Read>
                <Wrapper>
                  <Heading size="big">Read</Heading>
                  <BookshelfBooks>
                    {this.state.shelves.read.map((bookId) =>
                      renderBook(this.state.books[bookId])
                    )}
                  </BookshelfBooks>
                </Wrapper>
              </Read>
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchModal
              bookIndex={this.getBookIndex()}
              onUpdate={updateBookOrder}
              onNavigate={() => {
                this.setState(() => ({ showSearchPage: false }));
              }}
            ></SearchModal>
          )}
        />
      </div>
    );
  }
}

const Wrapper = styled.div`
  max-width: 1080px;
  width: 80%;
  margin: 0 auto;
  padding: 60px 0;
`;

const CurrentlyReading = styled.div`
  background-color: #f6f3f0;
`;

const Read = styled.div``;

const Wishlist = styled.div``;

const BookshelfBooks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export default BooksApp;
