import React from 'react'
import styled from "styled-components"

const Block = styled.div `

`
const ProductLine = styled.div `
display: flex;
flex-direction: row;
align-items: center;
margin: 0;
`
const Quantity = styled.p `
margin-left: 10px;
color: white;
`
const ProductName = styled.a `
margin-left: 10px;
margin-right: 10px;
color: white;
`
const Remove = styled.a `
font-weight: bolder;
cursor:pointer;
border: none;
color: white;
&:hover{
   color: red;
};
`
const Divider = styled.hr `
border: 1px dashed orange;
margin: 0;
`

export default class Cart extends React.Component {

    // addProductItem = () => {
    //     const newProduct = 
    //     {
    //         id: 1,
    //         name: 'item D',
    //         value: 700,
    //         quantity: 1,
    //         remove: false,
    //         selector: "X"
    //     }

    //     // const mergedProductList = this.state.products.map((product) => {
    //     //     if (newProduct.id === product.id) {
    //     //         const modifiedProduct = {
    //     //             ...product,
    //     //             quantity: newProduct.quantity + 1
    //     //         }
    //     //         return modifiedProduct
    //     //     }
    //     //     return product
            
    //     // })
    //     // this.setState({products: mergedProductList})
        
    //     const addProductList = [newProduct, ...this.state.products]
    //     this.setState({products:addProductList})
    // }

    sendId = (id) => {
        this.props.removeShopping(id)
      }

    render () {
              
        return (
            <Block>
                <ProductLine>
                    <Quantity>{this.props.quantity}x</Quantity>
                    <ProductName>
                        {this.props.name}
                    </ProductName>
                    <Remove onClick={this.sendId}>{this.props.selector}</Remove>   
                </ProductLine>
                <Divider/>
            </Block>

        )
    }
}