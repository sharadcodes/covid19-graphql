const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const app = express();

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
