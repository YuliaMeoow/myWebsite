import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import './styles/about.css'
export default class Example extends React.Component {
    render() {
        return (
            <Container className='about'>
                <Row>
                    <Col lg='12' col-md='12' col-sm='12'> 
                        <h2>Обо мне</h2>
                            <h3>
                            Я начинающий разработчик, несостоявшийся экономист и главный почитатель котиков.
                            <br/> 
                            В свободное от великих раздумий время программирую, рисую, привожу свою земную оболочку в спортивную форму.
                            <br/>
                            Люблю общение с интересными людьми, конкатенацию и барное пиво.
                            </h3>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}