import styled from 'styled-components';

export const Section = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  // border: red solid;

  @media (min-width: 320px) and (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 40vh;
  }
`;

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: #2f00ff solid;
  width: 35%;
  height: 30vh;

  @media(min-width:901px) and (max-width: 1500px){
    height: 50vh;
    width: 45%;
    justify-content:center;
}


  h1 {
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2.3rem;

    @media(min-width:901px) and (max-width: 1500px){
    font-size:1.8rem;
}
  }

  span {
    color: #a430de;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.7rem;

    @media(min-width:901px) and (max-width: 1500px){
      font-size: 1.5rem;
}
  }

  @media (min-width: 320px) and (max-width: 500px) {
    // border: blue solid;
    width: 95%;
    height: 65vh;
    margin-top: 20px;

    h1 {
      font-size: 1.4rem;
    }

    span {
      font-size: 1.2rem;
    }
  }

`;

export const Button = styled.button`
  width: 40%;
  height: 6vh;
  margin-top: 45px;
  border: none;
  border-radius: 8px;
  background: transparent;
  border: #a430de solid;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  .icon {
    color: #ffffff;
    position: relative;
    left: 10px;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    margin-top: 20px;
    width: 68%;
    height: 10vh;
    font-size: 1.1rem;
  }

  @media(min-width:901px) and (max-width: 1500px){
    width: 65%;
    
}
`;

export const ContainerImagem = styled.div`
  // border: green solid;
  width: 35%;
  height: 55vh;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 90%;
    margin-top: 280px;
  }

  img {
    width: 100%;
    height: 390px;

    @media (min-width: 320px) and (max-width: 500px) {
      height: 200px;
    }
  }
`;
