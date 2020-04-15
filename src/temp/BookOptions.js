import React from "react";
import styled, { css } from "styled-components";
import Heading from "./Headings";
import Paragraph from "./Paragraph";
import { update } from "./BooksAPI";
import { Checkmark } from "./Checkmark";

const BookOptions = ({ book, onUpdate }) => {
  console.log(book);

  return (
    <Options className="bookOptions" style={bookOptions}>
      <Heading size="small">Move to:</Heading>
      <button
        onClick={() => {
          console.log("Test", book);
          update(book, "wantToRead").then((b) => onUpdate(b));
        }}
      >
        <Checkmark checked={book.shelf === "wantToRead"} />
        Want to read
      </button>
      <button
        onClick={() => {
          console.log("Test", book);
          update(book, "read").then((b) => onUpdate(b));
        }}
      >
        <Checkmark checked={book.shelf === "read"} />
        Read
      </button>

      <button
        onClick={() => {
          console.log("Test", book);
          update(book, "currentlyReading").then((b) => onUpdate(b));
        }}
      >
        <Checkmark checked={book.shelf === "currentlyReading"} />
        Currently Reading
      </button>

      <button>
        <Checkmark checked={!book.shelf} />
        None
      </button>
    </Options>
  );
};

const Options = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  background-color: white;
  padding: 20px;
  width: 200px;
  z-index: 99;

  button {
    border: 0;
    width: 100%;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 141.7%;
    color: #000000;
    text-align: left;
    padding: 15px 0;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #f8f8f8;
    }

    svg {
      transform: none !important;
      width: 15px;
    }
    div {
      margin-right: 10px;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const bookOptions = {
  display: "none",
  opacity: 0,
};

export default BookOptions;
