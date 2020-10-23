import React from 'react';
import styled from "styled-components";

/*Componentes */
import Filter from './components/Filter/Filter';
import { Cart } from './components/Cart';
import Card from './components/Card';

/*Imagens*/
import Img1 from "./Img/spaceTravel.jpg";
import Img2 from "./Img/spaceship.jpg";
import Img3 from "./Img/spaceClothing.jpg";
import Img4 from "./Img/satellite.jpg";
import Img5 from "./Img/oldSpaceship.jpg";
import Img6 from "./Img/meteorite.jpg";
import Img7 from "./Img/funnyClothe.jpg";
import Img8 from "./Img/toys.jpg";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  margin-right: 10px;
`

const ShoppingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ viewCart }) => (viewCart ? '70%' : '98%')};
`
const H3 = styled.h3`
  background-color: #D93636;
  color: #FFF;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  border-radius: 30px;
  font-weight: normal;
`
const Span = styled.span`
  color: #FFF;
`
const Shopping = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  background-color: #efefef;
  width: ${({ viewCart }) => (viewCart ? '70%' : '98%')};
  height: 100vh;
  padding: 10px;
`
const ButtonCart = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 2px solid #FFF;
  background-color: #FFD383;
  background-image: url("https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

const Header = styled.header`
  background-color: #2A2F8C;
  max-width: 100vw;
  padding: 1%;
`;

const Nav = styled.nav`
  color: white;
  text-align: center;
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Select = styled.select`
  border-radius: 30px;
  background-color: #D93636;
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`;

export default class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Viagem espacial",
        value: 700,
        image: Img1
      },
      {
        id: 2,
        name: "Astronave",
        value: 2000,
        image: Img2
      },
      {
        id: 3,
        name: "Roupa espacial",
        value: 100,
        image: Img3
      },
      {
        id: 4,
        name: "Satélite",
        value: 2000,
        image: Img4
      },
      {
        id: 5,
        name: "Satélite antigo",
        value: 800,
        image: Img5
      },
      {
        id: 6,
        name: "Meteorito",
        value: 2500,
        image: Img6
      },
      {
        id: 7,
        name: "Camiseta Fake Nasa",
        value: 10,
        image: Img7
      },
      {
        id: 8,
        name: "Brinquedo Space Capsule",
        value: 30,
        image: Img8
      },
    ],
    viewCart: false,
    filter: 'smaller',
    filtring: false,
    filteredProducts: []
  }

  /*Inicia a página com os produtos em ordem de menor preço */
  componentDidMount() {
    if (localStorage.getItem("products")) {
      const products = localStorage.getItem("products")
      const ProductsList = JSON.parse(products)
      this.setState({
        products: ProductsList
      })
    }
    this.OrderProductGrowing();
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products))
  };

  /*Abre e fecha carrinho de compras */
  onClickCartButton = () => {
    this.setState({ viewCart: !this.state.viewCart })
  }

  /*Monitora e altera o estado do filtro maior e menor */
  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })

    this.OrderProductGrowing();
  }

  /*Ordena a ordem dos produtos baseadas no filter */
  OrderProductGrowing = () => {
    if (this.state.filter === 'bigger') {
      const orderedProducts = this.state.products.sort((a, b) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      })

      const orderedProductsFiltered = this.state.filteredProducts.sort((a, b) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      })
      return this.setState({ products: orderedProducts, filteredProducts: orderedProductsFiltered })

    } else {
      const orderedProducts = this.state.products.reverse()
      const orderedProductsFiltered = this.state.filteredProducts.reverse()

      return this.setState({ products: orderedProducts, filteredProducts: orderedProductsFiltered });
    }
  }

  OnChangeValuesFilters = (smallerValue, biggerValue, nameValue) => {
    const productName = nameValue.toUpperCase();

    if (smallerValue >= 0 && biggerValue >= 0) {
      let filteredProducts = this.state.products.filter((product) => {
        return (smallerValue <= product.value && product.value <= biggerValue);
      })

    if(nameValue !== "") {
      filteredProducts = this.state.products.filter((product) => {
        return (smallerValue <= product.value && product.value <= biggerValue && productName === product.name.toUpperCase());
      })
    }

      this.setState({ filtring: true })

      return this.setState({ filteredProducts: filteredProducts });
    } else {
      this.setState({ filtring: false })
      return this.setState({ products: this.state.products });
    }
  }


  render() {
    return (
      <div>
        <Header>
          <Nav>
            LabECommerce 9
          </Nav>
        </Header>
        <AppContainer>
          <Filter filteredValues={this.OnChangeValuesFilters}/>
          <ShoppingContainer>
            <HeaderContainer viewCart={this.state.viewCart}>
              <H3>Quantidade de Produtos: <Span>{this.state.filtring ? this.state.filteredProducts.length : this.state.products.length}</Span></H3>
              <Select value={this.state.filter} onChange={this.onChangeFilter}>
                <option value="smaller">Preço: Menor</option>
                <option value="bigger">Preço: Maior</option>
              </Select>
            </HeaderContainer>
            <Shopping viewCart={this.state.viewCart}>
              {this.state.filtring ?
                this.state.filteredProducts.map(product => {
                  return <Card key={product.id} image={product.image} title={product.name} price={product.value.toFixed(2)} />
                }) :
                this.state.products.map(product => {
                  return <Card key={product.id} image={product.image} title={product.name} price={product.value.toFixed(2)} />
                })}
            </Shopping>
          </ShoppingContainer>
          {this.state.viewCart &&
            <Cart />
          }
          <ButtonCart onClick={this.onClickCartButton} />
        </AppContainer>
      </div>

    );
  }
}

