import styled from 'styled-components';
import image from './pattern.png'
import { Link } from "react-router-dom";
import { Form, FormGroup, ListGroupItem } from 'react-bootstrap';

const fontColorBlue = "#337AB7";
const fontColorOrange = "#ed4444c2"

export const Container = styled.div`

  background-image:url(${image});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  
  .header {
   top:0;
   position: absolute;  
}
`;

export const HeaderStyled = styled.div`
    top: 10px;
    position: relative;  
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const GeneralListStyled = styled.div`
  width: 90vw;
  padding: 0;
  margin: 115px 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-items: center;

  @media all and (min-width: 768px) {
    margin: 180px 0px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (min-width: 1024px) {
    margin: 200px 0px;
    grid-template-columns: repeat(4, 1fr);
  }
  `


export const ListGroupItemStyled = styled(ListGroupItem)`
    text-decoration: none;
    list-style: none;
    text-align: center;
    border-radius: 10px;

    &:first-child{
      border-radius:10px;
    };
    &:last-child{
      border-radius:10px;
    }

     &:hover{
      background: #fffbd6
    } 

    h2{
      font-size: 1.6rem;
      font-weight: bold;
      color: ${fontColorBlue};
     
      &:hover {
        transform: scale(1.3);
        transition: transform 0.8s;
}
    }
`

export const StyledLink = styled(Link)`
 text-decoration: none;
&:hover {
    text-decoration: none;
}
`

export const StyledForm = styled(Form)`
    position: relative;
    top: 98px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    background: rgba(193, 5, 129, 0.50);
    
    @media all and (min-width: 768px) {
      top: 155px;
      width: 90vw;
      flex-direction: row;
      justify-content: center;
  } 
`

export const StyledFormGroup = styled(FormGroup)`
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
`
export const StyledDetail = styled.div`
    position: relative;
    top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    background: rgba(219, 212, 60, 0.76);
    

b{
  color: ${fontColorOrange};
} 

    h1{
      font-size: 2rem;
      font-weight: bold;
      color: ${fontColorOrange};
    }

    h2{
      font-size: 1.6rem;
      font-weight: bold;
      color: ${fontColorBlue};      
    }
    
    @media all and (min-width: 768px) {
      top: 80px;
      width: 90vw;
      flex-direction: row;
      justify-content: center;

      div{
        display: flex;
        flex-direction: column;
        width: 90vw;
        padding-left: 20px;
      }
  } 

  @media all and (min-width: 1024px) {
    width: 80vw;
    h1{
      font-size: 3rem;
      
    }

    h2{
      font-size: 2rem;
      
    }
  } 
`

export const StyledTable = styled.table`
  background: ${fontColorOrange};

  th{
    text-align: center;
  }

  td{
    font-size: 1.6rem;
  }

  @media all and (min-width: 768px) {
    margin: 15px;
  }
`