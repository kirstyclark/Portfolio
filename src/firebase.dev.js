"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.firestore = exports.firebaseConfig = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyC0EDR4WWQw1_5uTsTYk6Ylwk4P4CNwo8E",
  authDomain: "portfolio-bb003.firebaseapp.com",
  projectId: "portfolio-bb003",
  storageBucket: "portfolio-bb003.appspot.com",
  messagingSenderId: "395191235908",
  appId: "1:395191235908:web:b52db3c41aecd2719ed311",
  measurementId: "G-5CW7ZPXY65"
};
exports.firebaseConfig = firebaseConfig;

_app.default.initializeApp(firebaseConfig);

var firestore = _app.default.firestore();

exports.firestore = firestore;
var _default = _app.default;
exports.default = _default;