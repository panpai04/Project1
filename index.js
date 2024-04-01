const express = require('express');
const app = express();
const PORT = 1234;
app.use(express.urlencoded());

//TO DO ROUTING

app.listen(PORT, ()=>{
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
