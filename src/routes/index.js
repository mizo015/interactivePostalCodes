import React, { Component } from 'react'
import { CounterContainer, GeoMapContainer } from '../containers'
import { Header } from '../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
           <Route exact path="/" component={CounterContainer} />
           <Route path="/geoMap" component={GeoMapContainer} title="Component Title"/> 
        </Container>
      </Router>
    )
  }
}

export default Routes
