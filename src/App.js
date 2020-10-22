import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Filter from './components/Filter/Filter'

export default class App extends Component {
  render() {
    return (
      <div>
          <Filter />
      </div>
    );
  }
}

