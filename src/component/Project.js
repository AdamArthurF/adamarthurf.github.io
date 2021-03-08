/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Container, Row, Col} from "reactstrap";
import Link from "next/link";

function Project() {

    return (
        <React.Fragment>
            <section className="project">
                <Row>
                    <Col sm="6" className="putih p-5 d-flex flex-column align-items-center justify-content-center">
                        <h1 className="text-center font-weight-bold mb-3">Suwit Jawa Game</h1>
                        <p className="mb-5 text-center">
                            This project is built with HTML, CSS, and JavaScript. The interaction is mostly lead by the state and render the choice, game, result, score accordingly.
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="#" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>
                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center'>
                        <img src="img/project/project1.jpg" alt="" className="img-fluid"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6" className="biru p-5">
                    </Col>
                    <Col sm="6" className='putih p-5'>
                        <h1 className="text-center font-weight-bold mb-3">Whack a Mole</h1>
                        <p className="mb-5 text-center">
                            Arcade game for children. This project is built with HTML, CSS (Flex Box), and JavaScript
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="#" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col sm="6" className="putih p-5">
                        <h1 className="text-center font-weight-bold">Movie Search Engine</h1>
                    </Col>
                    <Col sm="6" className='biru p-5'>

                    </Col>
                </Row>
                <Row>
                    <Col sm="6" className="biru p-5">
                    </Col>
                    <Col sm="6" className='putih p-5'>
                    <h1 className="text-center font-weight-bold">Anime Rental Website</h1>

                    </Col>
                </Row>
                <Row>
                    <Col sm="6" className="putih p-5">
                        <h1 className="text-center font-weight-bold">Simple Siakad Website</h1>
                    </Col>
                    <Col sm="6" className='biru p-5'>

                    </Col>
                </Row>
            </section>
        </React.Fragment>
    )
}

export default Project;
