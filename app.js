const express = require('express');
const hltb = require('howlongtobeat');

const app = express();
const port = 3000;

const hltbService = new hltb.HowLongToBeatService();

app.get('/main/:id', (req, res) => {
    hltbService.detail(req.params.id).then((result) => res.send(result.gameplayMain));
})

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}/`);
})