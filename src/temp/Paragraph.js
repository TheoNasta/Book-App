import React from "react";
import styled, { css } from "styled-components";

const Paragraph = ({ children, size = "medium", className }) => {
  return <StyledParagraph size={size}>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: 300;
  line-height: 141.7%;
  color: #8b8b8b;
  margin-top: 5px;

  ${(p) =>
    p.size === "medium" &&
    css`
      font-size: 14px;
    `}
  ${(p) =>
    p.size === "small" &&
    css`
      font-size: 12px;
    `}
`;

export default Paragraph;
