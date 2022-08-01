const mongoose = require("mongoose");
const app = require("./app");


mongoose
  .connect("mongodb+srv://HenrikasKr:BUvTTLLhPPk9Fw4h@cluster0.yebeo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to a DB");
  });

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
