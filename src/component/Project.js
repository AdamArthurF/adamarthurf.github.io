/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from "reactstrap";
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
                            <a href="https://adamarthurf.github.io/Suwit-Jawa-Game/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/Suwit-Jawa-Game/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>

                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center border-bottom border-secondary'>
                        <img src="img/project/suwit-jawa.png" alt="Suwit Jawa Game" className="img-fluid rounded-lg" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/whack-a-mole.png" alt="Pukul Tikus Tanah" className="img-fluid rounded-lg" width="500"/>
                    </Col>

                    <Col sm="6" className='putih p-5 border-bottom border-secondary'>
                        <h1 className="text-center font-weight-bold mb-3">Whack a Mole</h1>
                        <p className="mb-5 text-center">
                            Arcade game for children. This project is built with HTML, CSS (Flex Box), and JavaScript
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="https://adamarthurf.github.io/Whack-a-Mole/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/Whack-a-Mole/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>

                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="putih p-5">
                        <h1 className="text-center font-weight-bold">AdamMovies | Movie Search Engine</h1>
                        <p className="mb-5 text-center">
                            A simple single page app that contains search engines to find movies. This project fetch and search movies from IMDB API. It build with React.js and Bootstrap
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="https://adamarthurf.github.io/AdamMovies/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/AdamMovies/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>

                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center border-bottom border-secondary'>
                        <img src="img/project/adammovies.png" alt="Adam Movies" className="img-fluid rounded-lg" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/todoapp.png" alt="TodoApp" className="img-fluid rounded-lg" width="500"/>
                    </Col>
                    <Col sm="6" className="putih p-5 border-bottom border-secondary">
                        <h1 className="text-center font-weight-bold">Todo App</h1>
                        <p className="mb-5 text-center">
                            Very simple single page app that contains TodoApp. It build with React.js and Reactstrap </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="https://adamarthurf.github.io/TodoApp/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/TodoApp/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="p-5">
                        <h1 className="text-center font-weight-bold">Tic Tac Toe Game</h1>
                        <p className="mb-5 text-center">
                            Simple arcade game for children. It build with React.js </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="https://adamarthurf.github.io/TodoApp/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/TodoApp/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>

                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center border-bottom border-secondary">
                        <img src="img/project/tictactoe.png" alt="Tic Tac Toe" className="img-fluid rounded-lg" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/adamanime.png" alt="Adam Anime" className="img-fluid rounded-lg" width="500"/>
                    </Col>

                    <Col sm="6" className='putih p-5 border-bottom border-secondary '>
                        <h1 className="text-center font-weight-bold">AdamAnime | Anime Search Engine</h1>
                        <p className="mb-5 text-center">
                            A simple single page app that contains search engines to find animes. This project fetch and search animes from MyAnimelist API. It build with PHP, Bootstrap, and JavaScript.
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="https://adam-anime.herokuapp.com/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/AdamAnime/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="putih p-5">
                        <h1 className="text-center font-weight-bold">Simple SI Stasiun Kereta</h1>
                        <p className="mb-5 text-center">
                           Simple web apps that contains feature CRUD Stasiun, Kereta, Tiket, dan Penumpang. It build with PHP Native, Bootstrap, and JavaScript.
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <a href="https://stasiun-kereta-arthur.herokuapp.com/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/SI_Stasiun_Kereta/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>

                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center border-bottom border-secondary'>
                        <img src="img/project/stasiun-kereta.png" alt="Stasiun Kereta" className="img-fluid rounded-lg" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center'>
                        <img src="img/project/labkommipa.png" alt="Labkom" className="img-fluid rounded-lg" width="500"/>
                    </Col>


                    <Col sm="6" className="putih p-5 border-bottom border-secondary">
                        <h1 className="text-center font-weight-bold">SI Labkom FMIPA UNS</h1>
                        <p className="mb-5 text-center">
                           Labkom FMIPA UNS official website and information system. It build with Laravel, Tailwind CSS, and React.js.
                        </p>
                        <div className="d-flex flex-row justify-content-center align-items-center ">
                            <a href="https://labkom-mipa-uns.herokuapp.com/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/labkom-mipa-uns/si-labkom-new/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>
                </Row>
            </section>
            <section>
                <Container fluid={true} className="pt-5 pb-5">
                    <Row>
                        <Col sm={{size:3, offset:3}} >
                            <img src="img/about/foto_sma.jpg" alt="Foto Saya" className="img-fluid"/>
                            <div className="d-flex flex-column ">
                                <a href="mailto:adam.faizal.af6@student.uns.ac.id" className="btn btn-outline-danger rounded-pill mt-2 mb-2">
                                    <i className="fas fa-envelope-square"/>
                                    {' '}Email: adam.faizal.af6@student.uns.ac.id
                                </a>
                                <a href="https://www.linkedin.com/in/adamarthurf/" className="btn btn-outline-primary rounded-pill mb-2">
                                    <i className="fab fa-linkedin"/>
                                    {' '}Linkedin: adamarthurf
                                </a>
                                <a href="https://github.com/adamarthurf" className="btn btn-outline-dark rounded-pill">
                                    <i className="fab fa-github"/>
                                    {' '}GitHub: adamarthurf
                                </a>
                            </div>

                        </Col>
                        <Col sm="5">
                            <h1>Adam Arthur Faizal</h1>
                            <section>
                                <ListGroup>
                                    <ListGroupItem className="border-0 pb-0 pt-0">
                                        <i className="fas fa-ribbon"/>
                                        {' '}<small>Laravel Developer</small>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pb-0 pt-0">
                                        <i className="fas fa-map-marker-alt"/>
                                        {' '}<small>Surakarta, Central Java, Indonesia</small>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pb-0 pt-0">
                                        <i className="fas fa-user-graduate"/>
                                        {' '}<small>Sebelas Maret University</small>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pb-0 pt-0">
                                        <i className="fas fa-envelope-square"/>
                                        {' '}<small>adam.faizal.af6@student.uns.ac.id</small>
                                    </ListGroupItem>
                                </ListGroup>
                            </section>
                            <section className="border-secondary border mt-3 mb-3">
                            </section>
                            <section>
                                <p>Hi I'm Arthur. Currently I am studying at Sebelas Maret University, Informatics Engineering Department. I'm only 18 years old and I live in Karanganyar. Experienced more than 2 years in the IT world especially on web development. With Laravel and React.js, I'm developing many web apps, I also like developing android apps with Kotlin and creating beautiful responsive UI with TailwindCSS. Interested on DevOps and Artificial Intelligence. </p>
                            </section>
                            <section className="border-secondary border mt-3 mb-3">
                            </section>
                            <section>
                                <p><span className="text-danger">Tech Stack:</span> PHP, JavaScript, Laravel, React, TailwindCSS</p>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Project;
