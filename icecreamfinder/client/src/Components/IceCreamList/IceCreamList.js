import React from "react";
import {Container, Row, Col } from "../Grid";

export function IceCreamList({children}) {
    return <ul className="list-group">{children}</ul>;
}

export function IceCreamListItem({
    product,
    quantity,
    hasAllergen,
    price,
    inStock
}) {
    return(
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col>
                    <h1>{product}</h1>
                    <h2>In Stock: {inStock?"Yes":"No"}</h2>
                    <h2>Number Left In Stock: {quantity}</h2>
                    <h2>Does this have an allegen: {hasAllergen?"Yes":"No"}</h2>
                    <h2>Price: {price}</h2>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}