import React from "react";
import styled, { css } from "styled-components";

export const Checkmark = ({ checked }) => {
  return (
    <IconHolder>
      {checked && (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8107 1.5855L5.66281 11.4826L0.335693 6.74742L1.66442 5.2526L5.33731 8.51739L11.1894 0.41452L12.8107 1.5855Z"
            fill="black"
          />
        </svg>
      )}
    </IconHolder>
  );
};

const IconHolder = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
