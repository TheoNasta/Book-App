import React from "react";
import styled, { css } from "styled-components";
import Heading from "./headings";
import Paragraph from "./paragraph";
import { update } from "./BooksAPI";
import BookOptions from "./bookOptions";

const Book = ({ book, onUpdate }) => {
  console.log(book);

  const shelf = "wantToRead";

  return (
    <StyledBook>
      {getBookCover(book)}
      <Heading size="medium">{book.title}</Heading>
      {book?.authors && <Paragraph size="medium">{book.authors}</Paragraph>}
      <MoreOptions className="moreOptions" style={moreOptions}>
        <ArrowIcon>
          <svg
            width="23"
            height="12"
            viewBox="0 0 23 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.6509 10.2407L21.3493 11.7592L11.5001 3.31707L1.65088 11.7592L0.349297 10.2407L11.5001 0.682912L22.6509 10.2407Z"
              fill="white"
            />
          </svg>
        </ArrowIcon>
        <BookOptions book={book} onUpdate={onUpdate} />
      </MoreOptions>
    </StyledBook>
  );
};

const StyledBook = styled.div`
  width: 200px;
  margin-right: 20px;
  position: relative;
  transition: all 0.2s ease-in;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    .moreOptions {
      display: flex !important;
      opacity: 100% !important;
    }
  }
`;

const BookCover = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    box-shadow: 3px 4px 11px rgba(0, 0, 0, 0.25);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const MoreOptions = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cf9e6e;
  position: absolute;
  top: 125px;
  left: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    .bookOptions {
      display: block !important;
      opacity: 100% !important;
    }
    svg {
      transform: rotate(180deg);
    }
  }
`;

const ArrowIcon = styled.div`
  width: 25px;
`;
const moreOptions = {
  display: "none",
  opacity: 0,
};

function getBookCover(book) {
  if (book.imageLinks) {
    return (
      <BookCover
        style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
      ></BookCover>
    );
  }
  return (
    <BookCover>
      <svg
        width="197"
        height="301"
        viewBox="0 0 197 301"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="197" height="301" fill="#EDEDED" />
        <path
          d="M102.219 173.355L110.654 131H127.064V173.355H102.219Z"
          stroke="#B7B7B7"
          stroke-width="2"
        />
        <path
          d="M95.8447 173.355L87.4097 131H70.9996V173.355H95.8447Z"
          stroke="#B7B7B7"
          stroke-width="2"
        />
        <path
          d="M99.6875 176.121V132.706C99.6875 132.706 104.01 128.759 110.212 126.879C116.414 125 122.053 125 122.053 125V167.287C111.528 167.287 106.829 171.046 99.6875 176.121Z"
          fill="#EDEDED"
          stroke="#B7B7B7"
          stroke-width="2"
        />
        <path
          d="M98.3652 176.121V132.706C98.3652 132.706 94.0425 128.759 87.8404 126.879C81.6383 125 76 125 76 125V167.287C86.5248 167.287 91.2234 171.046 98.3652 176.121Z"
          fill="#EDEDED"
          stroke="#B7B7B7"
          stroke-width="2"
        />
      </svg>
    </BookCover>
  );
}

export default Book;
