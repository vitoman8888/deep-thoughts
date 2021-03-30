// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
}

type Reaction {
    _id: ID
    username: String
    reactionBody: String
    createdAt: String
}

type Thought {
    _id: ID
    username: String
    thoughtText: String
    createdAt: String
    reactions: [Reaction]
}

type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
}
`;



// export the typeDefs
module.exports = typeDefs;