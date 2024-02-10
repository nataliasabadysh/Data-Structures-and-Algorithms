// function that removes the first and last characters of a string.

function removeChar(str) {
  // return str.substring(1, str.length - 1);
  // return str.substr(1, str.length - 2);

  return str.slice(1, str.length - 1);
  // str.slice(1,-1)  // argument -1 is the same as 'str.length -1'
}

function removeChar(str) {
  const [, ...rest] = str.split("");
  rest.pop();
  return rest.join("");
}

function removeChar(str) {
  const match = str.match(/^.(.*).$/);
  return match ? match[1] : "";
}

function removeChar(str) {
  return [...str].slice(1, -1).join("");
}
