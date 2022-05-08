export const firstRowKeys = () => {
  return localStorage.getItem("language") === "ru"
    ? [
        "ё",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
      ]
    : [
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
      ];
};
export const secondRowKeys = () => {
  return localStorage.getItem("language") === "ru"
    ? [
        "Tab",
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ",
        "\\",
        "Del",
      ]
    : [
        "Tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "\\",
        "Del",
      ];
};
export const thirdRowKeys = () => {
  return localStorage.getItem("language") === "ru"
    ? [
        "Caps Lock",
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э",
        "Enter",
      ]
    : [
        "Caps Lock",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "Enter",
      ];
};
export const fourthRowKeys = () => {
  return localStorage.getItem("language") === "ru"
    ? ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"]
    : ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"];
};
export const fifthRowKeys = [
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "◄",
  "▼",
  "►",
  "Ctrl",
];
