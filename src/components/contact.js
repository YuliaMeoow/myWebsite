import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col} from 'reactstrap';

import './styles/contact.css'

export default class Example extends React.Component {
    render() {
      return (
          <Container className='contact-form' href='contact'>
              <h2>Свяжитесь со мной</h2> 
            <Form>
                <FormGroup row>
                    <Label for="" sm={2} size="lg"></Label>
                    <Col className="col-lg-8 col-md-8 col-sm-12">
                        <Input type="text" placeholder="Введите имя" bsSize="lg" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="" sm={2} size="lg"></Label>
                    <Col className="col-lg-8 col-md-8 col-sm-12">
                        <Input type="text" placeholder="Введите email" bsSize="lg" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="" sm={2} size="lg"></Label>
                    <Col className="col-lg-8 col-md-8 col-sm-12">
                        <Input type="textarea" bsSize="lg" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 8 }}>
                        <Button className="btn btn-dark">Отправить</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      );
    }
  }