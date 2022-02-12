const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean } = require("graphql");
const UserStatsType = require("./UserStats");

const UserType = new GraphQLObjectType({
    name: "User",
    description: "Telegram User",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        verified: { type: GraphQLBoolean },
        stats: {
            type: UserStatsType,
            resolve: (user) => {
                return [].find(stats => stats.userId === user.id)
            }
        }
    })
})

module.exports = UserType;
