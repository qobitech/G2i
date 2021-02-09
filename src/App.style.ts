import styled, { createGlobalStyle } from 'styled-components'
// import BGImage from './images/gaspar-manuel-zaldo-VQj3PTx63hs-unsplash.jpg'
import BGImage2 from './images/triviabg.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage2});
        background-size: 100% auto;
        height: auto;
        background-color: #000;
        background-repeat: repeat-y;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif
    }
`
