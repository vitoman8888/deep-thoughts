const resolvers = {
    Query: {
        // get all users
        users: async () => {
        return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },
        // get a user by username
        user: async (parent, { username }) => {
        return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        },
        thoughts: async (parent, { username }) => {
            return Thoughts.find({ username })
                .select('*')
                .populate('reactions')
        },
    }
  };
  
  module.exports = resolvers;