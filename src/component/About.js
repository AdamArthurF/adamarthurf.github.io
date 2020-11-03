/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class About extends Component {
    render() {
        return (
            <section className="about" id="about">
                <Container className="themed-container">
                    <Row>
                        <Col sm="12">
                            <h2 className="text-center font-weight-bold">About</h2>
                        </Col>
                    </Row>
                    <Row id="about-content">
                        <Col sm="6">
                            <p className="text-justify">
                                Hai namaku Adam, kalian bisa memanggilku Arthur. Saat ini aku sedang berkuliah di
                                Universitas
                                Sebelas Maret Surakarta, program studi Teknik Informatika angkatan 2019. Umurku baru 17
                                tahun dan alamat
                                rumahku di Karanganyar.
                            </p>
                        </Col>
                        <Col sm={{size: 5, offset: 1}}>
                            <div className="my_Pic img-fluid">
                                <img className="img-thumbnail" id="my_Pic" src='/img/about/foto_sma.jpg' alt="Foto SMA"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;
