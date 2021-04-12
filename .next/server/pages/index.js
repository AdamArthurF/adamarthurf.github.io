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
  }), ' ', "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    className: "orange p-5 d-flex justify-content-center align-items-center border-bottom"
  }, __jsx("img", {
    src: "img/project/siakad.png",
    alt: "Stasiun Kereta",
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
    className: "hijau p-5 d-flex justify-content-center align-items-center"
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
  }), ' ', "Email: adam.faizal.af6@student.uns.ac.id"), __jsx("a", {
    href: "https://www.linkedin.com/in/adamarthurf/",
    className: "btn btn-outline-primary rounded-pill mb-2"
  }, __jsx("i", {
    className: "fab fa-linkedin"
  }), ' ', "Linkedin: adamarthurf"), __jsx("a", {
    href: "https://github.com/adamarthurf",
    className: "btn btn-outline-dark rounded-pill"
  }, __jsx("i", {
    className: "fab fa-github"
  }), ' ', "GitHub: adamarthurf"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
    color: "secondary",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Qcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiUHJvamVjdCIsInNpemUiLCJvZmZzZXQiLCJIb21lIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiQXBwTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJSZWFjdCIsInZlcnNpb24iLCJBcHBIZWFkZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiQXBwTWFpbiIsIkFwcEZvb3RlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkNsb2NrIiwiZGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwidGltZXJJRCIsInNldEludGVydmFsIiwidGljayIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsInNldFN0YXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiTmF2YmFyIiwicHJvcFR5cGVzIiwibGlnaHQiLCJQcm9wVHlwZXMiLCJib29sIiwiZGFyayIsImZpeGVkIiwic3RyaW5nIiwiY29sb3IiLCJyb2xlIiwiZXhwYW5kIiwib25lT2ZUeXBlIiwidGFnIiwiZnVuYyIsIk5hdmJhckJyYW5kIiwiTmF2YmFyVGV4dCIsIkNvbnRhaW5lciIsImZsdWlkIiwiUm93Iiwibm9HdXR0ZXJzIiwiZm9ybSIsInhzIiwibnVtYmVyIiwic20iLCJtZCIsImxnIiwieGwiLCJzdHJpbmdPck51bWJlclByb3AiLCJjb2x1bW5Qcm9wcyIsInNoYXBlIiwib3JkZXIiLCJDb2wiLCJ3aWR0aHMiLCJhcnJheSIsIkFsZXJ0IiwiY2xhc3NOYW1lIiwiY2xvc2VDbGFzc05hbWUiLCJmYWRlIiwidHJhbnNpdGlvbiIsIkZhZGUiLCJKdW1ib3Ryb24iLCJNb2RhbCIsImF1dG9Gb2N1cyIsImNlbnRlcmVkIiwibGFiZWxsZWRCeSIsImtleWJvYXJkIiwiYmFja2Ryb3AiLCJvbmVPZiIsInNjcm9sbGFibGUiLCJvbkVudGVyIiwib25FeGl0Iiwib25PcGVuZWQiLCJvbkNsb3NlZCIsIndyYXBDbGFzc05hbWUiLCJtb2RhbENsYXNzTmFtZSIsImJhY2tkcm9wQ2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImNzc01vZHVsZSIsIm9iamVjdCIsInpJbmRleCIsImJhY2tkcm9wVHJhbnNpdGlvbiIsIm1vZGFsVHJhbnNpdGlvbiIsImlubmVyUmVmIiwidW5tb3VudE9uQ2xvc2UiLCJyZXR1cm5Gb2N1c0FmdGVyQ2xvc2UiLCJTcGlubmVyIiwidHlwZSIsImNoaWxkcmVuIiwiVW5jb250cm9sbGVkQ2Fyb3VzZWwiLCJpdGVtcyIsImlzUmVxdWlyZWQiLCJpbmRpY2F0b3JzIiwiY29udHJvbHMiLCJhdXRvUGxheSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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QUFTLENBQUNDLElBSlMsQ0FJSDs7QUFKRyxDQUFqQyxDOzs7Ozs7Ozs7OztBQzFTQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDIwLiBBZGFtIEFydGh1ciBGYWl6YWwuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgTGlzdEdyb3VwLFxyXG4gICAgTGlzdEdyb3VwSXRlbVxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3RcIj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdXRpaCBwLTUgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkIG1iLTNcIj5TdXdpdCBKYXdhIEdhbWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHByb2plY3QgaXMgYnVpbHQgd2l0aCBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBUaGUgaW50ZXJhY3Rpb24gaXMgbW9zdGx5IGxlYWQgYnkgdGhlIHN0YXRlIGFuZCByZW5kZXIgdGhlIGNob2ljZSwgZ2FtZSwgcmVzdWx0LCBzY29yZSBhY2NvcmRpbmdseS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkYW1hcnRodXJmLmdpdGh1Yi5pby9TdXdpdC1KYXdhLUdhbWUvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvU3V3aXQtSmF3YS1HYW1lL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgcm91bmRlZC1waWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfUdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9J2JpcnUgcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3Qvc3V3aXQtamF3YS5wbmdcIiBhbHQ9XCJTdXdpdCBKYXdhIEdhbWVcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1sZ1wiIHdpZHRoPVwiNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cIm9yYW5nZSBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3Qvd2hhY2stYS1tb2xlLnBuZ1wiIGFsdD1cIlB1a3VsIFRpa3VzIFRhbmFoXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9J3B1dGloIHAtNSBib3JkZXItYm90dG9tICBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZCBtYi0zXCI+V2hhY2sgYSBNb2xlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJjYWRlIGdhbWUgZm9yIGNoaWxkcmVuLiBUaGlzIHByb2plY3QgaXMgYnVpbHQgd2l0aCBIVE1MLCBDU1MgKEZsZXggQm94KSwgYW5kIEphdmFTY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkYW1hcnRodXJmLmdpdGh1Yi5pby9XaGFjay1hLU1vbGUvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvV2hhY2stYS1Nb2xlL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgcm91bmRlZC1waWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfUdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHV0aWggcC01IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZFwiPkFkYW1Nb3ZpZXMgfCBNb3ZpZSBTZWFyY2ggRW5naW5lPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBzaW1wbGUgc2luZ2xlIHBhZ2UgYXBwIHRoYXQgY29udGFpbnMgc2VhcmNoIGVuZ2luZXMgdG8gZmluZCBtb3ZpZXMuIFRoaXMgcHJvamVjdCBmZXRjaCBhbmQgc2VhcmNoIG1vdmllcyBmcm9tIElNREIgQVBJLiBJdCBidWlsZCB3aXRoIFJlYWN0LmpzIGFuZCBCb290c3RyYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkYW1hcnRodXJmLmdpdGh1Yi5pby9BZGFtTW92aWVzL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31XZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmL0FkYW1Nb3ZpZXMvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT0naGlqYXUgcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3QvYWRhbW1vdmllcy5wbmdcIiBhbHQ9XCJBZGFtIE1vdmllc1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWxnXCIgd2lkdGg9XCI1MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwibGltZSBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3QvdG9kb2FwcC5wbmdcIiBhbHQ9XCJUb2RvQXBwXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBib3JkZXItYm90dG9tICBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5Ub2RvIEFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnkgc2ltcGxlIHNpbmdsZSBwYWdlIGFwcCB0aGF0IGNvbnRhaW5zIFRvZG9BcHAuIEl0IGJ1aWxkIHdpdGggUmVhY3QuanMgYW5kIFJlYWN0c3RyYXAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkYW1hcnRodXJmLmdpdGh1Yi5pby9Ub2RvQXBwL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31XZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkYW1hcnRodXJmL1RvZG9BcHAvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInAtNSBwdXRpaCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5UaWMgVGFjIFRvZSBHYW1lPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2ltcGxlIGFyY2FkZSBnYW1lIGZvciBjaGlsZHJlbi4gSXQgYnVpbGQgd2l0aCBSZWFjdC5qcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWRhbWFydGh1cmYuZ2l0aHViLmlvL1RvZG9BcHAvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvVG9kb0FwcC9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIHJvdW5kZWQtcGlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31HaXRIdWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwiY29rbGF0IHAtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdC90aWN0YWN0b2UucG5nXCIgYWx0PVwiVGljIFRhYyBUb2VcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1sZ1wiIHdpZHRoPVwiNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cImJpcnUgcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcm9qZWN0L2FkYW1hbmltZS5wbmdcIiBhbHQ9XCJBZGFtIEFuaW1lXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9J3B1dGloIHAtNSBib3JkZXItYm90dG9tICBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZFwiPkFkYW1BbmltZSB8IEFuaW1lIFNlYXJjaCBFbmdpbmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIHNpbXBsZSBzaW5nbGUgcGFnZSBhcHAgdGhhdCBjb250YWlucyBzZWFyY2ggZW5naW5lcyB0byBmaW5kIGFuaW1lcy4gVGhpcyBwcm9qZWN0IGZldGNoIGFuZCBzZWFyY2ggYW5pbWVzIGZyb20gTXlBbmltZWxpc3QgQVBJLiBJdCBidWlsZCB3aXRoIFBIUCwgQm9vdHN0cmFwLCBhbmQgSmF2YVNjcmlwdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FkYW0tYW5pbWUuaGVyb2t1YXBwLmNvbS9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLXBpbGwgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nbG9iZS1hc2lhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9V2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYXJ0aHVyZi9BZGFtQW5pbWUvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5TaW1wbGUgU0lBS0FEIFdlYiBBcHBzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1wbGUgd2ViIGFwcHMgdGhhdCBjb250YWlucyBmZWF0dXJlIENSVUQgTWFoYXNpc3dhLiBJIGNyZWF0ZWQgdGhlIHNhbWUgdHdvIHN5c3RlbXMgd2l0aCBkaWZmZXJlbnQgZnJhbWV3b3JrcywgQ29kZWlnbml0ZXIgYW5kIExhcmF2ZWwuIEZvciB0aGlzIEkgd2lsbCBzaG93IHRoZSBsYXJhdmVsIG9uZSwgd2hpbGUgdGhlIGNvZGVpZ25pdGVyIG9uZSwgcGxlYXNlIGxvb2sgZm9yIGl0IGluIG15IEdpdEh1Yi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3Rhc2l1bi1rZXJldGEtYXJ0aHVyLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvU0lfU3Rhc2l1bl9LZXJldGEvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT0nb3JhbmdlIHAtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3Qvc2lha2FkLnBuZ1wiIGFsdD1cIlN0YXNpdW4gS2VyZXRhXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtbGdcIiB3aWR0aD1cIjUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9J29yYW5nZSBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJvamVjdC9zaWFrYWQucG5nXCIgYWx0PVwiU3Rhc2l1biBLZXJldGFcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1sZ1wiIHdpZHRoPVwiNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5TaW1wbGUgU0lBS0FEIFdlYiBBcHBzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1wbGUgd2ViIGFwcHMgdGhhdCBjb250YWlucyBmZWF0dXJlIENSVUQgTWFoYXNpc3dhLiBJIGNyZWF0ZWQgdGhlIHNhbWUgdHdvIHN5c3RlbXMgd2l0aCBkaWZmZXJlbnQgZnJhbWV3b3JrcywgQ29kZWlnbml0ZXIgYW5kIExhcmF2ZWwuIEZvciB0aGlzIEkgd2lsbCBzaG93IHRoZSBsYXJhdmVsIG9uZSwgd2hpbGUgdGhlIGNvZGVpZ25pdGVyIG9uZSwgcGxlYXNlIGxvb2sgZm9yIGl0IGluIG15IEdpdEh1Yi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3Rhc2l1bi1rZXJldGEtYXJ0aHVyLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmYvU0lfU3Rhc2l1bl9LZXJldGEvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB1dGloIHAtNSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZFwiPlNJIExhYmtvbSBGTUlQQSBVTlM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIExhYmtvbSBGTUlQQSBVTlMgb2ZmaWNpYWwgd2Vic2l0ZSBhbmQgaW5mb3JtYXRpb24gc3lzdGVtLiBJdCBidWlsZCB3aXRoIExhcmF2ZWwsIFRhaWx3aW5kIENTUywgYW5kIFJlYWN0LmpzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFia29tLW1pcGEtdW5zLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC1waWxsIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmUtYXNpYVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGFia29tLW1pcGEtdW5zL3NpLWxhYmtvbS1uZXcvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9R2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT0naGlqYXUgcC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Byb2plY3QvbGFia29tbWlwYS5wbmdcIiBhbHQ9XCJMYWJrb21cIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1sZ1wiIHdpZHRoPVwiNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD17dHJ1ZX0gY2xhc3NOYW1lPVwicHQtNSBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17e3NpemU6Mywgb2Zmc2V0OjN9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hYm91dC9mb3RvX3NtYS5qcGdcIiBhbHQ9XCJGb3RvIFNheWFcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmFkYW0uZmFpemFsLmFmNkBzdHVkZW50LnVucy5hYy5pZFwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgcm91bmRlZC1waWxsIG10LTIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtc3F1YXJlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfUVtYWlsOiBhZGFtLmZhaXphbC5hZjZAc3R1ZGVudC51bnMuYWMuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hZGFtYXJ0aHVyZi9cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLXBpbGwgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9TGlua2VkaW46IGFkYW1hcnRodXJmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRhbWFydGh1cmZcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31HaXRIdWI6IGFkYW1hcnRodXJmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGFtIEFydGh1ciBGYWl6YWw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gY2xhc3NOYW1lPVwiYm9yZGVyLTAgcGItMCBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcmliYm9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ308c21hbGw+TGFyYXZlbCBEZXZlbG9wZXI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGNsYXNzTmFtZT1cImJvcmRlci0wIHBiLTAgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ308c21hbGw+U3VyYWthcnRhLCBDZW50cmFsIEphdmEsIEluZG9uZXNpYTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gY2xhc3NOYW1lPVwiYm9yZGVyLTAgcGItMCBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1ncmFkdWF0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9PHNtYWxsPlNlYmVsYXMgTWFyZXQgVW5pdmVyc2l0eTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gY2xhc3NOYW1lPVwiYm9yZGVyLTAgcGItMCBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtc3F1YXJlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ308c21hbGw+YWRhbS5mYWl6YWwuYWY2QHN0dWRlbnQudW5zLmFjLmlkPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiIGJvcmRlciBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhpIEknbSBBcnRodXIuIEN1cnJlbnRseSBJIGFtIHN0dWR5aW5nIGF0IFNlYmVsYXMgTWFyZXQgVW5pdmVyc2l0eSwgSW5mb3JtYXRpY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudC4gSSdtIDE4IHllYXJzIG9sZCBhbmQgSSBsaXZlIGluIEthcmFuZ2FueWFyLiBFeHBlcmllbmNlZCBtb3JlIHRoYW4gMiB5ZWFycyBpbiB0aGUgSVQgd29ybGQgZXNwZWNpYWxseSBvbiB3ZWIgZGV2ZWxvcG1lbnQuIFdpdGggTGFyYXZlbCBhbmQgUmVhY3QuanMsIEkndmUgZGV2ZWxvcGVkIG1hbnkgd2ViIGFwcHMsIEkgYWxzbyBsaWtlIGRldmVsb3BlZCBhbmRyb2lkIGFwcHMgd2l0aCBLb3RsaW4gYW5kIGNyZWF0ZWQgYmVhdXRpZnVsIHJlc3BvbnNpdmUgVUkgd2l0aCBUYWlsd2luZENTUy4gSW50ZXJlc3RlZCBvbiBEZXZPcHMgYW5kIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgYm9yZGVyIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5UZWNoIFN0YWNrOjwvc3Bhbj4gUEhQLCBKYXZhU2NyaXB0LCBMYXJhdmVsLCBSZWFjdCwgVGFpbHdpbmRDU1M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAuIEFkYW0gQXJ0aHVyIEZhaXphbC5cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBbGVydCwgQnV0dG9uLCBDb2wsIENvbGxhcHNlLCBDb250YWluZXIsIEZhZGUsIEp1bWJvdHJvbiwgTW9kYWwsIE5hdiwgTmF2YmFyLCBOYXZiYXJCcmFuZCxcclxuICAgIE5hdmJhclRleHQsIE5hdmJhclRvZ2dsZXIsIE5hdkl0ZW0sIE5hdkxpbmssIFJvdywgU3Bpbm5lciwgVW5jb250cm9sbGVkQ2Fyb3VzZWxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnQvUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk15IFdlYnNpdGUgUG9ydGZvbGlvIHwgUmVhY3QgQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxBcHBIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPEFwcE1haW4vPlxyXG4gICAgICAgICAgICAgICAgPEFwcEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcE5hdmJhcigpe1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwic2Vjb25kYXJ5XCIgZGFyayBmaXhlZD1cInRvcFwiIGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGhlbWVkLWNvbnRhaW5lclwiIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+QWRhbTwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIiNhYm91dFwiPlByb2plY3Q8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI3BvcnRmb2xpb1wiPkFib3V0IE1lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRleHQ+UmVhY3QuanMgdmVyc2lvbiA6IHtSZWFjdC52ZXJzaW9ufTwvTmF2YmFyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXZlLWNsb2NrXCI+PEJ1dHRvbj48Q2xvY2svPjwvQnV0dG9uPjwvcD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwcm9qZWN0cycsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgey8qICBOYXZiYXIgICovfVxyXG4gICAgICAgICAgICAgICAgPEFwcE5hdmJhci8+XHJcbiAgICAgICAgICAgICAgICB7LyogIEFraGlyIGRhcmkgTmF2YmFyICAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogIEp1bWJvdHJvbiAgKi99XHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTEgbWwtNSBwbC01IG1iLTBcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtNVwiPkZ1bGwtU3RhY2sgV2ViIERldmVsb3Blcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgICAgey8qICBBa2hpciBkYXJpIEp1bWJvdHJvbiAgKi99XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3QvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBZGFtIEFydGh1ciBGYWl6YWwnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0aGVtZWQtY29udGFpbmVyIHRleHQtY2VudGVyIGJnLWRhcmtcIiBmbHVpZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Db3B5cmlnaHQgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiA8YSBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vQWRhbUFydGh1ckZhaXphbFwiPnt0aGlzLnN0YXRlLm5hbWV9PC9hPi4gQWxsIFJpZ2h0cyBSZXNlcnZlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2xvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lcklEID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy50aWNrKCksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQcm9wIFR5cGVzXHJcblxyXG5OYXZiYXIucHJvcFR5cGVzID0ge1xyXG4gICAgbGlnaHQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGFyazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBmaXhlZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGV4cGFuZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKVxyXG4gICAgLy8gcGFzcyBpbiBjdXN0b20gZWxlbWVudCB0byB1c2VcclxufVxyXG5cclxuTmF2YmFyQnJhbmQucHJvcFR5cGVzID0ge1xyXG4gICAgdGFnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pXHJcbiAgICAvLyBwYXNzIGluIGN1c3RvbSBlbGVtZW50IHRvIHVzZVxyXG59XHJcblxyXG5OYXZiYXJUZXh0LnByb3BUeXBlcyA9IHtcclxuICAgIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKVxyXG4gICAgLy8gcGFzcyBpbiBjdXN0b20gZWxlbWVudCB0byB1c2VcclxufVxyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZsdWlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pXHJcbiAgICAvLyBhcHBsaWVzIC5jb250YWluZXItZmx1aWQgY2xhc3MgaWYgYm9vbCBvciAuY29udGFpbmVyLXticmVha3BvaW50fSBpZiBzdHJpbmdcclxufVxyXG5cclxuUm93LnByb3BUeXBlcyA9IHtcclxuICAgIG5vR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBzZWUgaHR0cHM6Ly9yZWFjdHN0cmFwLmdpdGh1Yi5pby9jb21wb25lbnRzL2Zvcm0gRm9ybSBHcmlkIHdpdGggRm9ybSBSb3dcclxuICAgIGZvcm06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgeHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBtZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgbGc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcclxufVxyXG5cclxuY29uc3Qgc3RyaW5nT3JOdW1iZXJQcm9wID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pO1xyXG5jb25zdCBjb2x1bW5Qcm9wcyA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgICAgICAvLyBleGFtcGxlIHNpemUgdmFsdWVzOlxyXG4gICAgICAgIC8vIDEyIHx8IFwiMTJcIiA9PiBjb2wtMTIgb3IgY29sLWB3aWR0aGAtMTJcclxuICAgICAgICAvLyBhdXRvID0+IGNvbC1hdXRvIG9yIGNvbC1gd2lkdGhgLWF1dG9cclxuICAgICAgICAvLyB0cnVlID0+IGNvbCBvciBjb2wtYHdpZHRoYFxyXG4gICAgICAgIG9yZGVyOiBzdHJpbmdPck51bWJlclByb3AsXHJcbiAgICAgICAgb2Zmc2V0OiBzdHJpbmdPck51bWJlclByb3BcclxuICAgIH0pXHJcbl0pO1xyXG5cclxuQ29sLnByb3BUeXBlcyA9IHtcclxuICAgIHhzOiBjb2x1bW5Qcm9wcyxcclxuICAgIHNtOiBjb2x1bW5Qcm9wcyxcclxuICAgIG1kOiBjb2x1bW5Qcm9wcyxcclxuICAgIGxnOiBjb2x1bW5Qcm9wcyxcclxuICAgIHhsOiBjb2x1bW5Qcm9wcyxcclxuICAgIC8vIG92ZXJyaWRlIHRoZSBwcmVkZWZpbmVkIHdpZHRoICh0aGUgb25lcyBhYm92ZSkgd2l0aCB5b3VyIG93biBjdXN0b20gd2lkdGhzLlxyXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXAvaXNzdWVzLzI5NyNpc3N1ZWNvbW1lbnQtMjczNTU2MTE2XHJcbiAgICB3aWR0aHM6IFByb3BUeXBlcy5hcnJheSxcclxufVxyXG5cclxuQWxlcnQucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xvc2VDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdDogJ3N1Y2Nlc3MnXHJcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sLCAgLy8gZGVmYXVsdDogdHJ1ZVxyXG4gICAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHRhZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIGZhZGU6IFByb3BUeXBlcy5ib29sLCAvLyBkZWZhdWx0OiB0cnVlXHJcbiAgICAvLyBDb250cm9scyB0aGUgdHJhbnNpdGlvbiBvZiB0aGUgYWxlcnQgZmFkaW5nIGluIGFuZCBvdXRcclxuICAgIC8vIFNlZSBGYWRlIGZvciBtb3JlIGRldGFpbHNcclxuICAgIHRyYW5zaXRpb246IFByb3BUeXBlcy5zaGFwZShGYWRlLnByb3BUeXBlcyksXHJcbn1cclxuXHJcbkp1bWJvdHJvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBQYXNzIGluIGEgQ29tcG9uZW50IHRvIG92ZXJyaWRlIGRlZmF1bHQgZWxlbWVudFxyXG4gICAgdGFnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBib29sZWFuIHRvIGNvbnRyb2wgdGhlIHN0YXRlIG9mIHRoZSBwb3BvdmVyXHJcbiAgICBpc09wZW46ICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBpZiBtb2RhbCBzaG91bGQgYmUgY2VudGVyZWQgdmVydGljYWxseSBpbiB2aWV3cG9ydFxyXG4gICAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gY29ycmVzcG9uZHMgdG8gYm9vdHN0cmFwJ3MgbW9kYWwgc2l6ZXMsIGllLiAnbGcnIG9yICdzbSdcclxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvLyBjYWxsYmFjayBmb3IgdG9nZ2xpbmcgaXNPcGVuIGluIHRoZSBjb250cm9sbGluZyBjb21wb25lbnRcclxuICAgIHRvZ2dsZTogIFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcm9sZTogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdHMgdG8gXCJkaWFsb2dcIlxyXG4gICAgLy8gdXNlZCB0byByZWZlcmVuY2UgdGhlIElEIG9mIHRoZSB0aXRsZSBlbGVtZW50IGluIHRoZSBtb2RhbFxyXG4gICAgbGFiZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGtleWJvYXJkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIGNvbnRyb2wgYmFja2Ryb3AsIHNlZSBodHRwOi8vdjQtYWxwaGEuZ2V0Ym9vdHN0cmFwLmNvbS9jb21wb25lbnRzL21vZGFsLyNvcHRpb25zXHJcbiAgICBiYWNrZHJvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXHJcbiAgICBdKSxcclxuICAgIC8vIGlmIGJvZHkgb2YgbW9kYWwgc2hvdWxkIGJlIHNjcm9sbGFibGUgd2hlbiBjb250ZW50IGlzIGxvbmdcclxuICAgIHNjcm9sbGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLy8gYWxsb3dzIGZvciBhIG5vZGUvY29tcG9uZW50IHRvIGV4aXN0IG5leHQgdG8gdGhlIG1vZGFsIChvdXRzaWRlIG9mIGl0KS4gVXNlZnVsIGZvciBleHRlcm5hbCBjbG9zZSBidXR0b25zXHJcbiAgICAvLyBleHRlcm5hbDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAvLyBjYWxsZWQgb24gY29tcG9uZW50RGlkTW91bnRcclxuICAgIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgLy8gY2FsbGVkIG9uIGNvbXBvbmVudFdpbGxVbm1vdW50XHJcbiAgICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgLy8gY2FsbGVkIHdoZW4gZG9uZSB0cmFuc2l0aW9uaW5nIGluXHJcbiAgICBvbk9wZW5lZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAvLyBjYWxsZWQgd2hlbiBkb25lIHRyYW5zaXRpb25pbmcgb3V0XHJcbiAgICBvbkNsb3NlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB3cmFwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvLyBib29sZWFuIHRvIGNvbnRyb2wgd2hldGhlciB0aGUgZmFkZSB0cmFuc2l0aW9uIG9jY3VycyAoZGVmYXVsdDogdHJ1ZSlcclxuICAgIGZhZGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY3NzTW9kdWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gekluZGV4IGRlZmF1bHRzIHRvIDEwMDAuXHJcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIF0pLFxyXG4gICAgLy8gYmFja2Ryb3BUcmFuc2l0aW9uIC0gY29udHJvbHMgYmFja2Ryb3AgdHJhbnNpdGlvblxyXG4gICAgLy8gdGltZW91dCBpcyAxNTBtcyBieSBkZWZhdWx0IHRvIG1hdGNoIGJvb3RzdHJhcFxyXG4gICAgLy8gc2VlIEZhZGUgZm9yIG1vcmUgZGV0YWlsc1xyXG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxyXG4gICAgLy8gbW9kYWxUcmFuc2l0aW9uIC0gY29udHJvbHMgbW9kYWwgdHJhbnNpdGlvblxyXG4gICAgLy8gdGltZW91dCBpcyAzMDBtcyBieSBkZWZhdWx0IHRvIG1hdGNoIGJvb3RzdHJhcFxyXG4gICAgLy8gc2VlIEZhZGUgZm9yIG1vcmUgZGV0YWlsc1xyXG4gICAgbW9kYWxUcmFuc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxyXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAvLyBpZiBtb2RhbCBzaG91bGQgYmUgZGVzdHJ1Y3RlZC9yZW1vdmVkIGZyb20gRE9NIGFmdGVyIGNsb3NpbmdcclxuICAgIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgd2hpY2ggdHJpZ2dlcmVkIHRoZSBtb2RhbCB0byBvcGVuIHNob3VsZCBmb2N1c2VkIGFmdGVyIHRoZSBtb2RhbCBjbG9zZXMgKHNlZSBleGFtcGxlIHNvbWV3aGVyZSBiZWxvdylcclxuICAgIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxyXG59XHJcblxyXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGRlZmF1bHQ6ICdib3JkZXInXHJcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjc3NNb2R1bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVmYXVsdDogJ0xvYWRpbmcuLi4nXHJcbn07XHJcblxyXG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBpbmRpY2F0b3JzOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVmYXVsdDogdHJ1ZVxyXG4gICAgY29udHJvbHM6IFByb3BUeXBlcy5ib29sLCAvLyBkZWZhdWx0OiB0cnVlXHJcbiAgICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsIC8vIGRlZmF1bHQ6IHRydWVcclxufTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==