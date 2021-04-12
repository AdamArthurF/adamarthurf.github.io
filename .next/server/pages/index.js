module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/Project.js":
/*!**********************************!*\
  !*** ./src/component/Project.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */



function Project() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "project"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold mb-3"
  }, "Suwit Jawa Game"), __jsx("p", {
    className: "mb-5 text-center"
  }, "This project is built with HTML, CSS, and JavaScript. The interaction is mostly lead by the state and render the choice, game, result, score accordingly."), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://adamarthurf.github.io/Suwit-Jawa-Game/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/Suwit-Jawa-Game/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "biru p-5 d-flex justify-content-center align-items-center border-bottom "
  }, __jsx("img", {
    src: "img/project/suwit-jawa.png",
    alt: "Suwit Jawa Game",
    className: "img-fluid rounded-lg",
    width: "500"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "orange p-5 d-flex justify-content-center align-items-center"
  }, __jsx("img", {
    src: "img/project/whack-a-mole.png",
    alt: "Pukul Tikus Tanah",
    className: "img-fluid rounded-lg",
    width: "500"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 border-bottom  d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold mb-3"
  }, "Whack a Mole"), __jsx("p", {
    className: "mb-5 text-center"
  }, "Arcade game for children. This project is built with HTML, CSS (Flex Box), and JavaScript"), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://adamarthurf.github.io/Whack-a-Mole/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/Whack-a-Mole/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "AdamMovies | Movie Search Engine"), __jsx("p", {
    className: "mb-5 text-center"
  }, "A simple single page app that contains search engines to find movies. This project fetch and search movies from IMDB API. It build with React.js and Bootstrap"), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://adamarthurf.github.io/AdamMovies/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/AdamMovies/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "hijau p-5 d-flex justify-content-center align-items-center border-bottom "
  }, __jsx("img", {
    src: "img/project/adammovies.png",
    alt: "Adam Movies",
    className: "img-fluid rounded-lg",
    width: "500"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "lime p-5 d-flex justify-content-center align-items-center"
  }, __jsx("img", {
    src: "img/project/todoapp.png",
    alt: "TodoApp",
    className: "img-fluid rounded-lg",
    width: "500"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 border-bottom  d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "Todo App"), __jsx("p", {
    className: "mb-5 text-center"
  }, "Very simple single page app that contains TodoApp. It build with React.js and Reactstrap "), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://adamarthurf.github.io/TodoApp/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/TodoApp/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "p-5 putih d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "Tic Tac Toe Game"), __jsx("p", {
    className: "mb-5 text-center"
  }, "Simple arcade game for children. It build with React.js "), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://adamarthurf.github.io/TodoApp/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/TodoApp/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "coklat p-5 d-flex justify-content-center align-items-center border-bottom "
  }, __jsx("img", {
    src: "img/project/tictactoe.png",
    alt: "Tic Tac Toe",
    className: "img-fluid rounded-lg",
    width: "500"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "biru p-5 d-flex justify-content-center align-items-center"
  }, __jsx("img", {
    src: "img/project/adamanime.png",
    alt: "Adam Anime",
    className: "img-fluid rounded-lg",
    width: "500"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 border-bottom  d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "AdamAnime | Anime Search Engine"), __jsx("p", {
    className: "mb-5 text-center"
  }, "A simple single page app that contains search engines to find animes. This project fetch and search animes from MyAnimelist API. It build with PHP, Bootstrap, and JavaScript."), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://adam-anime.herokuapp.com/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/AdamAnime/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "Arthur Framework"), __jsx("p", {
    className: "mb-5 text-center"
  }, "PHP Framework which is equivalent with excalibur sword"), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center"
  }, __jsx("a", {
    href: "#",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/arthurframework/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "ungu p-5 d-flex justify-content-center align-items-center border-bottom"
  }, __jsx("img", {
    src: "img/project/arthur-framework.png",
    alt: "Arthur Framework",
    className: "img-fluid rounded-lg",
    width: "500"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "orange p-5 d-flex justify-content-center align-items-center"
  }, __jsx("img", {
    src: "img/project/siakad.png",
    alt: "Stasiun Kereta",
    className: "img-fluid rounded-lg",
    width: "500"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 d-flex flex-column align-items-center justify-content-center"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "Simple SIAKAD Web Apps"), __jsx("p", {
    className: "mb-5 text-center"
  }, "Simple web apps that contains feature CRUD Mahasiswa. I created the same two systems with different frameworks, Codeigniter and Laravel. For this I will show the laravel one, while the codeigniter one, please look for it in my GitHub."), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center"
  }, __jsx("a", {
    href: "https://stasiun-kereta-arthur.herokuapp.com/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/adamarthurf/SI_Stasiun_Kereta/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "putih p-5 d-flex flex-column align-items-center justify-content-center border-bottom"
  }, __jsx("h1", {
    className: "text-center font-weight-bold"
  }, "SI Labkom FMIPA UNS"), __jsx("p", {
    className: "mb-5 text-center"
  }, "Labkom FMIPA UNS official website and information system. It build with Laravel, Tailwind CSS, and React.js."), __jsx("div", {
    className: "d-flex flex-row justify-content-center align-items-center "
  }, __jsx("a", {
    href: "https://labkom-mipa-uns.herokuapp.com/",
    className: "btn btn-outline-primary rounded-pill mr-3"
  }, __jsx("i", {
    className: "fas fa-globe-asia"
  }), ' ', "Website"), __jsx("a", {
    href: "https://github.com/labkom-mipa-uns/si-labkom-new/",
    className: "btn btn-outline-danger rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "biru p-5 d-flex justify-content-center align-items-center"
  }, __jsx("img", {
    src: "img/project/labkommipa.png",
    alt: "Labkom",
    className: "img-fluid rounded-lg",
    width: "500"
  })))), __jsx("section", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "pt-5 pb-5"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: {
      size: 3,
      offset: 3
    }
  }, __jsx("img", {
    src: "img/about/foto_sma.jpg",
    alt: "Foto Saya",
    className: "img-fluid"
  }), __jsx("div", {
    className: "d-flex flex-column "
  }, __jsx("a", {
    href: "mailto:adam.faizal.af6@student.uns.ac.id",
    className: "btn btn-outline-danger rounded-pill mt-2 mb-2"
  }, __jsx("i", {
    className: "fas fa-envelope-square"
  }), ' ', __jsx("small", null, __jsx("b", null, "Email: "), "adam.faizal.af6@student.uns.ac.id")), __jsx("a", {
    href: "https://www.linkedin.com/in/adamarthurf/",
    className: "btn btn-outline-primary rounded-pill mb-2"
  }, __jsx("i", {
    className: "fab fa-linkedin"
  }), ' ', __jsx("small", null, __jsx("b", null, "Linkedin: "), "adamarthurf")), __jsx("a", {
    href: "https://github.com/adamarthurf",
    className: "btn btn-outline-dark rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', __jsx("small", null, __jsx("b", null, "GitHub: "), "adamarthurf")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "5"
  }, __jsx("h1", null, "Adam Arthur Faizal"), __jsx("section", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    className: "border-0 pb-0 pt-0"
  }, __jsx("i", {
    className: "fas fa-ribbon"
  }), ' ', __jsx("small", null, "Laravel Developer")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    className: "border-0 pb-0 pt-0"
  }, __jsx("i", {
    className: "fas fa-map-marker-alt"
  }), ' ', __jsx("small", null, "Surakarta, Central Java, Indonesia")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    className: "border-0 pb-0 pt-0"
  }, __jsx("i", {
    className: "fas fa-user-graduate"
  }), ' ', __jsx("small", null, "Sebelas Maret University")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], {
    className: "border-0 pb-0 pt-0"
  }, __jsx("i", {
    className: "fas fa-envelope-square"
  }), ' ', __jsx("small", null, "adam.faizal.af6@student.uns.ac.id")))), __jsx("section", {
    className: " border mt-3 mb-3"
  }), __jsx("section", null, __jsx("p", null, "Hi I'm Arthur. Currently I am studying at Sebelas Maret University, Informatics Engineering Department. I'm 18 years old and I live in Karanganyar. Experienced more than 2 years in the IT world especially on web development. With Laravel and React.js, I've developed many web apps, I also like developed android apps with Kotlin and created beautiful responsive UI with TailwindCSS. Interested on DevOps and Artificial Intelligence. ")), __jsx("section", {
    className: " border mt-3 mb-3"
  }), __jsx("section", null, __jsx("p", null, __jsx("span", {
    className: "text-danger"
  }, "Tech Stack:"), " PHP, JavaScript, Laravel, React, TailwindCSS")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, AppNavbar, AppHeader, AppMain, AppFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbar", function() { return AppNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMain", function() { return AppMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Project */ "./src/component/Project.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "My Website Portfolio | React App"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    })), __jsx(AppHeader, null), __jsx(AppMain, null), __jsx(AppFooter, null));
  }

}
function AppNavbar() {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    color: "primary",
    dark: true,
    fixed: "top",
    expand: "md",
    className: "text-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "themed-container",
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "/",
    className: "font-weight-bold"
  }, "Adam"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "#home"
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "#about"
  }, "Project")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "#portfolio"
  }, "About Me"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarText"], null, "React.js version : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.version)))), __jsx("p", {
    className: "live-clock"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, __jsx(Clock, null))));
}
class AppHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      name: 'projects'
    };
  }

  render() {
    return __jsx("header", null, __jsx(AppNavbar, null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
      className: "d-flex flex-column align-items-start justify-content-center p-5"
    }, __jsx("h1", {
      className: "display-1 ml-5 pl-5 mb-0"
    }, this.state.name), __jsx("span", {
      className: "pl-5"
    }, "Full-Stack Web Developer")));
  }

}
class AppMain extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("main", null, __jsx(_component_Project__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}
class AppFooter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Adam Arthur Faizal'
    };
  }

  render() {
    return __jsx("footer", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      className: "themed-container text-center bg-dark",
      fluid: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "12"
    }, __jsx("h5", {
      className: "text-center"
    }, "Copyright \xA9 ", new Date().getFullYear(), ". ", __jsx("a", {
      href: "http://github.com/AdamArthurFaizal"
    }, this.state.name), ". All Rights Reserved")))));
  }

}

