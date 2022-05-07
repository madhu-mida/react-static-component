import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsFillCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Rating(props) {
    const size = "0.3em"
    return (
        <div className='rating'>
            <Row>
                {props.chartValues.map((element, index) => {
                    return (
                        <Col key={`col-${index}`}>
                            <IconContext.Provider key={`icon-${index}`} value={{ color: element, size: size }}>
                                <div key={`div-${index}`}>
                                    <BsFillCircleFill key={`react-icon-${index}`} />
                                </div>
                            </IconContext.Provider>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}