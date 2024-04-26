import styled from 'styled-components'


export const Section = styled.section`
//border:red solid;
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:80px;

`
export const H1 = styled.h1`

    font-family: 'Poppins', sans-serif;
    font-weight:600;
    font-size:2.5rem;
    margin-top:20px;
    color:#A430DE;
    text-align:center;

`
export const Container = styled.div`
width:90%;
height:auto;
//border:blue solid;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin-top:50px;

div{
  display:flex;
  flex-direction:column;
  align-items:center;
  border-radius:12px;
  border:3px white solid;
  width:35%;
  height:65vh;
  margin-top:50px;


  img{
    width:365px;
    height:250px;
    border-radius:0 10px 0;

    @media(min-width:901px) and (max-width: 1500px){
      width:75%;
      height:250px;
      }
  }

  p{
    color:white;
    font-size:1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    margin-top:15px;

    a:visited{
      color:white;
    }
    
  }

  span{
    //border:yellow solid;
    width:35%;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
  }

  .tecnologias{
    //border:blue solid;
    width:100%;
    justify-content:space-around;
  }

  .icon{
    cursor:pointer;
  }

  h4{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    border-radius:8px;
    padding:5px;
    width:40%;
    height:5vh;
    color:white;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    background-color:#A430DE;

    @media(min-width:320px) and (max-width: 500px){
      width:35%;
      height:6vh;
      padding:0;
      font-size:0.9rem;
    }

  }
}

@media(min-width:320px) and (max-width: 500px){

   flex-direction:column;
   width:95%;
   div{
    width:100%;
    height:500px;

    img{
    width:100%;


   }

  }
}


`

