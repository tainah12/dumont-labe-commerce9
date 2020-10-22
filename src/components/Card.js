import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  background-color:#D93636;
};
`;


export default class Card extends React.Component {
    render() {
        return (
            <Container>
                <Img src={this.props.image} alt={this.props.name} />
                <p>{this.props.name}</p>
                <p>US$ {this.props.value}</p>
                <Button>Comprar</Button>
            </Container>
        )
    }
}