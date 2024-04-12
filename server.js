const express = require("express")
const { createHandler } = require("graphql-http/lib/use/express")
const { ruruHTML } = require("ruru/server")
const { connectDb } = require('./db/dbConnect')
const schemaPost = require('./graphql/PostSchema')
const rootPost = require('./graphql/PostRoot')

const app = express()
const PORT = 3000
 
// Construct a schema, using GraphQL schema language


 
// Create and use the GraphQL handler.
app.all(
  "/posts/graphql",
  createHandler({
    schema: schemaPost,
    rootValue: rootPost,
  })
)
 
// Serve the GraphiQL IDE.
app.get("/posts", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/posts/graphql" }))
})
 
// Start the server at port
app.listen(PORT, () => {
  connectDb()
  console.log(`Running a GraphQL API server at http://localhost:${PORT}`)
})
