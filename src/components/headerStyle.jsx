import styled from 'styled-components';

export const H1 = styled.h1`
  color:#A430DE;;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
 
  justify-content: space-around;
  border-bottom: 2px solid black;
  background-color:#121212;
  //border:red solid ;
  
  ul {
    display: flex;
    gap: 60px;
  }

  li {
    list-style: none;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #7f20d1;
    position: relative;
    transition: color 3s; 

    &:hover {
      color: #ffffffff;
      &:before {
        content: '';
        position: absolute;
        width: 60%;
        height: 5px;
        border-radius: 3px;
        background-color: #550072;
        bottom: -6px;
        transition: width 3s, background-color 3s ease-out; 
        transform-origin: left;
      }
    }

    @media(min-width:320px) and (max-width: 500px){
        display:none;
    }

  }

  a {
    text-decoration: none;
    

    &:visited {
      color: #ffffff; 
    }

    &:hover {
      color: #ffffffff;
      transition: color 1.1s;
    }
  }
`;

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  padding: 10px;
  background: transparent;
  cursor: pointer;

  .icon-theme {
    color: #ffffff;
  }

  
  @media(min-width:320px) and (max-width: 500px){
        display:none;
    }
`;


export const ContainerMenu = styled.div`

@media(min-width:320px) and (max-width: 500px){
      //border:red solid;
      //height: ${(props) => (props.isOpen ? '100vh' : '0')};
      width:100%;
      background-color:#212121; 
      

      ul{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        position: relative;
        right:30px;
        justify-content:space-around;
        //border:blue solid;
        height:25vh;
      }

      li{
        list-style:none;
      }

      li a{
        text-decoration:none;
        list-style:none;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color:#ffffff;
        font-size:1.2rem;
        z-index:999;
      }
    }
`

export const BotaoMenu = styled.button`
display:none;

@media(min-width:320px) and (max-width: 500px){
background:transparent;
display:flex;
border:none;
color:#ffffff;
font-size:2rem;
position: relative;
left:7vw;
cursor:pointer;
}
`