import Link from "next/link";
import styled from "styled-components";
// import style from "header.css";


const HeaderDiv = styled.div`
    border: 10px solid green;
    padding: 20px;
    color: aqua;
`;

export default () => (
    <div>
        <HeaderDiv>
            <Link href="/" passHref>Home</Link>
       
            <Link href="/about" passHref>About</Link>
       
        </HeaderDiv>
        
    </div>   
);