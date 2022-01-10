'use strict'
/* # Exercice: Camel To Kebab
 *
 * ## Explanation:
 * You must code a function that transforms a string from camelCase (see Further Notice) to
 * kebab-case (see Further Notice). This function must not break abreviations.
 *
 * ## Example:
 *```
 *camelToKebab('CamelCaseString') === 'camel-case-string'
 *camelToKebab('CamelCaseStringWithABREV') === 'camel-case-string-with-abrev'
 *camelToKebab('CamelCaseStringWithABREVInCenter') === 'camel-case-string-with-abrev-in-center'
 *```
 *
 * ## Expected Time
 * You should spend around 15 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/3-camelToKebab.validation.js
 * - See [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 * - See [kebabCase](http://wiki.c2.com/?KebabCase)
 */

function camelToKebab(str) {
  // Do your code here
  const splitted = str.split(/(?=[A-Z])|(?=[0-9])/).reverse();
  const res = [];

  /*
  splitted.forEach((l, i) => {
    if ((l.length === 1 && splitted[i + 1].length > 1)) res.push(`-${l.toLowerCase()}`);
    else if ((l.length === 1 || i === splitted.length - 1)) res.push(`${l.toLowerCase()}`);
    else res.push(`-${l.toLowerCase()}`);
  }); 
  */

  splitted.map((l, i) => {
    console.log(l); 
  }).join('');

  
  //return res.reverse().join('');
}

module.exports = camelToKebab
