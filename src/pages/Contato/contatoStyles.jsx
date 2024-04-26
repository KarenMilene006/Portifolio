import styled from "styled-components";

export const Section = styled.section`
width:100%;
height:72vh;
`

export const H1 = styled.h1`
text-align:center;
margin-top:6vh;
font-size:2.6rem;
font-family: 'Poppins', sans-serif;
font-weight:500;
display:block;
color:#a430de;

span{
    color:#e0d7d7;
}

@media(min-width:320px) and (max-width: 500px){
    padding:0 16px;
    font-size:2.4rem;
    }

`

export const Container = styled.div`
width:100%;
height:50vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
margin-top:20px;

@media(min-width:320px) and (max-width: 500px){
        margin-bottom:40px;
    }

div{
    border:4px #a430de solid;
    border-radius:10px;
    background-color:#e5e5e5;
    width:50%;
    height:8vh;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(min-width:320px) and (max-width: 500px){
        width:85%;
        height:8vh;
        padding:20px;
    }
    
    a{
        text-decoration:none;
        font-family: 'Poppins', sans-serif;
        font-weight:600;
        color:#a430de;
        font-size:1.5rem;
        position:absolute;

        &:hover{
            color:#e5e5e5;
        }
    }

    &:hover{
        background-color:#a430de;
        transition:2s;
        border:4px #e5e5e5 solid;
       
    }

    
}
`

export const ContainerIcon = styled.span`
 position: relative;
  right: 22vw;

  @media(min-width:320px) and (max-width: 500px){
    right: 26vw;

  }

  .icon {
    color: #a430de;
  }

  .icon-hovered {
    color: #ffffff;
  }

`