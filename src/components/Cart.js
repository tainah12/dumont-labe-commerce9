import React, { Component } from 'react'
import styled from "styled-components"

const Block = styled.div `
border: 2px solid  #d49010;
border-radius: 10px;
background-color: none;
width: 20vw;
height: 90vh;
display: flex;
flex-direction: column;
position: absolute;
top: 80px;
right: 10px;
`
const Title = styled.h1 `
margin-left: 10px;
text-align:left;
color: white;
`
const ProductBlock = styled.div `
`
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

export class Cart extends Component {

    state = {
        products: [
            {
                id: 1,
                name: 'item A',
                value: 700,
                quantity: 1,
                remove: false,
                selector: 'X'
            },
            {
                id: 2,
                name: 'item B',
                value: 500,
                quantity: 1,
                remove: false,
                selector: 'X'
            }
        ]
 
    }

    removeProductItem = (id) => {
        const findID = this.state.products.filter((sel) => {
            if (id === sel.id) {
                return id
            }
        })
        
        const removeProductList = this.state.products.map((product) => {
            if (id === product.id) {
                const newProductList = {
                    ...product,
                    remove: true
                }
                return newProductList
            }
            return product
        })
        this.setState({products: removeProductList})
        
    }

    addProductItem = () => {
        const newProduct = {
            id: 1,
            name: 'item D',
            value: 700,
            quantity: 1,
            remove: false,
            selector: "X"
        }

        // const mergedProductList = this.state.products.map((product) => {
        //     if (newProduct.id === product.id) {
        //         const modifiedProduct = {
        //             ...product,
        //             quantity: newProduct.quantity + 1
        //         }
        //         return modifiedProduct
        //     }
        //     return product
            
        // })
        // this.setState({products: mergedProductList})
        
        const addProductList = [newProduct, ...this.state.products]
        this.setState({products:addProductList})

    }

    render () {
        
        const finalProductList = this.state.products.filter(product => {
            if (product.remove) {
                return false
            } else {
                return true
            }
        })

        let total = finalProductList.reduce(getTotal, 0);
        function getTotal(total, item) {
        return total + (item.value * item.quantity);
        }

        return (
            <Block>
                <Title>Carrinho:</Title>
                
                        {finalProductList.map(product => {
                            return (
                                <ProductBlock>
                                    <ProductLine>
                                        <Quantity>{product.quantity}x</Quantity>
                                        <ProductName>
                                            {product.name}
                                        </ProductName>
                                        <Remove onClick={() => this.removeProductItem(product.id)}>{product.selector}</Remove>   
                                    </ProductLine>
                                    <Divider/>
                                </ProductBlock>
                            )
                        })}
                
                <TotalBlock>
                    <TotalTitle>Total:</TotalTitle>
                    <TotalSum>US${total}.00</TotalSum>
                </TotalBlock>

            </Block>

        )

    }

}