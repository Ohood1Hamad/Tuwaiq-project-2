const express = require('express');
const {logRouters} = require("./routers/routes/logRouters")
const app = express();
app.use(express.json());


//routers

//built-in middlewares
app.use(("/user",logRouters));

//third-party middleware
// app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
