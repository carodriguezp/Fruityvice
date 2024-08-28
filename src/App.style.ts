import styled from 'styled-components';
import image from './pattern.png'

export const Container = styled.div`

 //background-color: #282c34;
 background-image:url(${image});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  
  .header {
    top: 10px;
    position: absolute;  
}
`;

export const HeaderStyled = styled.div`

    top: 10px;
    position: relative;  
    width: 100vw;
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
  .element-list {
    text-decoration: none;
    list-style: none;
    text-align: center;
    border-radius: 10px;

    h2{
      font-size: 1.6rem;
      font-weight: bold;
    }
  }`