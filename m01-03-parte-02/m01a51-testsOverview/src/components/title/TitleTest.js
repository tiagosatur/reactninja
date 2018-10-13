const React = require('react');
const ReactDOMServer = require('react-dom/server')
const $ = require('whacko'); //É como um jquery do lado do servidor (ver tb cheerio)
const Title = require('./Title');

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
)

console.log($(TitleComponent).get(0).tagName); //Retorna qual tag está sendo usada


console.assert($(TitleComponent).get(0).tagName === 'h1', 'Should be an h1 tag')

console.log('All tests passed successfully!')
