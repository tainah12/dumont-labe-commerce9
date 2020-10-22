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
import Card from "./components/Card";

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


export default class App extends React.Component {
  state = {
    products:[
      {id: 1,
      name:"Viagem espacial",
      value: 700,
      image: Img1
      },
      {id: 2,
      name:"Astronave",
      value: 2000,
      image: Img2
      },
      {id: 3,
      name:"Roupa espacial",
      value: 100,
      image: Img3
      },
      {id: 4,
      name:"Satélite",
      value: 2000,
      image: Img4
      },
      {id: 5,
      name:"Satélite antigo",
      value: 800,
      image: Img5
      },
      {id: 6,
      name:"Meteorito",
      value: 2500,
      image: Img6
      },
      {id: 7,
      name:"Camiseta Fake Nasa",
      value: 10,
      image: Img7
      },
      {id: 8,
      name:"Brinquedo Space Capsule",
      value: 30,
      image: Img8
      },

    ]
  } 
  render(){
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
            {this.state.products.map((product) => {
              return <Card image={product.image} name={product.name} value={product.value.toFixed(2)}/>  
            })}                        
                       
          </Shopping>
      </Article>
      </main>
    </body>
  );
}
}

