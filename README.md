# Morse code converter

[![npm version](https://img.shields.io/npm/v/deepl.svg)](https://www.npmjs.com/package/deepl)
[![Dependency Status](https://david-dm.org/funkyremi/deepl.svg)](https://david-dm.org/funkyremi/deepl)

Convert text to morse and morse to text

## Installation
```
npm install morse-code-converter --save
```

## Usage

``` js
const morse = require("morse-code-converter");

const code = morse.textToMorse("Hey. How are you?");
console.log(code); // .... . _.__ ._._._   .... ___ .__   ._ ._. .   _.__ ___ .._ .._..
const text = morse.morseToText(code);
console.log(text); // HEY.HOWAREYOU?
```

## License

MIT
