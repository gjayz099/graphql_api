const { buildSchema } = require("graphql")

const schemaPost = buildSchema(`
    type Post {
        title: String
        decription: String
        author: String
    }
    input PostInput {
        title: String
        decription: String
        author: String
    }

    type Query {
        getIdPost(id: ID!): Post
        getAllPost: [Post]
    }
    type Mutation {
        postPost(input: PostInput): Post
        putPost(id: ID!, input: PostInput): Post
        deletePost(id: ID!): String
      }
`)


module.exports = schemaPost