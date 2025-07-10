const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('Hello from Docker on Render!'));
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
