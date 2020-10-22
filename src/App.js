import React from 'react';
import styled from "styled-components";
// import Logo from "./Img/logo.png";
import Img1 from "./Img/spaceTravel.jpg";
import Img2 from "./Img/spaceship.jpg";
import Img3 from "./Img/spaceClothing.jpg";
import Img4 from "./Img/satellite.jpg";
import Img5 from "./Img/oldSpaceship.jpg";
import Img6 from "./Img/meteorite.jpg";
import Img7 from "./Img/funnyClothe.jpg";
import Img8 from "./Img/toys.jpg";

const Header = styled.header`
background-color: #2A2F8C;
width: 100%;
position: fixed;
padding: 1%;
`;

const Nav = styled.nav`
color: white;
text-align: center;
font-size: 30px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Article = styled.article`
background-color:black;
`;

const Select = styled.select`
margin-top: 5%;
margin-left: 80%;
border-radius: 30px;
background-color: #D93636;
padding:10px;
border:none;
color:white;
font-weight: bold;
cursor: pointer;
`;

const Shopping = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
background-color: #efefef;
padding: 5%;
align-items:center;
justify-self: center;
width: 80%;
margin: auto;
margin-top: 3%;
`;

const Cards = styled.div`
display:flex;
flex-direction:column;
margin: 30px;
justify-content: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
text-align: center;
align-items: center;
`;

const Img = styled.img`
width: 80%;
min-height: 200px;
max-height: 200px;
border-radius: 20px;
`;

const Button = styled.button`
background-color: black;
color: white;
width: 80%;
padding: 10px;
border-radius: 30px;
border:none;
margin-bottom: 1%; //tirar depois
cursor: pointer;
&:hover {
  {Button}
  background-color:#D93636;
};
`;


function App() {
  return (
    <body className="App">
      <main>
      <Header> 
      {/* <Img src={Logo} alt="logotipo"/>     */} 
        <Nav>
         LabECommerce
        </Nav>      
      </Header>

      <Article>
          <Select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          
          </Select>

          <Shopping> 
          <Cards>           
              <Img src={Img1} alt="spaceTravel product"/>
              <p>Viagem espacial</p>
              <p>US$ 700,00 </p>
              <Button>Comprar</Button>
          </Cards>      
          <Cards>
              <Img src={Img2} alt="spaceship product"/>
              <p>Astronave</p>
              <p>US$ 2000,00 </p>
              <Button>Comprar</Button>
          </Cards>
          <Cards>
              <Img src={Img3} alt="spaceClothing product"/>
              <p>Roupa espacial</p>
              <p>US$ 100,00 </p>
              <Button>Comprar</Button>
          </Cards>
          <Cards>
              <Img src={Img4} alt="satellite product"/>
              <p>Satélite</p>
              <p>US$ 2000,00 </p>
              <Button>Comprar</Button>
          </Cards>
          <Cards>
              <Img src={Img5} alt="oldSpaceship product"/>
              <p>Satélite antigo</p>
              <p>US$ 800,00 </p>
              <Button>Comprar</Button>
          </Cards>
          <Cards>
              <Img src={Img6} alt="meteorite product"/>
              <p>Meteorito</p>
              <p>US$ 2000,00 </p>
              <Button>Comprar</Button>
          </Cards>
          <Cards>
              <Img src={Img7} alt="funnyClothe product"/>
              <p>Camiseta Fake Nasa</p>
              <p>US$ 10,00 </p>
              <Button>Comprar</Button>
          </Cards>
            <Cards>
              <Img src={Img8} alt="toys product"/>
              <p>Brinquedo Space Capsule</p>
              <p>US$ 30,00 </p>
              <Button>Comprar</Button>
            </Cards>
            
          </Shopping>
      </Article>
      </main>
    </body>
  );
}

