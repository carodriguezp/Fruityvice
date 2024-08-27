import styled from 'styled-components';

export const Container = styled.div`

  background-color: #282c34;
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
