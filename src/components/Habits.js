

import styled from "styled-components"



export default function Habits() {
   

     return (
        <>
        <h1>HABITS</h1>
        </>
      )
}


const Span = styled.div`
color: ${props => props.theme.dfColor};
background-color: ${props => props.theme.dfBack};
display: flex;
justify-content: center;
align-items: center;
width: 29px;
 height: 28px;
    
`
const color = {
    dfColor: '#D4D4D4',
    dfBack: '#FFFFFF'
};

const invertedColor = {
    dfColor: '#FFFFFF',
    dfBack: '#D4D4D4'
};

const Weekdays = styled.div` 
display: flex;

.weekday{
    width: 30px;
    height: 30px;
    color: #dbdbdb;
    background-color: #dbdbdb;
    border: solid 1px #d4d4d4;
    border-radius: 3px;
    margin: 10px 3px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}


`