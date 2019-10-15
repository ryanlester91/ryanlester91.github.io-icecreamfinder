import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import { Container, Row, Col } from "./Components/Grid";
import { IceCreamList, IceCreamListItem } from "./Components/IceCreamList"
import { Input, TextArea, FormBtn } from "./Components/Form";
import { List, ListItem } from "./Components/List";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
class App extends Component {
  state = {
    iceCreams: [],
    iceCreamSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getProduct(this.state.iceCreamSearch)
      .then(res => this.setState({ iceCreams: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9  sm-10">
                      <Input
                        name="iceCreamSearch"
                        value={this.state.iceCreamSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a specific ice cream"
                      />
                    </Col>
                    <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Search
            </Button>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.iceCreams.length ? (
                <h1 className="text-center">No Ice Creams To Display</h1>
              ) : (
                  <IceCreamList>
                    {this.state.iceCreams.map(iceCream => {
                      return (
                        <IceCreamListItem
                          key={iceCream.product}
                          product={iceCream.product}
                          quantity={iceCream.quantity}
                          hasAllergen={iceCream.hasAllergen}
                          price={iceCream.price}
                          inStock={iceCream.inStock}
                        />
                      );
                    })}
                  </IceCreamList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