class Clock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return this.state.date.toLocaleTimeString();
  }

} // Prop Types


reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].propTypes = {
  light: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  expand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]) // pass in custom element to use

};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"].propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]) // pass in custom element to use

};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarText"].propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]) // pass in custom element to use

};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"].propTypes = {
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]) // applies .container-fluid class if bool or .container-{breakpoint} if string

};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"].propTypes = {
  noGutters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  sm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  md: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  lg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  xl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};
const stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]);
const columnProps = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // example size values:
  // 12 || "12" => col-12 or col-`width`-12
  // auto => col-auto or col-`width`-auto
  // true => col or col-`width`
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"].propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"].propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // default: 'success'
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // default: true
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // default: true
  // Controls the transition of the alert fading in and out
  // See Fade for more details
  transition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Fade"].propTypes)
};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"].propTypes = {
  // Pass in a Component to override default element
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].propTypes = {
  // boolean to control the state of the popover
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // if modal should be centered vertically in viewport
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // callback for toggling isOpen in the controlling component
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['static'])]),
  // if body of modal should be scrollable when content is long
  scrollable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called on componentWillUnmount
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when done transitioning in
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when done transitioning out
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // zIndex defaults to 1000.
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see Fade for more details
  backdropTransition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Fade"].propTypes),
  // modalTransition - controls modal transition
  // timeout is 300ms by default to match bootstrap
  // see Fade for more details
  modalTransition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Fade"].propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // if modal should be destructed/removed from DOM after closing
  unmountOnClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // defaults to true
  // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
  returnFocusAfterClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool // defaults to true

};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"].propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // default: 'border'
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string // default: 'Loading...'

};
reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledCarousel"].propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  indicators: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // default: true
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // default: true
  autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool // default: true

};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Qcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiUHJvamVjdCIsInNpemUiLCJvZmZzZXQiLCJIb21lIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiQXBwTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJSZWFjdCIsInZlcnNpb24iLCJBcHBIZWFkZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiQXBwTWFpbiIsIkFwcEZvb3RlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkNsb2NrIiwiZGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwidGltZXJJRCIsInNldEludGVydmFsIiwidGljayIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsInNldFN0YXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiTmF2YmFyIiwicHJvcFR5cGVzIiwibGlnaHQiLCJQcm9wVHlwZXMiLCJib29sIiwiZGFyayIsImZpeGVkIiwic3RyaW5nIiwiY29sb3IiLCJyb2xlIiwiZXhwYW5kIiwib25lT2ZUeXBlIiwidGFnIiwiZnVuYyIsIk5hdmJhckJyYW5kIiwiTmF2YmFyVGV4dCIsIkNvbnRhaW5lciIsImZsdWlkIiwiUm93Iiwibm9HdXR0ZXJzIiwiZm9ybSIsInhzIiwibnVtYmVyIiwic20iLCJtZCIsImxnIiwieGwiLCJzdHJpbmdPck51bWJlclByb3AiLCJjb2x1bW5Qcm9wcyIsInNoYXBlIiwib3JkZXIiLCJDb2wiLCJ3aWR0aHMiLCJhcnJheSIsIkFsZXJ0IiwiY2xhc3NOYW1lIiwiY2xvc2VDbGFzc05hbWUiLCJmYWRlIiwidHJhbnNpdGlvbiIsIkZhZGUiLCJKdW1ib3Ryb24iLCJNb2RhbCIsImF1dG9Gb2N1cyIsImNlbnRlcmVkIiwibGFiZWxsZWRCeSIsImtleWJvYXJkIiwiYmFja2Ryb3AiLCJvbmVPZiIsInNjcm9sbGFibGUiLCJvbkVudGVyIiwib25FeGl0Iiwib25PcGVuZWQiLCJvbkNsb3NlZCIsIndyYXBDbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsImJhY2tkcm9wQ2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImNzc01vZHVsZSIsIm9iamVjdCIsInpJbmRleCIsImJhY2tkcm9wVHJhbnNpdGlvbiIsIm1vZGFsVHJhbnNpdGlvbiIsImlubmVyUmVmIiwidW5tb3VudE9uQ2xvc2UiLCJyZXR1cm5Gb2N1c0FmdGVyQ2xvc2UiLCJTcGlubmVyIiwidHlwZSIsImNoaWxkcmVuIiwiVW5jb250cm9sbGVkQ2Fyb3VzZWwiLCJpdGVtcyIsImlzUmVxdWlyZWQiLCJpbmRpY2F0b3JzIiwiY29udHJvbHMiLCJhdXRvUGxheSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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QUFDNUJvRSxVQUFRLEVBQUVyRSxpREFBUyxDQUFDQyxJQUhTO0FBR0g7QUFDMUJxRSxVQUFRLEVBQUV0RSxpREFBUyxDQUFDQyxJQUpTLENBSUg7O0FBSkcsQ0FBakMsQzs7Ozs7Ozs7Ozs7QUMxU0Esc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAyMC4gQWRhbSBBcnRodXIgRmFpemFsLlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFJvdyxcclxuICAgIENvbCxcclxuICAgIExpc3RHcm91cCxcclxuICAgIExpc3RHcm91cEl0ZW1cclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHV0aWggcC01IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZCBtYi0zXCI+U3V3aXQgSmF3YSBHYW1lPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBwcm9qZWN0IGlzIGJ1aWx0IHdpdGggSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC4gVGhlIGludGVyYWN0aW9uIGlzIG1vc3RseSBsZWFkIGJ5IHRoZSBzdGF0ZSBhbmQgcmVuZGVyIHRoZSBjaG9pY2UsIGdhbWUsIHJlc3VsdCwgc2NvcmUgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZGFtYXJ0aHVyZi5naXRodWIuaW8vU3V3aXQtSmF3YS1HYW1lL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31XZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmL1N1d2l0LUphd2EtR2FtZS9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIHJvdW5kZWQtcGlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31HaXRIdWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPSdiaXJ1IHAtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcm9qZWN0L3N1d2l0LWphd2EucG5nXCIgYWx0PVwiU3V3aXQgSmF3YSBHYW1lXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJvcmFuZ2UgcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcm9qZWN0L3doYWNrLWEtbW9sZS5wbmdcIiBhbHQ9XCJQdWt1bCBUaWt1cyBUYW5haFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWxnXCIgd2lkdGg9XCI1MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPSdwdXRpaCBwLTUgYm9yZGVyLWJvdHRvbSAgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGQgbWItM1wiPldoYWNrIGEgTW9sZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyY2FkZSBnYW1lIGZvciBjaGlsZHJlbi4gVGhpcyBwcm9qZWN0IGlzIGJ1aWx0IHdpdGggSFRNTCwgQ1NTIChGbGV4IEJveCksIGFuZCBKYXZhU2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZGFtYXJ0aHVyZi5naXRodWIuaW8vV2hhY2stYS1Nb2xlL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31XZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmL1doYWNrLWEtTW9sZS9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIHJvdW5kZWQtcGlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31HaXRIdWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5BZGFtTW92aWVzIHwgTW92aWUgU2VhcmNoIEVuZ2luZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgc2ltcGxlIHNpbmdsZSBwYWdlIGFwcCB0aGF0IGNvbnRhaW5zIHNlYXJjaCBlbmdpbmVzIHRvIGZpbmQgbW92aWVzLiBUaGlzIHByb2plY3QgZmV0Y2ggYW5kIHNlYXJjaCBtb3ZpZXMgZnJvbSBJTURCIEFQSS4gSXQgYnVpbGQgd2l0aCBSZWFjdC5qcyBhbmQgQm9vdHN0cmFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZGFtYXJ0aHVyZi5naXRodWIuaW8vQWRhbU1vdmllcy9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLXBpbGwgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nbG9iZS1hc2lhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9V2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYXJ0aHVyZi9BZGFtTW92aWVzL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgcm91bmRlZC1waWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfUdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9J2hpamF1IHAtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcm9qZWN0L2FkYW1tb3ZpZXMucG5nXCIgYWx0PVwiQWRhbSBNb3ZpZXNcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1sZ1wiIHdpZHRoPVwiNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cImxpbWUgcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcm9qZWN0L3RvZG9hcHAucG5nXCIgYWx0PVwiVG9kb0FwcFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWxnXCIgd2lkdGg9XCI1MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdXRpaCBwLTUgYm9yZGVyLWJvdHRvbSAgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+VG9kbyBBcHA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ5IHNpbXBsZSBzaW5nbGUgcGFnZSBhcHAgdGhhdCBjb250YWlucyBUb2RvQXBwLiBJdCBidWlsZCB3aXRoIFJlYWN0LmpzIGFuZCBSZWFjdHN0cmFwIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZGFtYXJ0aHVyZi5naXRodWIuaW8vVG9kb0FwcC9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLXBpbGwgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nbG9iZS1hc2lhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9V2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYXJ0aHVyZi9Ub2RvQXBwL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgcm91bmRlZC1waWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfUdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwLTUgcHV0aWggZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+VGljIFRhYyBUb2UgR2FtZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbXBsZSBhcmNhZGUgZ2FtZSBmb3IgY2hpbGRyZW4uIEl0IGJ1aWxkIHdpdGggUmVhY3QuanMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkYW1hcnRodXJmLmdpdGh1Yi5pby9Ub2RvQXBwL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31XZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmL1RvZG9BcHAvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cImNva2xhdCBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1ib3R0b20gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3QvdGljdGFjdG9lLnBuZ1wiIGFsdD1cIlRpYyBUYWMgVG9lXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJiaXJ1IHAtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdC9hZGFtYW5pbWUucG5nXCIgYWx0PVwiQWRhbSBBbmltZVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWxnXCIgd2lkdGg9XCI1MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPSdwdXRpaCBwLTUgYm9yZGVyLWJvdHRvbSAgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5BZGFtQW5pbWUgfCBBbmltZSBTZWFyY2ggRW5naW5lPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBzaW1wbGUgc2luZ2xlIHBhZ2UgYXBwIHRoYXQgY29udGFpbnMgc2VhcmNoIGVuZ2luZXMgdG8gZmluZCBhbmltZXMuIFRoaXMgcHJvamVjdCBmZXRjaCBhbmQgc2VhcmNoIGFuaW1lcyBmcm9tIE15QW5pbWVsaXN0IEFQSS4gSXQgYnVpbGQgd2l0aCBQSFAsIEJvb3RzdHJhcCwgYW5kIEphdmFTY3JpcHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hZGFtLWFuaW1lLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvQWRhbUFuaW1lL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgcm91bmRlZC1waWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfUdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdXRpaCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+QXJ0aHVyIEZyYW1ld29yazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBIUCBGcmFtZXdvcmsgd2hpY2ggaXMgZXF1aXZhbGVudCB3aXRoIGV4Y2FsaWJ1ciBzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31XZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmL2FydGh1cmZyYW1ld29yay9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIHJvdW5kZWQtcGlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31HaXRIdWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPSd1bmd1IHAtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3QvYXJ0aHVyLWZyYW1ld29yay5wbmdcIiBhbHQ9XCJBcnRodXIgRnJhbWV3b3JrXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9J29yYW5nZSBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdC9zaWFrYWQucG5nXCIgYWx0PVwiU3Rhc2l1biBLZXJldGFcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1sZ1wiIHdpZHRoPVwiNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5TaW1wbGUgU0lBS0FEIFdlYiBBcHBzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1wbGUgd2ViIGFwcHMgdGhhdCBjb250YWlucyBmZWF0dXJlIENSVUQgTWFoYXNpc3dhLiBJIGNyZWF0ZWQgdGhlIHNhbWUgdHdvIHN5c3RlbXMgd2l0aCBkaWZmZXJlbnQgZnJhbWV3b3JrcywgQ29kZWlnbml0ZXIgYW5kIExhcmF2ZWwuIEZvciB0aGlzIEkgd2lsbCBzaG93IHRoZSBsYXJhdmVsIG9uZSwgd2hpbGUgdGhlIGNvZGVpZ25pdGVyIG9uZSwgcGxlYXNlIGxvb2sgZm9yIGl0IGluIG15IEdpdEh1Yi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3Rhc2l1bi1rZXJldGEtYXJ0aHVyLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvU0lfU3Rhc2l1bl9LZXJldGEvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZFwiPlNJIExhYmtvbSBGTUlQQSBVTlM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIExhYmtvbSBGTUlQQSBVTlMgb2ZmaWNpYWwgd2Vic2l0ZSBhbmQgaW5mb3JtYXRpb24gc3lzdGVtLiBJdCBidWlsZCB3aXRoIExhcmF2ZWwsIFRhaWx3aW5kIENTUywgYW5kIFJlYWN0LmpzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFia29tLW1pcGEtdW5zLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGFia29tLW1pcGEtdW5zL3NpLWxhYmtvbS1uZXcvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT0nYmlydSBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdC9sYWJrb21taXBhLnBuZ1wiIGFsdD1cIkxhYmtvbVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWxnXCIgd2lkdGg9XCI1MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfSBjbGFzc05hbWU9XCJwdC01IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXt7c2l6ZTozLCBvZmZzZXQ6M319ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fib3V0L2ZvdG9fc21hLmpwZ1wiIGFsdD1cIkZvdG8gU2F5YVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86YWRhbS5mYWl6YWwuYWY2QHN0dWRlbnQudW5zLmFjLmlkXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGwgbXQtMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZS1zcXVhcmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9PHNtYWxsPjxiPkVtYWlsOiA8L2I+YWRhbS5mYWl6YWwuYWY2QHN0dWRlbnQudW5zLmFjLmlkPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hZGFtYXJ0aHVyZi9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLXBpbGwgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9PHNtYWxsPjxiPkxpbmtlZGluOiA8L2I+YWRhbWFydGh1cmY8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgcm91bmRlZC1waWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9PHNtYWxsPjxiPkdpdEh1YjogPC9iPmFkYW1hcnRodXJmPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkYW0gQXJ0aHVyIEZhaXphbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBjbGFzc05hbWU9XCJib3JkZXItMCBwYi0wIHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1yaWJib25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfTxzbWFsbD5MYXJhdmVsIERldmVsb3Blcjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gY2xhc3NOYW1lPVwiYm9yZGVyLTAgcGItMCBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfTxzbWFsbD5TdXJha2FydGEsIENlbnRyYWwgSmF2YSwgSW5kb25lc2lhPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBjbGFzc05hbWU9XCJib3JkZXItMCBwYi0wIHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWdyYWR1YXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ308c21hbGw+U2ViZWxhcyBNYXJldCBVbml2ZXJzaXR5PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbSBjbGFzc05hbWU9XCJib3JkZXItMCBwYi0wIHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZS1zcXVhcmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfTxzbWFsbD5hZGFtLmZhaXphbC5hZjZAc3R1ZGVudC51bnMuYWMuaWQ8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgYm9yZGVyIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGkgSSdtIEFydGh1ci4gQ3VycmVudGx5IEkgYW0gc3R1ZHlpbmcgYXQgU2ViZWxhcyBNYXJldCBVbml2ZXJzaXR5LCBJbmZvcm1hdGljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50LiBJJ20gMTggeWVhcnMgb2xkIGFuZCBJIGxpdmUgaW4gS2FyYW5nYW55YXIuIEV4cGVyaWVuY2VkIG1vcmUgdGhhbiAyIHllYXJzIGluIHRoZSBJVCB3b3JsZCBlc3BlY2lhbGx5IG9uIHdlYiBkZXZlbG9wbWVudC4gV2l0aCBMYXJhdmVsIGFuZCBSZWFjdC5qcywgSSd2ZSBkZXZlbG9wZWQgbWFueSB3ZWIgYXBwcywgSSBhbHNvIGxpa2UgZGV2ZWxvcGVkIGFuZHJvaWQgYXBwcyB3aXRoIEtvdGxpbiBhbmQgY3JlYXRlZCBiZWF1dGlmdWwgcmVzcG9uc2l2ZSBVSSB3aXRoIFRhaWx3aW5kQ1NTLiBJbnRlcmVzdGVkIG9uIERldk9wcyBhbmQgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIiBib3JkZXIgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlRlY2ggU3RhY2s6PC9zcGFuPiBQSFAsIEphdmFTY3JpcHQsIExhcmF2ZWwsIFJlYWN0LCBUYWlsd2luZENTUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAyMC4gQWRhbSBBcnRodXIgRmFpemFsLlxyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICAgIEFsZXJ0LCBCdXR0b24sIENvbCwgQ29sbGFwc2UsIENvbnRhaW5lciwgRmFkZSwgSnVtYm90cm9uLCBNb2RhbCwgTmF2LCBOYXZiYXIsIE5hdmJhckJyYW5kLFxyXG4gICAgTmF2YmFyVGV4dCwgTmF2YmFyVG9nZ2xlciwgTmF2SXRlbSwgTmF2TGluaywgUm93LCBTcGlubmVyLCBVbmNvbnRyb2xsZWRDYXJvdXNlbFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudC9Qcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TXkgV2Vic2l0ZSBQb3J0Zm9saW8gfCBSZWFjdCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEFwcEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8QXBwTWFpbi8+XHJcbiAgICAgICAgICAgICAgICA8QXBwRm9vdGVyLz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwTmF2YmFyKCl7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgY29sb3I9XCJwcmltYXJ5XCIgZGFyayBmaXhlZD1cInRvcFwiIGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGhlbWVkLWNvbnRhaW5lclwiIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+QWRhbTwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIiNhYm91dFwiPlByb2plY3Q8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI3BvcnRmb2xpb1wiPkFib3V0IE1lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRleHQ+UmVhY3QuanMgdmVyc2lvbiA6IHtSZWFjdC52ZXJzaW9ufTwvTmF2YmFyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXZlLWNsb2NrXCI+PEJ1dHRvbj48Q2xvY2svPjwvQnV0dG9uPjwvcD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwcm9qZWN0cycsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgey8qICBOYXZiYXIgICovfVxyXG4gICAgICAgICAgICAgICAgPEFwcE5hdmJhci8+XHJcbiAgICAgICAgICAgICAgICB7LyogIEFraGlyIGRhcmkgTmF2YmFyICAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogIEp1bWJvdHJvbiAgKi99XHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTEgbWwtNSBwbC01IG1iLTBcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtNVwiPkZ1bGwtU3RhY2sgV2ViIERldmVsb3Blcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgICAgey8qICBBa2hpciBkYXJpIEp1bWJvdHJvbiAgKi99XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3QvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBZGFtIEFydGh1ciBGYWl6YWwnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0aGVtZWQtY29udGFpbmVyIHRleHQtY2VudGVyIGJnLWRhcmtcIiBmbHVpZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Db3B5cmlnaHQgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiA8YSBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vQWRhbUFydGh1ckZhaXphbFwiPnt0aGlzLnN0YXRlLm5hbWV9PC9hPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2xvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lcklEID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy50aWNrKCksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQcm9wIFR5cGVzXHJcblxyXG5OYXZiYXIucHJvcFR5cGVzID0ge1xyXG4gICAgbGlnaHQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGFyazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBmaXhlZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGV4cGFuZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKVxyXG4gICAgLy8gcGFzcyBpbiBjdXN0b20gZWxlbWVudCB0byB1c2VcclxufVxyXG5cclxuTmF2YmFyQnJhbmQucHJvcFR5cGVzID0ge1xyXG4gICAgdGFnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pXHJcbiAgICAvLyBwYXNzIGluIGN1c3RvbSBlbGVtZW50IHRvIHVzZVxyXG59XHJcblxyXG5OYXZiYXJUZXh0LnByb3BUeXBlcyA9IHtcclxuICAgIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKVxyXG4gICAgLy8gcGFzcyBpbiBjdXN0b20gZWxlbWVudCB0byB1c2VcclxufVxyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZsdWlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pXHJcbiAgICAvLyBhcHBsaWVzIC5jb250YWluZXItZmx1aWQgY2xhc3MgaWYgYm9vbCBvciAuY29udGFpbmVyLXticmVha3BvaW50fSBpZiBzdHJpbmdcclxufVxyXG5cclxuUm93LnByb3BUeXBlcyA9IHtcclxuICAgIG5vR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBzZWUgaHR0cHM6Ly9yZWFjdHN0cmFwLmdpdGh1Yi5pby9jb21wb25lbnRzL2Zvcm0gRm9ybSBHcmlkIHdpdGggRm9ybSBSb3dcclxuICAgIGZvcm06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgeHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBtZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgbGc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcclxufVxyXG5cclxuY29uc3Qgc3RyaW5nT3JOdW1iZXJQcm9wID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pO1xyXG5jb25zdCBjb2x1bW5Qcm9wcyA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgICAgICAvLyBleGFtcGxlIHNpemUgdmFsdWVzOlxyXG4gICAgICAgIC8vIDEyIHx8IFwiMTJcIiA9PiBjb2wtMTIgb3IgY29sLWB3aWR0aGAtMTJcclxuICAgICAgICAvLyBhdXRvID0+IGNvbC1hdXRvIG9yIGNvbC1gd2lkdGhgLWF1dG9cclxuICAgICAgICAvLyB0cnVlID0+IGNvbCBvciBjb2wtYHdpZHRoYFxyXG4gICAgICAgIG9yZGVyOiBzdHJpbmdPck51bWJlclByb3AsXHJcbiAgICAgICAgb2Zmc2V0OiBzdHJpbmdPck51bWJlclByb3BcclxuICAgIH0pXHJcbl0pO1xyXG5cclxuQ29sLnByb3BUeXBlcyA9IHtcclxuICAgIHhzOiBjb2x1bW5Qcm9wcyxcclxuICAgIHNtOiBjb2x1bW5Qcm9wcyxcclxuICAgIG1kOiBjb2x1bW5Qcm9wcyxcclxuICAgIGxnOiBjb2x1bW5Qcm9wcyxcclxuICAgIHhsOiBjb2x1bW5Qcm9wcyxcclxuICAgIC8vIG92ZXJyaWRlIHRoZSBwcmVkZWZpbmVkIHdpZHRoICh0aGUgb25lcyBhYm92ZSkgd2l0aCB5b3VyIG93biBjdXN0b20gd2lkdGhzLlxyXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXAvaXNzdWVzLzI5NyNpc3N1ZWNvbW1lbnQtMjczNTU2MTE2XHJcbiAgICB3aWR0aHM6IFByb3BUeXBlcy5hcnJheSxcclxufVxyXG5cclxuQWxlcnQucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xvc2VDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdDogJ3N1Y2Nlc3MnXHJcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sLCAgLy8gZGVmYXVsdDogdHJ1ZVxyXG4gICAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIGZhZGU6IFByb3BUeXBlcy5ib29sLCAvLyBkZWZhdWx0OiB0cnVlXHJcbiAgICAvLyBDb250cm9scyB0aGUgdHJhbnNpdGlvbiBvZiB0aGUgYWxlcnQgZmFkaW5nIGluIGFuZCBvdXRcclxuICAgIC8vIFNlZSBGYWRlIGZvciBtb3JlIGRldGFpbHNcclxuICAgIHRyYW5zaXRpb246IFByb3BUeXBlcy5zaGFwZShGYWRlLnByb3BUeXBlcyksXHJcbn1cclxuXHJcbkp1bWJvdHJvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBQYXNzIGluIGEgQ29tcG9uZW50IHRvIG92ZXJyaWRlIGRlZmF1bHQgZWxlbWVudFxyXG4gICAgdGFnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBib29sZWFuIHRvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBwb3BvdmVyXHJcbiAgICBpc09wZW46ICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBpZiBtb2RhbCBzaG91bGQgYmUgY2VudGVyZWQgdmVydGljYWxseSBpbiB2aWV3cG9ydFxyXG4gICAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gY29ycmVzcG9uZHMgdG8gYm9vdHN0cmFwJ3MgbW9kYWwgc2l6ZXMsIGllLiAnbGcnIG9yICdzbSdcclxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvLyBjYWxsYmFjayBmb3IgdG9nZ2xpbmcgaXNPcGVuIGluIHRoZSBjb250cm9sbGluZyBjb21wb25lbnRcclxuICAgIHRvZ2dsZTogIFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdHMgdG8gXCJkaWFsb2dcIlxyXG4gICAgLy8gdXNlZCB0byByZWZlcmVuY2UgdGhlIElEIG9mIHRoZSB0aXRsZSBlbGVtZW50IGluIHRoZSBtb2RhbFxyXG4gICAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGtleWJvYXJkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIGNvbnRyb2wgYmFja2Ryb3AsIHNlZSBodHRwOi8vdjQtYWxwaGEuZ2V0Ym9vdHN0cmFwLmNvbS9jb21wb25lbnRzL21vZGFsLyNvcHRpb25zXHJcbiAgICBiYWNrZHJvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXHJcbiAgICBdKSxcclxuICAgIC8vIGlmIGJvZHkgb2YgbW9kYWwgc2hvdWxkIGJlIHNjcm9sbGFibGUgd2hlbiBjb250ZW50IGlzIGxvbmdcclxuICAgIHNjcm9sbGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gYWxsb3dzIGZvciBhIG5vZGUvY29tcG9uZW50IHRvIGV4aXN0IG5leHQgdG8gdGhlIG1vZGFsIChvdXRzaWRlIG9mIGl0KS4gVXNlZnVsIGZvciBleHRlcm5hbCBjbG9zZSBidXR0b25zXHJcbiAgICAvLyBleHRlcm5hbDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAvLyBjYWxsZWQgb24gY29tcG9uZW50RGlkTW91bnRcclxuICAgIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgLy8gY2FsbGVkIG9uIGNvbXBvbmVudFdpbGxVbm1vdW50XHJcbiAgICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgLy8gY2FsbGVkIHdoZW4gZG9uZSB0cmFuc2l0aW9uaW5nIGluXHJcbiAgICBvbk9wZW5lZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAvLyBjYWxsZWQgd2hlbiBkb25lIHRyYW5zaXRpb25pbmcgb3V0XHJcbiAgICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB3cmFwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvLyBib29sZWFuIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgZmFkZSB0cmFuc2l0aW9uIG9jY3VycyAoZGVmYXVsdDogdHJ1ZSlcclxuICAgIGZhZGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY3NzTW9kdWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gekluZGV4IGRlZmF1bHRzIHRvIDEwMDAuXHJcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIF0pLFxyXG4gICAgLy8gYmFja2Ryb3BUcmFuc2l0aW9uIC0gY29udHJvbHMgYmFja2Ryb3AgdHJhbnNpdGlvblxyXG4gICAgLy8gdGltZW91dCBpcyAxNTBtcyBieSBkZWZhdWx0IHRvIG1hdGNoIGJvb3RzdHJhcFxyXG4gICAgLy8gc2VlIEZhZGUgZm9yIG1vcmUgZGV0YWlsc1xyXG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxyXG4gICAgLy8gbW9kYWxUcmFuc2l0aW9uIC0gY29udHJvbHMgbW9kYWwgdHJhbnNpdGlvblxyXG4gICAgLy8gdGltZW91dCBpcyAzMDBtcyBieSBkZWZhdWx0IHRvIG1hdGNoIGJvb3RzdHJhcFxyXG4gICAgLy8gc2VlIEZhZGUgZm9yIG1vcmUgZGV0YWlsc1xyXG4gICAgbW9kYWxUcmFuc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxyXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAvLyBpZiBtb2RhbCBzaG91bGQgYmUgZGVzdHJ1Y3RlZC9yZW1vdmVkIGZyb20gRE9NIGFmdGVyIGNsb3NpbmdcclxuICAgIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgd2hpY2ggdHJpZ2dlcmVkIHRoZSBtb2RhbCB0byBvcGVuIHNob3VsZCBmb2N1c2VkIGFmdGVyIHRoZSBtb2RhbCBjbG9zZXMgKHNlZSBleGFtcGxlIHNvbWV3aGVyZSBiZWxvdylcclxuICAgIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxyXG59XHJcblxyXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGRlZmF1bHQ6ICdib3JkZXInXHJcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdDogJ0xvYWRpbmcuLi4nXHJcbn07XHJcblxyXG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBpbmRpY2F0b3JzOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVmYXVsdDogdHJ1ZVxyXG4gICAgY29udHJvbHM6IFByb3BUeXBlcy5ib29sLCAvLyBkZWZhdWx0OiB0cnVlXHJcbiAgICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsIC8vIGRlZmF1bHQ6IHRydWVcclxufTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==