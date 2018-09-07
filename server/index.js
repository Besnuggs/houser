const bodyParser = require('body-parser'),
    express = require('express');



const app = express();
app.use(bodyParser.json())

    

const PORT = 4000
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))