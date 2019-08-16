import React from 'react'
import { Row, Col } from 'reactstrap'

import './styles/main-cat.css'

export default class Example extends React.Component {
    render() {
        return (
            <div className='image-cat' href="/main/">
                <Row>
                    <Col lg>
                        <h1>Hello.<br/>I'm Yulia Meow.</h1>
                    </Col>
                </Row>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
        )
    }
}