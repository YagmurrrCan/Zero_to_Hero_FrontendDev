import Link from "next/link";
import styled from "styled-components";
// import style from "header.css";


const HeaderDiv = styled.div`
    border: 10px solid green;
    padding: 20px;
    background-color: #f00;
    display: flex;
    gap: 20px;

    & > span {
        font-size: 30px;
    }
`;

const StyledLink = styled.div`
    color: blue;
    text-decoration: none;
    font-size: ${({ big }) => (big ? "20px" : "12px")};
    &:hover { 
        text-decoration: underline;
    }
`;

export default () => (
        <HeaderDiv>
            <Link href="/" passHref>
                <StyledLink> Home </StyledLink>
            </Link>
       
            <Link href="/about" passHref>
                <StyledLink big> About </StyledLink>
            </Link>

            <span>Ek açıklamalar</span>
       
        </HeaderDiv>  
);