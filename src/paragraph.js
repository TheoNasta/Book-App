import React from 'react'
import styled, { css } from "styled-components"

const Paragraph = ({ children, size = "medium", className }) => {
     
        return (
            <StyledParagraph size={size}>{children}</StyledParagraph>
    )}

const StyledParagraph = styled.p`
font-family: SF Pro Display, san-serif;
font-style: 300;
line-height: 141.7%;
color: #8B8B8B;
margin-top:5px;

${p =>
    p.size === "medium" &&
    css`
        font-size: 14px;
    `
}
${p =>
    p.size === "small" &&
    css`
        font-size: 12px;
    `
}

`

export default Paragraph;