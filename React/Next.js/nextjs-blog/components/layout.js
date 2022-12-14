import Link from "next/link";
import Header from "./Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
    }
`;

const BodyDiv = styled.div`
   margin: 0;
   padding: 0;
`;

const Footer = styled.footer`
   background-color: #ccc;
   padding: 20px;
`;

const Content = styled.div`
   background-color: red;
   padding: 20px;
`;

export default ({title, children}) => (
    <BodyDiv>
        <h1>{title}</h1>
        <Header/>
        <Content> {children} </Content>    
        <Footer>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by vercel
            </a>
        </Footer>
    </BodyDiv>
);