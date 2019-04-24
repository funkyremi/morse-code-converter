const morseTable = [
  { char: "A", code: "._" },
  { char: "B", code: "_..." },
  { char: "C", code: "_._." },
  { char: "D", code: "_.." },
  { char: "E", code: "." },
  { char: "F", code: ".._." },
  { char: "G", code: "__." },
  { char: "H", code: "...." },
  { char: "I", code: ".." },
  { char: "J", code: ".___" },
  { char: "K", code: "_._" },
  { char: "L", code: "._.." },
  { char: "M", code: "__" },
  { char: "N", code: "_." },
  { char: "O", code: "___" },
  { char: "P", code: ".__." },
  { char: "Q", code: "__._" },
  { char: "R", code: "._." },
  { char: "S", code: "..." },
  { char: "T", code: "_" },
  { char: "U", code: ".._" },
  { char: "V", code: "..._" },
  { char: "W", code: ".__" },
  { char: "X", code: "_.._" },
  { char: "Y", code: "_.__" },
  { char: "Z", code: "__.." },
  { char: "0", code: "_" },
  { char: "1", code: "._" },
  { char: "2", code: ".._" },
  { char: "3", code: "..._" },
  { char: "4", code: "...._" },
  { char: "5", code: "....." },
  { char: "6", code: "_...." },
  { char: "7", code: "_..." },
  { char: "8", code: "_.." },
  { char: "9", code: "_." },
  { char: ".", code: "._._._" },
  { char: ",", code: "_.._" },
  { char: "?", code: ".._.." },
  { char: "=", code: "_..._" },
  { char: " ", code: " " }
];

const textToMorse = text =>
  text
    .split("")
    .map(char => {
      const entry = morseTable.find(
        morse => morse.char.toLowerCase() === char.toLowerCase()
      );
      return entry ? entry.code : "";
    })
    .join(" ");

const morseToText = morse =>
  morse
    .split(" ")
    .map(code => {
      const entry = morseTable.find(morse => morse.code === code);
      return entry ? entry.char : "";
    })
    .join("");

module.exports = {
  textToMorse,
  morseToText
};
