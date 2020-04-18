/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {Component} from 'react';
import '../sass/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Col, Container, Row, Media, NavLink} from "reactstrap";

class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <Container className="themed-container">
                    <Row>
                        <Col sm="12" className="text-center">
                            <h2 className="font-weight-bold">Contact</h2>
                        </Col>
                    </Row>
                    <div className="d-lg-flex justify-content-center">
                        <Alert color="info" id="alert-kiri">
                            <Media>
                                <Media left href="https://wa.me/6281234535633">
                                    {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                    <i className="fab fa-whatsapp fa-4x mr-3"/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <h5 className="mt-2 font-weight-bold">WhatsApp</h5>
                                    </Media>
                                    <h6 className="mt-0"><NavLink href="https://wa.me/6281234535633" className="btn-link" title="WhatsApp" target="_blank">+62 812-3453-5633</NavLink></h6>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="https://github.com/adamarthurf">
                                    {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                    <i className="fab fa-github fa-4x mr-3"/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <h5 className=" mt-2 font-weight-bold">GitHub</h5>
                                    </Media>
                                    <h6 className="mt-0"><NavLink href="https://github.com/AdamArthurF" className="btn-link my-medsos" title="Github" target="_blank">AdamArthurF</NavLink></h6>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="https://gitlab.com/adamarthurfaizal">
                                    {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                    <i className="fab fa-gitlab fa-4x mr-3"/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <h5 className=" mt-2 font-weight-bold">GitLab</h5>
                                    </Media>
                                    <h6 className="mt-0"><NavLink href="https://gitlab.com/AdamArthurFaizal" className="btn-link my-medsos" title="GitLab" target="_blank">AdamArthurFaizal</NavLink></h6>
                                </Media>
                            </Media>
                        </Alert>
                        <Alert color="info" id="alert-kanan">
                            <Media>
                                <Media left href="https://instagram.com/adam.arthur_f">
                                    {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                    <i className="fab fa-instagram fa-4x mr-3"/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <h5 className="mt-2 font-weight-bold">Instagram</h5>
                                    </Media>
                                    <h6 className="mt-0"><NavLink href="https://instagram.com/adam.arthur_f" className="btn-link my-medsos" title="Instagram" target="_blank">@adam.arthur_f</NavLink></h6>                                </Media>
                            </Media>
                            <Media>
                                <Media left href="https://facebook.com/arthur.faiz777">
                                    {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                    <i className="fab fa-facebook fa-4x mr-3"/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <h5 className="mt-2 font-weight-bold">Facebook</h5>
                                    </Media>
                                    <h6 className="mt-0"><NavLink href="https://facebook.com/arthur.faiz777" className="btn-link my-medsos" title="Facebook" target="_blank">Adam Arthur Faizal</NavLink></h6>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="https://twitter.com/arthur_faiz777">
                                    {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                    <i className="fab fa-twitter fa-4x mr-3"/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <h5 className="mt-2 font-weight-bold">Twitter</h5>
                                    </Media>
                                    <h6 className="mt-0"><NavLink href="https://twitter.com/arthur_faiz777" className="btn-link my-medsos" title="Twitter" target="_blank">@arthur_faiz777</NavLink></h6>
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Contact;