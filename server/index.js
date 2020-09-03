const express = require('express');
const gatsby = require('gatsby-plugin-nodejs');
const cors = require('cors');

const app = express();

app.use(cors());

gatsby.prepare({ app }, () => {
  app.get('/api/health', (req, res) => {
    res.send('ok');
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
