const express = require('express');
const {logRouters} = require("./routers/routes/logRouters")
const app = express(logRouters);
app.use(express.json());


//routers

//built-in middlewares
app.use(express.json("/user",logRouters));

//third-party middleware
// app.use(cors());

//app routers

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
