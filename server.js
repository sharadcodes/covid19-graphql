const express = require("express");
const cors = require('cors')
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const app = express();

app.use(cors())

app.get("/", (req,res) => {
  res.send(
    "<h2>COVID19-Graphql</h2><p>By <a href='https://github.com/sharadcodes'>sharadcodes</a></p><p>GOTO: <a href='https://sharad-gql-covid19.herokuapp.com/graphql'>https://sharad-gql-covid19.herokuapp.com/graphql</a></p>")
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
