export let insertTextAtCursor = (el, text, offset) => {
  var val = el.value,
    endIndex,
    range,
    doc = el.ownerDocument;
  if (
    typeof el.selectionStart == "number" &&
    typeof el.selectionEnd == "number"
  ) {
    endIndex = el.selectionEnd;
    el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
    el.selectionStart = el.selectionEnd =
      endIndex + text.length + (offset ? offset : 0);
  } else if (doc.selection != "undefined" && doc.selection.createRange) {
    el.focus();
    range = doc.selection.createRange();
    range.collapse(false);
    range.text = text;
    range.select();
  }
};

export let deleteTextBeforeCursor = (el, offset) => {
  var val = el.value,
    endIndex,
    range,
    doc = el.ownerDocument;
  if (
    typeof el.selectionStart == "number" &&
    typeof el.selectionEnd == "number"
  ) {
    endIndex = el.selectionEnd;
    el.value = val.slice(0, endIndex - 1) + val.slice(endIndex);
    el.selectionStart = el.selectionEnd = endIndex - 1 + (offset ? offset : 0);
  } else if (doc.selection != "undefined" && doc.selection.createRange) {
    el.focus();
    range = doc.selection.createRange();
    range.collapse(false);
    range.select();
  }
};

export let toUpperCase = (keys) => {
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index].innerText;
    if (
      key == "Tab" ||
      key == "Caps Lock" ||
      key == "Shift" ||
      key == "Ctrl" ||
      key == "Alt" ||
      key == "Win" ||
      key == " " ||
      key == "Backspace" ||
      key == "Enter" ||
      key == "Del"
    ) {
      keys[index].setAttribute("upperCaseName", keys[index].innerText);
    } else if (key == "`") {
      keys[index].setAttribute("upperCaseName", "~");
    } else if (key == "1") {
      keys[index].setAttribute("upperCaseName", "!");
    } else if (key == "2") {
      keys[index].setAttribute("upperCaseName", "@");
    } else if (key == "3") {
      keys[index].setAttribute("upperCaseName", "#");
    } else if (key == "4") {
      keys[index].setAttribute("upperCaseName", "$");
    } else if (key == "5") {
      keys[index].setAttribute("upperCaseName", "%");
    } else if (key == "6") {
      keys[index].setAttribute("upperCaseName", "^");
    } else if (key == "7") {
      keys[index].setAttribute("upperCaseName", "&");
    } else if (key == "8") {
      keys[index].setAttribute("upperCaseName", "*");
    } else if (key == "9") {
      keys[index].setAttribute("upperCaseName", "(");
    } else if (key == "0") {
      keys[index].setAttribute("upperCaseName", ")");
    } else if (key == "-") {
      keys[index].setAttribute("upperCaseName", "_");
    } else if (key == "=") {
      keys[index].setAttribute("upperCaseName", "+");
    } else if (key == "[") {
      keys[index].setAttribute("upperCaseName", "{");
    } else if (key == "]") {
      keys[index].setAttribute("upperCaseName", "}");
    } else if (key == ";") {
      keys[index].setAttribute("upperCaseName", ":");
    } else if (key == "'") {
      keys[index].setAttribute("upperCaseName", '"');
    } else if (key == "\\") {
      keys[index].setAttribute("upperCaseName", "|");
    } else if (key == ",") {
      keys[index].setAttribute("upperCaseName", "<");
    } else if (key == ".") {
      keys[index].setAttribute("upperCaseName", ">");
    } else if (key == "/") {
      keys[index].setAttribute("upperCaseName", "?");
    } else {
      keys[index].setAttribute(
        "upperCaseName",
        keys[index].innerText.toUpperCase()
      );
    }
    keys[index].setAttribute("keyname", keys[index].innerText);
  }
};
