const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const notion = require('./notion.js');

const app = express();

const corsOption = {
  origin: 'https://www.notion.so',
  optionsSuccessStatus: 200
}
app.use(cors(corsOption));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

app.post('/notion', async (req, res) => {

  try {

    const url = req.body.url;
    const data = req.body.data.split('#');
    const toDoItem = data[0].trim();

    var category = '';
    if (data.length > 1) {
      category = data[1];
    }

    const notionRes = await notion.addToDo(toDoItem, category, url);
    res.send(JSON.stringify({
      url: notionRes.url,
      message: '🙌🏻 To-do item added successfully!'
    }))

  } catch (err) {
    console.log(err.message)
    res.send(err.message)
  }

});



