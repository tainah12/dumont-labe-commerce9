import React, { Component } from 'react';
import './styles';

import {
  Container,
  ItemContainer,
  H2,
  Label,
  Input,
} from './styles'

export default class Filter extends Component {
  state = {
    minValue: "",
    maxValue: "",
    searchProduct: ""
  }

  onChangeMinValue = async (event) => {
    await this.setState({minValue: Number(event.target.value)})

    this.props.filteredValues(this.state.minValue, this.state.maxValue || 10000000.0, this.state.searchProduct)
  }
  onChangeMaxValue = async (event) => {
    await this.setState({maxValue: Number(event.target.value)})
    this.props.filteredValues(this.state.minValue, this.state.maxValue || 10000000.0, this.state.searchProduct)
  }
  onChangesearchProduct = async (event) => {
    await this.setState({searchProduct: event.target.value})

    this.props.filteredValues(this.state.minValue, this.state.maxValue || 10000000.0, this.state.searchProduct) 
  }

  render() {
    return (
      <Container>
        <H2>Filtros:</H2>
        <ItemContainer>
          <Label>Valor Mínimo:</Label>
          <Input type={'number'} value={this.state.minValue || ""} onChange={this.onChangeMinValue} min={0}/>
        </ItemContainer>
        <ItemContainer>
          <Label>Valor Máximo:</Label>
          <Input type={'number'} value={this.state.maxValue || ""} onChange={this.onChangeMaxValue} min={0}/>
        </ItemContainer>
        <ItemContainer>
          <Label>Buscar Produto: </Label>
          <Input type={'text'} value={this.state.searchProduct} onChange={this.onChangesearchProduct}/>
        </ItemContainer>
      </Container>
    )
  }
}