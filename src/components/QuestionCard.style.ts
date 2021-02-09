import styled from 'styled-components';


export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        font-size: 1rem;
    }

    .category{
        font-size: 1.4rem;
        margin:0;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) =>
            correct
                ? 'linear-gradient(90deg, #56ffa4, #59bc86)' 
                : !correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;

type ResultWrapperProps = {
    openTray : boolean;
    correct : boolean;
}

export const ResultWrapper = styled.div<ResultWrapperProps>`
    transition : all .4s ease;
    margin: 20px 0px 30px;
    border-radius : 10px;
    padding: 4px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    height: auto;

    .questionsection {
        cursor : pointer;
        width: 100%;
        display : flex;
        align-items : center;
        justify-content: space-between;
        background : none;
        padding : 0px 20px;
        border-bottom: ${({openTray}) => openTray ? '1px solid #e6e6e6' : '0px solid #e6e6e6'};
    }

    .textDiv{
        display : flex;
        flex-basis : 95%;
        padding : 12px 0px;
    }

    .textDiv h4{
        margin: 0;
        color : ${({ correct }) => correct ? '#006400' : '#ff5656'};
    }

    .textDiv p{
        margin:0;
        margin-right: 15px;
    }

    .iconDiv{
        color : #000;
        font-size: 12px;
    }

    .answerSection{
        display : ${({openTray}) => openTray ? "flex" : "none"};
        align-items : center;
        padding : 8px 50px;
        background : none;
        transition : all .4s ease;
    }

    .answerSection p{
        margin: 0;
        margin-right: 15px;
    }

    .answerTxt{
        color : ${({ correct }) => correct ? '#006400' : '#ff5656'};
    }

`;

