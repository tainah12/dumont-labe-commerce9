import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: 5px;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    align-items: center;
`;

const Img = styled.img`
    width: 100%;
    min-height: 170px;
    max-height: 170px;
    border-radius: 20px;
`;

const Title = styled.p`
    font-weight: bold;
    margin: auto;
`

const Price = styled.p`
    font-weight: bold;
    margin: 10px;
`

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
    background-color:#D93636;
    };
`;


export default class Card extends React.Component {
    sendId = (id) => {
        this.props.addShopping(id)
      }

    render() {
        return (
            <Container>
                <Img src={this.props.image} alt={this.props.name} />
                <Title>{this.props.title}</Title>
                <Price>US$ {this.props.price}</Price>
                <Button onClick={this.sendId}>Comprar</Button>
            </Container>
        )
    }
}