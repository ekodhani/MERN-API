const express = require('express');

const app = express();

app.use(() => {
    console.log('hello dhan!')
})

app.listen(4000);