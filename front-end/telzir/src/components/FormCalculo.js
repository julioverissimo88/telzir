import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class FormCalculo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localidades: null,
            planos: null
        }
    }

    async componentDidMount() {
        console.log('process.env.API_URL', process);
        // const localidades = await axios.get('')
    }


    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Origem</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destino</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Plano</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Duração</Form.Label>
                    <Form.Control type="text" placeholder="Tempo em minutos" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Calcular
                </Button>
            </Form>
        )
    }
}
