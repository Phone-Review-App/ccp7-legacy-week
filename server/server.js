const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 4000;

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../ken-ken-pa/build')));
  app.use(express.json());

  app.get('/hello', (req, res) => {
    res.send('world');
  })

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  return app;
};


module.exports = setupServer;