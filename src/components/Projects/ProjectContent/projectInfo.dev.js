"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _morse = _interopRequireDefault(require("../../../assets/videos/morse.mov"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import brewdog from '../../../assets/videos/brewdog.mov';
// import calc from '../../../assets/videos/calc.mov';
var projectInfo = [{
  name: 'IPA API',
  tools: ['React', 'SCSS'],
  description: 'A frontend site for the Punk API, fetching the beers and then offering a range of filtering and sorting methods.',
  // img: brewdog,
  githubPage: 'https://kirstyclark.github.io/brewdog/',
  code: 'https://github.com/kirstyclark/brewdog'
}, {
  name: "Kiki's Sounds",
  tools: ['Firebase', 'React', 'SCSS'],
  description: 'Interactive site showing my radio content and top twenty lists',
  // img: brewdog,
  githubPage: 'https://github.com/kirstyclark/kikis-site',
  code: 'https://github.com/kirstyclark/kikis-site'
}, {
  name: 'KnoWaste',
  tools: ['Agile', 'Firebase', 'React', 'Prototyping & Design'],
  description: "4 week client project for KnoWaste sustainable startup, during which I PM'd the 2nd week sprint.",
  img: '',
  githubPage: '',
  code: ''
}, {
  name: 'Calculator',
  tools: ['JavaScript', 'Testing', 'SCSS'],
  description: "A simple calculator with 'ans' and 'ac' functionality and a dynamic background.",
  // img: calc,
  githubPage: 'https://github.com/kirstyclark/calculator',
  code: 'https://github.com/kirstyclark/calculator'
}, {
  name: 'Noughts & Crosses',
  tools: ['JavaScript', 'SCSS'],
  description: '',
  img: '',
  githubPage: '',
  code: ''
}, {
  name: 'Morse Code Translator',
  tools: ['Test Driven', 'JavaScript'],
  description: 'Created using test-driven development, this translator translates english text to morse or vice versa with an audio output.',
  img: _morse.default,
  githubPage: 'https://github.com/kirstyclark/morseTranslator',
  code: 'https://kirstyclark.github.io/morseTranslator/'
}];
var _default = projectInfo;
exports.default = _default;