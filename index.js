let transform = require('sucrase').transform
let type = 'application/javascript;charset=utf8'

function preact(Key, {headers, body}) {
  let options = {
    transforms: ['jsx', 'typescript'],
    jsxPragma: 'h',
    production: true
  }
  return {
    headers: {...headers, 'content-type':type},
    body: transform(body, options).code
  }
}

function react(Key, {headers, body}) {
  let options = {
    transforms: ['jsx', 'typescript'],
    production: true
  }
  return {
    headers: {...headers, 'content-type':type},
    body: transform(body, options).code
  }
}

preact.react = react
module.exports = preact
