import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import config from '../config/config';
import Swal from 'sweetalert2'


export default class FormCalculo extends Component {
    /** Cria variáveis de estado  */
    constructor(props) {
        super(props);
        this.state = {
            localidades: null,
            planos: null,
            origemSelecionada: null,
            destinoSelecionado: null,
            planoSelecionado: null,
            duracao: null,
            resutados: null
        }
    }

    /** Verifica se todos os campos foram preenchidos  e submete dados */
    validaSubmit = async (e) => {
        if(this.state.origemSelecionada == this.state.destinoSelecionado){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Origem e destino devem ser diferentes',
                footer: ''
              })
            e.preventDefault();
            return false;
        }

        if (!this.state.origemSelecionada && !this.state.destinoSelecionado && !this.planoSelecionado) {
            Swal.fire('Você deve selecionar um plano, a origem e o destino da ligação parar continuar! :)');
            e.preventDefault();
        }
        else {
            e.preventDefault();
            console.log('passou aqui', 'destinoselecionado', this.state.destinoSelecionado, 'origemSelecionada', this.state.origemSelecionada, 'plano', this.state.planoSelecionado, 'duracao', this.state.duracao);
            const resultado = await axios.post(`${config.API_URL}calcula/`, {
                "origem": this.state.origemSelecionada,
                "destino": this.state.destinoSelecionado,
                "duracao": this.state.duracao,
                "plano": this.state.planoSelecionado.plano
            });
            this.setState({ resultados: resultado })
        }
    }


    /** Modifica o estado a partir do combo de origem */
    origemChange = (event) => {
        this.setState({ origemSelecionada: event.target.value });
    }

    /** Modifica o estado a partir do combo de origem */
    destinoChange = (event) => {
        this.setState({ destinoSelecionado: event.target.value });
    }

    /** Modifica o estado a partir do combo de planos */
    planosChange = (event) => {
        console.log('event.target', JSON.parse(event.target.value))
        this.setState({ planoSelecionado: JSON.parse(event.target.value) });
    }

    /** Modifica o estado para duração da chamada */
    duracaoChange = (event) => {
        this.setState({ duracao: event.target.value });
    }

    /** Inicializa estado com planos e localidaes */
    async componentDidMount() {
        const localidades = await axios.get(`${config.API_URL}localidades`);
        const planos = await axios.get(`${config.API_URL}planos`);
        this.setState({ planos, localidades });
    }


    render() {
        return (
            <Form onSubmit={(event) => this.validaSubmit(event)}>
                <Form.Group controlId="exampleForm.ControlInput1" >
                    <Form.Label>Origem</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.origemChange(e)}>
                        <option >Selecione um código de origem</option>

                        {
                            this.state.localidades &&
                            this.state.localidades.data.map((item, index) => {
                                return (
                                    <option key={index}>{item.local}</option>
                                );
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destino</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.destinoChange(e)}>
                        <option >Selecione um código de destino</option>
                        {
                            this.state.localidades &&
                            this.state.localidades.data.map((item, index) => {
                                return (
                                    <option key={index}>{item.local}</option>
                                );
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Plano</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.planosChange(e)}>
                        <option >Selecione um plano</option>
                        {
                            this.state.planos &&
                            this.state.planos.data.map((item, index) => {
                                return (
                                    <option value={JSON.stringify(item)} key={index}>{item.nome}</option>
                                );
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Duração</Form.Label>
                    <Form.Control type="text" placeholder="Tempo em minutos" onChange={(e) => this.duracaoChange(e)} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Calcular
                </Button>
                {
                    this.state.resultados &&
                    <Container>
                        <Row>
                            <Col lg={6}>Total com Plano</Col>
                            <Col lg={6}>Total sem plano</Col>
                        </Row>
                        <Row>
                            <Col className="h1 text-warning" lg={6}>{this.state.resultados.data.totalComPlano.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Col>
                            <Col className="h1 text-warning" lg={6}>{this.state.resultados.data.totalSemPlano.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Col>
                        </Row>
                    </Container>
                }
            </Form>
        )
    }
}
