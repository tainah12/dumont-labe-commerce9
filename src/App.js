import React from 'react';
import styled from "styled-components";
import logo from "./Img/logo.png";
import Img1 from "./Img/spaceTravel.jpg";
import Img2 from "./Img/spaceship.jpg";
import Img3 from "./Img/spaceClothing.jpg";
import Img4 from "./Img/satellite.jpg";
import Img5 from "./Img/oldSpaceship.jpg";
import Img6 from "./Img/meteorite.jpg";
import Img7 from "./Img/funnyClothe.jpg";
import Img8 from "./Img/toys.jpg";

const Header = styled.header`
background-color: darkblue;
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
display: grid;
justify-items: center;
align-items: center;
grid-template-rows: 1fr 1fr;
grid-template-columns: repeat(4 1fr);
padding:5%;
`;

const Img = styled.img`
width: 10%;
`;

const Button = styled.button`
background-color: black;
color: white;
display:block;
width: 10%;
padding: 10px;
border-radius: 30px;
margin-bottom: 1%; //tirar depois
`;

// const Logo = styled.img`
// width: 90px;
// display: inline;

// `;

function App() {
  return (
    <body className="App">
      <main>
      <Header> 
      {/* <Logo src={logo} alt="logotipo"/>     */}
        <Nav>
         LabECommerce
        </Nav>      
      </Header>

      <Article>
          <section>              
              <Img src={Img1} alt="spaceTravel product"/>
              <p>Viagem espacial</p>
              <p>US$ 700,00 </p>
              <Button>Comprar</Button>

              <Img src={Img2} alt="spaceship product"/>
              <p>Astronave</p>
              <p>US$ 2000,00 </p>
              <Button>Comprar</Button>

              <Img src={Img3} alt="spaceClothing product"/>
              <p>Roupa espacial</p>
              <p>US$ 100,00 </p>
              <Button>Comprar</Button>

              <Img src={Img4} alt="satellite product"/>
              <p>Satélite</p>
              <p>US$ 2000,00 </p>
              <Button>Comprar</Button>

              <Img src={Img5} alt="oldSpaceship product"/>
              <p>Satélite antigo</p>
              <p>US$ 800,00 </p>
              <Button>Comprar</Button>

              <Img src={Img6} alt="meteorite product"/>
              <p>Meteorito</p>
              <p>US$ 2000,00 </p>
              <Button>Comprar</Button>

              <Img src={Img7} alt="funnyClothe product"/>
              <p>Camiseta Fake Nasa</p>
              <p>US$ 10,00 </p>
              <Button>Comprar</Button>

              <Img src={Img8} alt="toys product"/>
              <p>Brinquedo Space Capsule</p>
              <p>US$ 30,00 </p>
              <Button>Comprar</Button>

          </section>
      </Article>
      </main>
    </body>
  );
}

export default App;
