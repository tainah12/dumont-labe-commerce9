import React from 'react';
import styled from "styled-components";

/*Componentes */
import Filter from './components/Filter/Filter';
import Cart from './components/Cart';
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
  width: ${({ viewCart }) => (viewCart ? '70%' : '99%')};
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

const TotalBlock = styled.div `
display: flex;
flex-direction: row;
align-items: center;
margin: 0;
`
const TotalTitle = styled.p `
margin-left: 10px;
margin-top: 30px;
text-align:left;
color: white;
`
const TotalSum = styled.p `
font-weight: bolder;
margin-left: 10px;
margin-top: 30px;
color: white;
`
const ShoppingCart = styled.div `

`;

const Block = styled.div `
border: 2px solid  #d49010;
border-radius: 10px;
background-color: none;
width: 20vw;
height: 90vh;
display: flex;
flex-direction: column;
position: absolute;
top: 83px;
right: 10px;
`
const Title = styled.h1 `
margin-left: 10px;
text-align:left;
color: white;
`

export default class App extends React.Component {

  state = {
    products: [
      {
        id: 1,
        name: "Viagem espacial",
        value: 700,
        quantity: 1,
        image: Img1,
        remove: false,
        selector: "X"
      },
      {
        id: 2,
        name: "Astronave",
        value: 2000,
        quantity: 1,
        image: Img2,
        remove: false,
        selector: "X"
      },
      {
        id: 3,
        name: "Roupa espacial",
        value: 100,
        quantity: 1,
        image: Img3,
        remove: false,
        selector: "X"
      },
      {
        id: 4,
        name: "Satélite",
        value: 2000,
        quantity: 1,
        image: Img4,
        remove: false,
        selector: "X"
      },
      {
        id: 5,
        name: "Satélite antigo",
        value: 800,
        quantity: 1,
        image: Img5,
        remove: false,
        selector: "X"
      },
      {
        id: 6,
        name: "Meteorito",
        value: 2500,
        quantity: 1,
        image: Img6,
        remove: false,
        selector: "X"
      },
      {
        id: 7,
        name: "Camiseta Fake Nasa",
        value: 10,
        quantity: 1,
        image: Img7,
        remove: false,
        selector: "X"
      },
      {
        id: 8,
        name: "Brinquedo Space Capsule",
        value: 30,
        quantity: 1,
        image: Img8,
        remove: false,
        selector: "X"
      },
    ],
    viewCart: false,
    filter: 'smaller',
    filtring: false,
    filteredProducts: [],
    shoppings: [
      {
        id: 1,
        name: "Viagem espacial",
        value: 700,
        quantity: 0,
        image: Img1,
        remove: true,
        selector: "X"
      },
      {
        id: 2,
        name: "Astronave",
        value: 2000,
        quantity: 0,
        image: Img2,
        remove: true,
        selector: "X"
      },
      {
        id: 3,
        name: "Roupa espacial",
        value: 100,
        quantity: 0,
        image: Img3,
        remove: true,
        selector: "X"
      },
      {
        id: 4,
        name: "Satélite",
        value: 2000,
        quantity: 0,
        image: Img4,
        remove: true,
        selector: "X"
      },
      {
        id: 5,
        name: "Satélite antigo",
        value: 800,
        quantity: 0,
        image: Img5,
        remove: true,
        selector: "X"
      },
      {
        id: 6,
        name: "Meteorito",
        value: 2500,
        quantity: 0,
        image: Img6,
        remove: true,
        selector: "X"
      },
      {
        id: 7,
        name: "Camiseta Fake Nasa",
        value: 10,
        quantity: 0,
        image: Img7,
        remove: true,
        selector: "X"
      },
      {
        id: 8,
        name: "Brinquedo Space Capsule",
        value: 30,
        quantity: 0,
        image: Img8,
        remove: true,
        selector: "X"
      },
    ]
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

  addProduct = (id) => {
    if (this.state.viewCart === false) {
    this.onClickCartButton()
    }

    
    const mergedProductList = this.state.shoppings.map((product) => {
        if (id === product.id) {
            const modifiedProduct = {
                ...product,
                quantity: product.quantity + 1,
                remove: false

            }
            return modifiedProduct
        }
        return product
        
    })
    this.setState({shoppings: mergedProductList})

    // const shopping = this.state.products.filter(product => product.id === id);
    // let newShopping = [...this.state.shoppings, shopping[0]]
    // this.setState({shoppings: newShopping})      
    
  }

  removeProduct = (id) => {
    const removeProductList = this.state.shoppings.map((product) => {
        if (id === product.id) {
            const newProduct = {
                ...product,
                remove: true,
                quantity: 0
            }
            return newProduct
        }
        return product
    })
    this.setState({shoppings: removeProductList})
  }


  render() {
        
    const shoppingList = this.state.shoppings.filter(product => {
      if (product.remove) {
          return false
      } else {
          return true
      }
    })

    let total = shoppingList.reduce(getTotal, 0);
    function getTotal(total, item) {
    return total + (item.value * item.quantity);
    }
    
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
                  return <Card addShopping={() => this.addProduct(product.id)} key={product.id} image={product.image} title={product.name} price={product.value.toFixed(2)} />
                }) :
                this.state.products.map(product => {
                  return <Card addShopping={() => this.addProduct(product.id)} key={product.id} image={product.image} title={product.name} price={product.value.toFixed(2)} />
                })}
            </Shopping>
          </ShoppingContainer>
          <ShoppingCart>
            {this.state.viewCart &&   
            <Block>
              <Title>Carrinho:</Title>
              {shoppingList.map(product => {
                return <Cart removeShopping={() => this.removeProduct(product.id)} quantity={product.quantity} id={product.id} name={product.name} selector={product.selector}/>
              })}
              <TotalBlock>
              <TotalTitle>Total:</TotalTitle>
              <TotalSum>US${" " + total}.00</TotalSum>
              </TotalBlock>
            </Block>}
          </ShoppingCart>

          <ButtonCart onClick={this.onClickCartButton} />
        </AppContainer>
      </div>

    );
  }
}

