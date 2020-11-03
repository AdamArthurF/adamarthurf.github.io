/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Container, Row, Col} from "reactstrap";
import Link from "next/link";

function Portfolio() {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);
    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);
    const toggle4 = () => setModal4(!modal4);
    const toggle5 = () => setModal5(!modal5);
    const toggle6 = () => setModal6(!modal6);
    return (
        <section className="portofolio" id="portfolio">
            <Container className="themed-container">
                <Row>
                    <Col sm="12">
                        <h2 className="text-center font-weight-bold">Portfolio</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Link href="#" onClick={toggle}>
                            <img src="https://picsum.photos/id/0/400/300" alt="Naruto" className="img-thumbnail"/>
                        </Link>
                        <Modal isOpen={modal} toggle={toggle} size="lg">
                            <ModalHeader toggle={toggle}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src='https://picsum.photos/id/0/400/300' alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <Link href="#" onClick={toggle2}>
                            <img src='https://picsum.photos/id/1041/400/300' alt="Naruto" className="img-thumbnail"/>
                        </Link>
                        <Modal isOpen={modal2} toggle={toggle2} size="lg">
                            <ModalHeader toggle={toggle2}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src='https://picsum.photos/id/1041/400/300' alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle2}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <Link href="#" onClick={toggle3}>
                            <img src='https://picsum.photos/id/1051/400/300' alt="Naruto" className="img-thumbnail"/>
                        </Link>
                        <Modal isOpen={modal3} toggle={toggle3} size="lg">
                            <ModalHeader toggle={toggle3}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src='https://picsum.photos/id/1050/400/300' alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle3}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <Link href="#" onClick={toggle4}>
                            <img src='https://picsum.photos/id/1060/400/300' alt="Naruto" className="img-thumbnail"/>
                        </Link>
                        <Modal isOpen={modal4} toggle={toggle4} size="lg">
                            <ModalHeader toggle={toggle4}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src='https://picsum.photos/id/1060/400/300' alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle4}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <Link href="#" onClick={toggle5}>
                            <img src='https://picsum.photos/id/1079/400/300' alt="Naruto" className="img-thumbnail"/>
                        </Link>
                        <Modal isOpen={modal5} toggle={toggle5} size="lg">
                            <ModalHeader toggle={toggle5}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src='https://picsum.photos/id/1079/400/300' alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle5}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <Link href="#" onClick={toggle6}>
                            <img src='https://picsum.photos/id/109/400/300' alt="Naruto" className="img-thumbnail"/>
                        </Link>
                        <Modal isOpen={modal6} toggle={toggle6} size="lg">
                            <ModalHeader toggle={toggle6}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src='https://picsum.photos/id/109/400/300' alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle6}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio;
