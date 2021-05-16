/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Alert, Button, Col, Collapse, Container, Fade, Jumbotron, Modal, Nav, Navbar, NavbarBrand,
    NavbarText, NavbarToggler, NavItem, NavLink, Row, Spinner, UncontrolledCarousel
} from "reactstrap";
import Head from "next/head";
import Project from "../component/Project";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>My Website Portfolio | React App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <AppHeader/>
                <AppMain/>
                <AppFooter/>
            </React.Fragment>
        );
    }
}

export function AppNavbar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
            <Navbar color="primary" dark fixed="top" expand="md" className="text-center">
                <Container className="themed-container" fluid={true}>
                    <NavbarBrand href="/" className="font-weight-bold">Adam</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">Project</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#portfolio">About Me</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>React.js version : {React.version}</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
            <p className="live-clock"><Button><Clock/></Button></p>
        </React.Fragment>
    )
}

export class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'projects',
        }
    }

    render() {
        return (
            <header>
                {/*  Navbar  */}
                <AppNavbar/>
                {/*  Akhir dari Navbar  */}

                {/*  Jumbotron  */}
                <Jumbotron className="d-flex flex-column align-items-start justify-content-center p-5">
                    <h1 className="display-1 ml-5 pl-5 mb-0">{this.state.name}</h1>
                    <span className="pl-5">Web Developer</span>
                </Jumbotron>
                {/*  Akhir dari Jumbotron  */}
            </header>
        )
    }
}

export class AppMain extends Component {
    render() {
        return (
            <main>
                <Project/>
            </main>
        )
    }
}

export class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Adam Arthur Faizal',
        }
    }
    render() {
        return (
            <footer>
                <Container className="themed-container text-center bg-dark" fluid={true}>
                    <Row>
                        <Col lg="12">
                            <h5 className="text-center">Copyright &copy; {new Date().getFullYear()}. <a href="http://github.com/AdamArthurFaizal">{this.state.name}</a>. All Rights Reserved</h5>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return this.state.date.toLocaleTimeString();
    }
}

// Prop Types

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

Container.propTypes = {
    fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    // applies .container-fluid class if bool or .container-{breakpoint} if string
}

Row.propTypes = {
    noGutters: PropTypes.bool,
    // see https://reactstrap.github.io/components/form Form Grid with Form Row
    form: PropTypes.bool,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        // example size values:
        // 12 || "12" => col-12 or col-`width`-12
        // auto => col-auto or col-`width`-auto
        // true => col or col-`width`
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

Col.propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    // override the predefined width (the ones above) with your own custom widths.
    // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
    widths: PropTypes.array,
}

Alert.propTypes = {
    className: PropTypes.string,
    closeClassName: PropTypes.string,
    color: PropTypes.string, // default: 'success'
    isOpen: PropTypes.bool,  // default: true
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fade: PropTypes.bool, // default: true
    // Controls the transition of the alert fading in and out
    // See Fade for more details
    transition: PropTypes.shape(Fade.propTypes),
}

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
};

Modal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['static'])
    ]),
    // if body of modal should be scrollable when content is long
    scrollable: PropTypes.bool,
    // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    // backdropTransition - controls backdrop transition
    // timeout is 150ms by default to match bootstrap
    // see Fade for more details
    backdropTransition: PropTypes.shape(Fade.propTypes),
    // modalTransition - controls modal transition
    // timeout is 300ms by default to match bootstrap
    // see Fade for more details
    modalTransition: PropTypes.shape(Fade.propTypes),
    innerRef: PropTypes.object,
    // if modal should be destructed/removed from DOM after closing
    unmountOnClose: PropTypes.bool, // defaults to true
    // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
    returnFocusAfterClose: PropTypes.bool // defaults to true
}

Spinner.propTypes = {
    type: PropTypes.string, // default: 'border'
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    children: PropTypes.string, // default: 'Loading...'
};

UncontrolledCarousel.propTypes = {
    items: PropTypes.array.isRequired,
    indicators: PropTypes.bool, // default: true
    controls: PropTypes.bool, // default: true
    autoPlay: PropTypes.bool, // default: true
};

