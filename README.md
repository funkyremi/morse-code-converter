# Morse code converter

[![npm version](https://img.shields.io/npm/v/morse-code-converter.svg)](https://www.npmjs.com/package/morse-code-converter)
[![Dependency Status](https://david-dm.org/funkyremi/morse-code-converter.svg)](https://david-dm.org/funkyremi/morse-code-converter)

Convert text to morse and morse to text

## Installation
```
npm install morse-code-converter --save
```

## Usage

``` js
const morse = require("morse-code-converter");

const code = morse.textToMorse('Hey how are you?'); // .... . -.--   .... --- .--   .- .-. .   -.-- --- ..- ..-..
const text = morse.morseToText(code); // HEY HOW ARE YOU?
```

## License

MIT
