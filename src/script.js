import "./style.css";
import {
  insertTextAtCursor,
  deleteTextBeforeCursor,
  toUpperCase,
} from "./assets/scripts/fuctions.js";
import {
  firstRowKeys,
  secondRowKeys,
  thirdRowKeys,
  fourthRowKeys,
  fifthRowKeys,
} from "./assets/scripts/keys";

let firstRowCurrentLanguage = firstRowKeys();
let secondRowCurrentLanguage = secondRowKeys();
let thirdRowCurrentLanguage = thirdRowKeys();
let fourthRowCurrentLanguage = fourthRowKeys();

const container = document.createElement("div");
container.className = "container";
document.body.append(container);

const input = document.createElement("textarea");
input.className = "text";
container.append(input);

const keyboardWrapp = document.createElement("div");
keyboardWrapp.className = "keyboard_wrapp";
container.append(keyboardWrapp);

const keyboardKeys = document.createElement("div");
keyboardKeys.className = "keyboard_keys";
keyboardWrapp.append(keyboardKeys);

const description = document.createElement("p");
description.className = "description";
container.append(description);
description.innerText = "Клавиатура создана в операционной системе Windows";

const language = document.createElement("p");
language.className = "language";
container.append(language);
language.innerText = "Для переключения языка комбинация: левыe ctrl + alt";

const firstRow = document.createElement("div");
firstRow.className = "row";
keyboardKeys.append(firstRow);

for (let index = 0; index < firstRowCurrentLanguage.length; index++) {
  const key = document.createElement("div");
  firstRowCurrentLanguage[index] == "Backspace"
    ? (key.className = "keys backspace_key")
    : (key.className = "keys");

  key.innerHTML = `${firstRowCurrentLanguage[index]}`;
  firstRow.append(key);
}

const secondRow = document.createElement("div");
secondRow.className = "row";
keyboardKeys.append(secondRow);

for (let index = 0; index < secondRowCurrentLanguage.length; index++) {
  const key = document.createElement("div");
  if (secondRowCurrentLanguage[index] == "Tab") {
    key.className = "keys tab_key";
  } else if (secondRowCurrentLanguage[index] == "\\") {
    key.className = "keys slash_key";
  } else if (secondRowCurrentLanguage[index] == "Del") {
    key.className = "keys del_key";
  } else {
    key.className = "keys";
  }

  key.innerHTML = `${secondRowCurrentLanguage[index]}`;
  secondRow.append(key);
}

const thirdRow = document.createElement("div");
thirdRow.className = "row";
keyboardKeys.append(thirdRow);

for (let index = 0; index < thirdRowCurrentLanguage.length; index++) {
  const key = document.createElement("div");
  if (thirdRowCurrentLanguage[index] == "Caps Lock") {
    key.className = "keys capsLock_key";
  } else if (thirdRowCurrentLanguage[index] == "Enter") {
    key.className = "keys enter_key";
  } else {
    key.className = "keys";
  }

  key.innerHTML = `${thirdRowCurrentLanguage[index]}`;
  thirdRow.append(key);
}

const fourthRow = document.createElement("div");
fourthRow.className = "row";
keyboardKeys.append(fourthRow);

for (let index = 0; index < fourthRowCurrentLanguage.length; index++) {
  const key = document.createElement("div");
  if (fourthRowCurrentLanguage[index] == "Shift" && index === 0) {
    key.className = "keys shift_key left_shift_key";
  } else if (fourthRowCurrentLanguage[index] == "Shift" && index !== 0) {
    key.className = "keys shift_key right_shift_key";
  } else if (fourthRowCurrentLanguage[index] == "▲") {
    key.className = "keys up_arrow_key";
  } else {
    key.className = "keys";
  }

  key.innerHTML = `${fourthRowCurrentLanguage[index]}`;
  fourthRow.append(key);
}

const fifthRow = document.createElement("div");
fifthRow.className = "row";
keyboardKeys.append(fifthRow);

for (let index = 0; index < fifthRowKeys.length; index++) {
  const key = document.createElement("div");
  if (fifthRowKeys[index] == "Ctrl" && index === 0) {
    key.className = "keys сtrl_key left_ctrl_key";
  } else if (fifthRowKeys[index] == "Ctrl" && index !== 0) {
    key.className = "keys сtrl_key right_ctrl_key";
  } else if (fifthRowKeys[index] == "Win") {
    key.className = "keys win_key";
  } else if (fifthRowKeys[index] == " ") {
    key.className = "keys spacebar_key";
  } else if (fifthRowKeys[index] == "Alt" && index === 2) {
    key.className = "keys alt_key left_alt_key";
  } else if (fifthRowKeys[index] == "Alt" && index !== 2) {
    key.className = "keys alt_key right_alt_key";
  } else if (fifthRowKeys[index] == "◄") {
    key.className = "keys left_arrow_key";
  } else if (fifthRowKeys[index] == "▼") {
    key.className = "keys down_arrow_key";
  } else if (fifthRowKeys[index] == "►") {
    key.className = "keys right_arrow_key";
  } else {
    key.className = "keys";
  }

  key.innerHTML = `${fifthRowKeys[index]}`;
  fifthRow.append(key);
}

