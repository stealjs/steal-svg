[![Build Status](https://travis-ci.org/icanjs/steal-svg.svg?branch=master)](https://travis-ci.org/icanjs/steal-svg)
[![npm version](https://badge.fury.io/js/steal-svg.svg)](https://badge.fury.io/js/steal-coffee)

# StealJS plugin for SVG.

Steal ([StealJS](http://stealjs.com/)) is a module loader with sane defaults. Say goodbye to debugging complicated configuration steps. It supports various module formats out of the box (ES6, CommonJS, AMD), and you can even use **a combination of multiple formats!** Steal will figure it out for you.

With the _steal-svg_ plugin Steal can load SVG files into your application.

## Install

```cmd
npm install steal-svg --save
```

## Use

After you've installed the plugin you can just start using it directly.

### Stache Inline SVG example:

Coming soon.

### React Inline SVG example:
In your HTML page, create a `root` element and use a script tag to bring in StealJS:

```html
<!--index.html-->
<section root="true"></section>
<script src="/node_modules/steal/steal.js" data-main="app.js"></script>
```

And here's an example app.js file that creates a button with an inline SVG file:

```js
// app.js:
import React from 'react';
import ReactDOM from 'react-dom';
import SVGInline from 'react-svg-inline';
import logo from './logo.svg';

// Render the DOM
ReactDOM.render(
  <button>
    <SVGInline svg={logo} />
  </button>
  document.querySelector('[root=true]')
);
```

## License

MIT