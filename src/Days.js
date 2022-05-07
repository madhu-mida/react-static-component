import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Days(props) {
    const size = "0.3em"
    return (
        <div className='rating-days'>
            <Row>
                <Col>S</Col>
                <Col>M</Col>
                <Col>T</Col>
                <Col>W</Col>
                <Col>T</Col>
                <Col>F</Col>
                <Col>S</Col>
            </Row>
        </div>
    );
}