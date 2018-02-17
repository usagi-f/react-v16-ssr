import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Html from './html';
import App from './app';

const app = express();

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToStaticMarkup(
      <Html
        markup={ReactDOMServer.renderToString(<App/>)}
      />
    )
  );
});

app.listen(3000, () => {
  console.log('listening on port 3000...');
});