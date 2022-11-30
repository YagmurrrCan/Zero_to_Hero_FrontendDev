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

export default ({title, children}) => (
    <Header>
        <h1>{title}</h1>
        
        <div style={{padding: '20px', margin: '20px', backgroundColor: 'tomato' }}>
            {children}
        </div>
        <footer>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by vercel
            </a>
        </footer>
    </Header>
);