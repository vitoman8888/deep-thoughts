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

type Auth {
    token: ID!
    user: User
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
    reactionCount: Int
    reactions: [Reaction]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
}


`;



// export the typeDefs
module.exports = typeDefs;