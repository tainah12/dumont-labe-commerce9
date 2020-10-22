import React, { Component } from 'react'
import styled from "styled-components"
// import { ProductBlock } from './ProductBlock'

const Block = styled.div`
border-color: orange;
border-style: solid;
border-radius: 20px;
background-color: lightgray;
width: 20vw;
height: 90vh;
display: flex;
flex-direction: column;
position: absolute;
top: 70px;
right: 10px;
`
const Title = styled.h1`
margin-left: 10px;
text-align:left;
`
const ProductBlock = styled.div`
`

const TotalBlock = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0;
`

const TotalTitle = styled.p`
margin-left: 10px;
margin-top: 30px;
text-align:left;
`
const TotalSum = styled.p`
font-weight: bolder;
margin-left: 10px;
margin-top: 30px;
`
const ProductLine = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0;
`
const Quantity = styled.p`
margin-left: 10px;
`
const ProductName = styled.p`
margin-left: 10px;
margin-right: 10px;
`
const Remove = styled.a`
font-weight: bolder;
cursor:pointer;
border: none;
&:hover{
   color: red;
};
`
const Divider = styled.hr`
border: 1px dashed black;
margin: 0;
`

export class Cart extends Component {

    state = {
        productList: [{}],
        quantity: 0,
        showProduct: true,
    }

    onClickX = () => {
        console.log("Remover")

    }

    render() {

        return (
            <Block>
                <Title>Carrinho:</Title>
                {/* {newProductList} */}
                <ProductBlock>
                    <ProductLine>
                        <Quantity>1x</Quantity>
                        <ProductName>Item A</ProductName>
                        <Remove onClick={this.onClickX}>X</Remove>
                    </ProductLine>
                    <Divider />
                </ProductBlock>

                <ProductBlock>
                    <ProductLine>
                        <Quantity>1x</Quantity>
                        <ProductName>Item A</ProductName>
                        <Remove onClick={this.onClickX}>X</Remove>
                    </ProductLine>
                    <Divider />
                </ProductBlock>

                <ProductBlock>
                    <ProductLine>
                        <Quantity>1x</Quantity>
                        <ProductName>Item A</ProductName>
                        <Remove onClick={this.onClickX}>X</Remove>
                    </ProductLine>
                    <Divider />
                </ProductBlock>

                <TotalBlock>
                    <TotalTitle>Total:</TotalTitle>
                    <TotalSum>R$</TotalSum>
                </TotalBlock>

            </Block>

        )

    }

}