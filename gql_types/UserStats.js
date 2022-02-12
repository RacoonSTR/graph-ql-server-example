const { GraphQLObjectType } = require("graphql");

const UserStatsType = new GraphQLObjectType({
    name: "UserStats",
    description: "User stats",
    fields: () => ({
        userId: { type: new GraphQLNonNull(GraphQLString) },
    })
})

module.exports = UserStatsType;
