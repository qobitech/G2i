import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 40px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    h3 {
        font-family: Catamaran, 'Arial Narrow Bold', sans-serif;
        font-size: 1.8rem;
    }

    .divclass {
        text-align : center;
    }

    .subtitle{
        font-family: Play, 'Arial Narrow Bold', sans-serif;
        line-height: 40px;
    }

    .quitbuttondiv{
        padding: 20px 0px;
    }

    .refresh{
        color: #ff0aaa;
        text-decoration: underline;
        cursor : pointer;
    }

    .errordiv{
        display : flex; 
        flex-direction : column; 
        justify-content: center; 
        text-align: center;
    }

    .quitbuttondiv p{
        color: #ff0aaa;
        text-decoration: underline;
        cursor : pointer;
    }

    h5 {
        font-family : Lobster, 'Arial Narrow Bold', sans-serif;
        font-size: 2rem;
    }

    .start, .next {
        crusor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

    .answer_section{
        padding-bottom: 80px;
    }

    @media only screen and (min-width :900px){
        h1 {
            font-size: 70px;
        }

        h3 {
            font-size: 2.3rem;
        }
    }
`