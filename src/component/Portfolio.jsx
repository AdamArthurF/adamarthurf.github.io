/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {useState} from 'react';
import gambar1 from '../img/loading/DSC0021.JPG';
import gambar2 from '../img/loading/DSC0061.JPG';
import gambar3 from '../img/loading/IMG_2979.JPG';
import gambar4 from '../img/loading/IMG_8154.JPG';
import gambar5 from '../img/loading/IMG_9483.JPG';
import gambar6 from '../img/loading/IMG_9618.JPG';
import {NavLink} from "react-router-dom";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Container, Row, Col} from "reactstrap";

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
        <section className="portofolio" id="portofolio">
            <Container className="themed-container">
                <Row>
                    <Col sm="12">
                        <h2 className="text-center font-weight-bold">Portfolio</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <NavLink to="#" onClick={toggle}>
                            <img src={gambar1} alt="Naruto" className="img-thumbnail"/>
                        </NavLink>
                        <Modal isOpen={modal} toggle={toggle} size="lg">
                            <ModalHeader toggle={toggle}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src={gambar1} alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <NavLink to="#" onClick={toggle2}>
                            <img src={gambar2} alt="Naruto" className="img-thumbnail"/>
                        </NavLink>
                        <Modal isOpen={modal2} toggle={toggle2} size="lg">
                            <ModalHeader toggle={toggle2}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src={gambar2} alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle2}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <NavLink to="#" onClick={toggle3}>
                            <img src={gambar3} alt="Naruto" className="img-thumbnail"/>
                        </NavLink>
                        <Modal isOpen={modal3} toggle={toggle3} size="lg">
                            <ModalHeader toggle={toggle3}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src={gambar3} alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle3}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <NavLink to="#" onClick={toggle4}>
                            <img src={gambar4} alt="Naruto" className="img-thumbnail"/>
                        </NavLink>
                        <Modal isOpen={modal4} toggle={toggle4} size="lg">
                            <ModalHeader toggle={toggle4}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src={gambar4} alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle4}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <NavLink to="#" onClick={toggle5}>
                            <img src={gambar5} alt="Naruto" className="img-thumbnail"/>
                        </NavLink>
                        <Modal isOpen={modal5} toggle={toggle5} size="lg">
                            <ModalHeader toggle={toggle5}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src={gambar5} alt="gambar" className="img-thumbnail"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle5}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="4">
                        <NavLink to="#" onClick={toggle6}>
                            <img src={gambar6} alt="Naruto" className="img-thumbnail"/>
                        </NavLink>
                        <Modal isOpen={modal6} toggle={toggle6} size="lg">
                            <ModalHeader toggle={toggle6}>Portfolio</ModalHeader>
                            <ModalBody>
                                <img src={gambar6} alt="gambar" className="img-thumbnail"/>
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