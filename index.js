
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false





function shout(string) {
  return string.toUpperCase()
}

function logShout(string) {
  console.log(`${string.toUpperCase()}`)
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(`${string.toLowerCase()}`)
}





if function (sayHiToGrandma(string)) === lowercase {
  return (`I can't hear you!`);
}
  else if function (sayHiToGrandma(string)) === uppercase {
  return (`YES INDEED!`);
}
  else function (sayHiToGrandma(string)) === mixedCase {
  return (`I love you, too.`);
}
