import styled from "styled-components";


export default function Today() {
  
    return (
        <>
        <h1>TODAY</h1>
        </>
      )
}
const CheckMark = styled.div`
  width:69px;
  height:69px;
 
  padding:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.dfColor};
  cursor: pointer;

  img{
      width: 35px;
      height: 28px;
  }

`
const color = {
    dfColor: '#8FC549',
};

const invertedColor = {
    dfColor: '#EBEBEB',
};