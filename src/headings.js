import React from 'react'
import styled, { css } from "styled-components"

const Heading = ({ children, size = "1", className }) => {
     
        return (
            <StyledHeading size={size}>{children}</StyledHeading>
    )}

const StyledHeading = styled.h1`
font-family: SF Pro Display, san-serif;
font-style: bold;
line-height: 141.7%;
color: #000000;
margin-bottom:0;

${p =>
    p.size === "big" &&
    css`
        font-size: 30px;
    `
}

${p =>
    p.size === "medium" &&
    css`
        font-size: 20px;
    `
}
${p =>
    p.size === "small" &&
    css`
        font-size: 16px;
    `
}

`

export default Heading;