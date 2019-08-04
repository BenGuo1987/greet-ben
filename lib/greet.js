const _ = require('lodash');

const GREETING = {
  en: "Good Morning",
  de: "Guten Morgen",
  fr: "Bonjour",
  ru: "Dobre Utra",
  kr: "Annyeonghaseyo",
  zh: "早上好"
};

exports.greet = function(code) {
  if (code) {
    if (!GREETING[code]) {
      return "Error! we don't support this language."
    } else {
      return GREETING[code];
    }
  } else {
    return GREETING['zh'];
  }
}

exports.randomGreet = function() {
  return _.sample(_.values(GREETING));
}