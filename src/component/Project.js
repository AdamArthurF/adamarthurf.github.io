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

                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center'>
                        <img src="img/project/suwit-jawa.png" alt="Suwit Jawa Game" className="img-fluid" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/whack-a-mole.png" alt="Pukul Tikus Tanah" className="img-fluid" width="500"/>
                    </Col>

                    <Col sm="6" className='putih p-5'>
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
                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center'>
                        <img src="img/project/adammovies.png" alt="Adam Movies" className="img-fluid" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/todoapp.png" alt="TodoApp" className="img-fluid" width="500"/>
                    </Col>

                    <Col sm="6" className="putih p-5">
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
                            <a href="https://adamarthurf.github.io/tictactoe/" className="btn btn-outline-primary rounded-pill mr-3">
                                <i className="fas fa-globe-asia"/>
                                {' '}Website
                            </a>
                            <a href="https://github.com/adamarthurf/tictactoe/" className="btn btn-outline-danger rounded-pill">
                                <i className="fab fa-github"/>
                                {' '}GitHub
                            </a>
                        </div>
                    </Col>

                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/tictactoe.png" alt="Tic Tac Toe" className="img-fluid" width="500"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6" className="biru p-5 d-flex justify-content-center align-items-center">
                        <img src="img/project/adamanime.png" alt="Adam Anime" className="img-fluid" width="500"/>
                    </Col>

                    <Col sm="6" className='putih p-5'>
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
                        <div className="d-flex flex-row justify-content-center align-items-center ">
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

                    <Col sm="6" className='biru p-5 d-flex justify-content-center align-items-center'>
                        <img src="img/project/stasiun-kereta.png" alt="Stasiun Kereta" className="img-fluid" width="500"/>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    )
}

export default Project;
