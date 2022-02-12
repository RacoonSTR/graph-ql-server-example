const { GraphQLObjectType, GraphQLList, GraphQLSchema } = require("graphql");

const UserType = require("./User");
const UserStatsType = require("./UserStats");

const AppRootType = new GraphQLObjectType({
    name: "AppRoot",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return [];
            }
        },
        userStats: () => ({
            type: new GraphQLList(UserStatsType),
            resolve: () => {
                return [];
            }
        })
    })
})

const AppRootSchema = new GraphQLSchema({
    query: AppRootType
})

module.exports = AppRootSchema;