let keys = document.querySelectorAll(".keys");
let spaceKey = document.querySelector(".spacebar_key");
let leftShiftKey = document.querySelector(".left_shift_key");
let rightShiftKey = document.querySelector(".right_shift_key");
let capsLockKey = document.querySelector(".capsLock_key");
let tabKey = document.querySelector(".tab_key");
let leftCtrlKey = document.querySelector(".left_ctrl_key");
let rightCtrlKey = document.querySelector(".right_ctrl_key");
let leftAltKey = document.querySelector(".left_alt_key");
let rightAltKey = document.querySelector(".right_alt_key");
let winKey = document.querySelector(".win_key");
let delKey = document.querySelector(".del_key");
let leftArrowKey = document.querySelector(".left_arrow_key");
let rightArrowKey = document.querySelector(".right_arrow_key");
let upArrowKey = document.querySelector(".up_arrow_key");
let downArrowKey = document.querySelector(".down_arrow_key");

toUpperCase(keys);

window.addEventListener("keydown", (e) => {
  for (let index = 0; index < keys.length; index++) {
    input.focus();
    if (
      e.key == keys[index].getAttribute("keyname") ||
      e.key == keys[index].getAttribute("upperCaseName")
    ) {
      keys[index].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (e.code == "ShiftLeft") {
      rightShiftKey.classList.remove("active");
    }
    if (e.code == "ShiftRight") {
      leftShiftKey.classList.remove("active");
    }
    if (
      e.code === "CapsLock" &&
      keys[index].getAttribute("keyname") == "Caps Lock"
    ) {
      capsLockKey.classList.toggle("active");
    }
    if (e.code == "Tab") {
      tabKey.classList.add("active");
      tabKey.classList.remove("active");
      tabKey.classList.add("remove");
      setTimeout(() => tabKey.classList.remove("remove"), 200);
    }
    if (
      e.code == "ControlLeft" &&
      keys[index].getAttribute("keyname") == "Ctrl"
    ) {
      keys[index].classList.add("active");
      rightCtrlKey.classList.remove("active");
    }
    if (
      e.code == "ControlRight" &&
      keys[index].getAttribute("keyname") == "Ctrl"
    ) {
      keys[index].classList.add("active");
      leftCtrlKey.classList.remove("active");
    }
    if (e.code == "AltLeft" && keys[index].getAttribute("keyname") == "Alt") {
      keys[index].classList.add("active");
      rightAltKey.classList.remove("active");
    }
    if (e.code == "AltRight" && keys[index].getAttribute("keyname") == "Alt") {
      keys[index].classList.add("active");
      leftAltKey.classList.remove("active");
    }
    if (e.code == "MetaLeft" && keys[index].getAttribute("keyname") == "Win") {
      winKey.classList.add("active");
      winKey.classList.remove("active");
      winKey.classList.add("remove");
      setTimeout(() => winKey.classList.remove("remove"), 200);
    }
    if (e.code == "Delete") {
      delKey.classList.add("active");
    }
    if (e.code == "ArrowDown") {
      downArrowKey.classList.add("active");
    }
    if (e.code == "ArrowUp") {
      upArrowKey.classList.add("active");
    }
    if (e.code == "ArrowRight") {
      rightArrowKey.classList.add("active");
    }
    if (e.code == "ArrowLeft") {
      leftArrowKey.classList.add("active");
    }
  }

  if (
    (e.shiftKey && leftShiftKey.classList.contains("active")) ||
    (e.shiftKey && rightShiftKey.classList.contains("active")) ||
    capsLockKey.classList.contains("active")
  ) {
    keys.forEach(
      (el) =>
        (el.innerText = el.getAttribute("uppercasename")
          ? el.getAttribute("uppercasename")
          : el.getAttribute("keyname"))
    );
  }
  if (e.ctrlKey && e.altKey) {
    if (localStorage.getItem("language") != "ru") {
      localStorage.setItem("language", "ru");
    } else {
      localStorage.setItem("language", "en");
    }
    firstRowCurrentLanguage = firstRowKeys();
    const firstRow = document.querySelectorAll(".row:nth-child(1) > div");
    firstRow.forEach(
      (el) =>
        (el.innerText =
          firstRowCurrentLanguage[Array.from(firstRow).indexOf(el)])
    );
    secondRowCurrentLanguage = secondRowKeys();
    const secondRow = document.querySelectorAll(".row:nth-child(2) > div");
    secondRow.forEach(
      (el) =>
        (el.innerText =
          secondRowCurrentLanguage[Array.from(secondRow).indexOf(el)])
    );
    thirdRowCurrentLanguage = thirdRowKeys();
    const thirdRow = document.querySelectorAll(".row:nth-child(3) > div");
    thirdRow.forEach(
      (el) =>
        (el.innerText =
          thirdRowCurrentLanguage[Array.from(thirdRow).indexOf(el)])
    );
    fourthRowCurrentLanguage = fourthRowKeys();
    const fourthRow = document.querySelectorAll(".row:nth-child(4) > div");
    fourthRow.forEach(
      (el) =>
        (el.innerText =
          fourthRowCurrentLanguage[Array.from(fourthRow).indexOf(el)])
    );
    toUpperCase(keys);
  }
});

window.addEventListener("keyup", (e) => {
  for (let index = 0; index < keys.length; index++) {
    if (
      e.key == keys[index].getAttribute("keyname") ||
      e.key == keys[index].getAttribute("upperCaseName")
    ) {
      keys[index].classList.remove("active");
      keys[index].classList.add("remove");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
      spaceKey.classList.add("remove");
    }
    if (e.code == "ShiftLeft") {
      rightShiftKey.classList.remove("active");
      rightShiftKey.classList.remove("remove");
    }
    if (e.code == "ShiftRight") {
      leftShiftKey.classList.remove("active");
      leftShiftKey.classList.remove("remove");
    }
    if (e.code == "Tab") {
      tabKey.classList.remove("active");
      tabKey.classList.add("remove");
    }
    if (e.code == "ControlLeft") {
      leftCtrlKey.classList.remove("active");
      rightCtrlKey.classList.remove("remove");
    }
    if (e.code == "ControlRight") {
      rightCtrlKey.classList.remove("active");
      leftCtrlKey.classList.remove("remove");
    }
    if (e.code == "AltLeft") {
      leftAltKey.classList.remove("active");
      rightAltKey.classList.remove("remove");
    }
    if (e.code == "AltRight") {
      rightAltKey.classList.remove("active");
      leftAltKey.classList.remove("remove");
    }
    if (e.code == "Delete") {
      delKey.classList.remove("active");
      delKey.classList.add("remove");
    }
    if (e.code == "ArrowDown") {
      downArrowKey.classList.remove("active");
      downArrowKey.classList.add("remove");
    }
    if (e.code == "ArrowUp") {
      upArrowKey.classList.remove("active");
      upArrowKey.classList.add("remove");
    }
    if (e.code == "ArrowRight") {
      rightArrowKey.classList.remove("active");
      rightArrowKey.classList.add("remove");
    }
    if (e.code == "ArrowLeft") {
      leftArrowKey.classList.remove("active");
      leftArrowKey.classList.add("remove");
    }

    if (
      leftShiftKey.classList.contains("remove") ||
      rightShiftKey.classList.contains("remove") ||
      !capsLockKey.classList.contains("active")
    ) {
      const keys = document.querySelectorAll(".keys");
      keys.forEach((el) => (el.innerText = el.getAttribute("keyname")));
    }

    setTimeout(() => keys[index].classList.remove("remove"), 200);
  }
});

for (let index = 0; index < keys.length; index++) {
  const keyname = keys[index].getAttribute("keyname");
  keys[index].addEventListener("mousedown", (e) => {
    if (keyname == "") {
      insertTextAtCursor(input, " ");
    } else if (
      keyname == "Tab" ||
      keyname == "Caps Lock" ||
      keyname == "Shift" ||
      keyname == "Ctrl" ||
      keyname == "Win" ||
      keyname == "Alt" ||
      keyname == "▲" ||
      keyname == "▼"
    ) {
      insertTextAtCursor(input, "");
    } else if (keyname == "Backspace") {
      deleteTextBeforeCursor(input);
    } else if (keyname == "Enter") {
      input.value += "\n";
    } else if (keyname == "◄") {
      input.selectionStart = input.selectionStart - 1;
      input.selectionEnd = input.selectionEnd - 1;
    } else if (keyname == "►") {
      input.selectionStart = input.selectionStart + 1;
      input.selectionEnd = input.selectionEnd + 1;
    } else if (keyname == "Del") {
      if (input.selectionStart !== input.value.length) {
        input.selectionStart += 1;
        deleteTextBeforeCursor(input);
      } else {
        insertTextAtCursor(input, "");
      }
    } else {
      insertTextAtCursor(input, e.target.innerText);
    }
    if (keyname == "Caps Lock") {
      keys[index].classList.toggle("active");
    } else {
      keys[index].classList.add("active");
    }

    if (
      leftShiftKey.classList.contains("active") ||
      rightShiftKey.classList.contains("active") ||
      capsLockKey.classList.contains("active")
    ) {
      keys.forEach(
        (el) =>
          (el.innerText = el.getAttribute("uppercasename")
            ? el.getAttribute("uppercasename")
            : el.getAttribute("keyname"))
      );
    }
  });

  keys[index].addEventListener("mouseup", (e) => {
    if (keyname != "Caps Lock") {
      keys[index].classList.remove("active");
      keys[index].classList.add("remove");
    }
    if (
      leftShiftKey.classList.contains("remove") ||
      rightShiftKey.classList.contains("remove") ||
      !capsLockKey.classList.contains("active")
    ) {
      const keys = document.querySelectorAll(".keys");
      keys.forEach((el) => (el.innerText = el.getAttribute("keyname")));
    }
    setTimeout(() => keys[index].classList.remove("remove"), 200);
  });
}
