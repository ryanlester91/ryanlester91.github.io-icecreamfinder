import React, {Component} from 'react';
import API from "../utils/API";
import {Col, Row, Container} from "../Components/Grid";
import {Input, TextArea, FormBtn} from "../Components/Form";

class ProductList extends Component {
    state = {
        products= "",
        quantity = 0,
        hasAllergen= false,
        price = 0,
        inStock = false
    }

    componentDidMount() {
        this.loadAllProducts();
    }

    loadAllProducts = () => {
        API.loadAllProducts()
        .then(res => this.setState({ products: res.data}))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                    <form>
                        <Input name="product" placeholder="Search for a product"/>
                        <FormBtn>Search</FormBtn>
                    </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {this.state.products.length?( 
                        <List>
                            {this.state.books.map(product=> (
                                <ListItem key={product._id}>
                                </ListItem>
                            ))}
                        </List>
                    ): (
                        <h3>No Results to Display</h3>
                    )}
                    </Col>
                </Row>
            </Container>
        )
    }
}