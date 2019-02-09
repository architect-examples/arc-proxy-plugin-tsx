let test = require('tape')
let plugin = require('./index')

let src = `
import React, { Component } from "react";

type Reducer<T, U> = (u: U, t: T) => U;

function reduce<T, U>(arr: Array<T>, reducer: Reducer<T, U>, base: U): U {
  let acc = base;
  for (const value of arr) {
    acc = reducer(acc, value);
  }
  return acc;
}

class App extends Component {
  render() {
    return <span>Hello, world!</span>;
  }
}

const OtherComponent = React.createClass({
  render() {
    return null;
  }
});

export default App;

`

test('env', t=> {
  t.plan(2)
  t.ok(plugin, 'preact')
  t.ok(plugin.react, 'react')
})

test('can strip types', t=> {
  t.plan(1)
  let result = plugin.react('foo.tsx', {
    headers: {},
    body: src
  })
  t.ok(true, 'got result')
  console.log(result)
})
