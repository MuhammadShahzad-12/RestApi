const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.json({ message: "Hello, Backend!" });
});
app.post('/', (req, res) => {
res.send('POST request to the homepage')
})

app.listen(3000, () => {
console.log(`Server is running on http://localhost:3000`);
});
