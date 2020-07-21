import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";
import UserSession from "../../database/models/UserSession";
import GraphQLDateTime from "./DateTime";
import User from "../../database/models/User";

const GraphQLUserSession = new GraphQLObjectType({
  name: "UserSession",
  fields: {
    id: { type: GraphQLID },
    ip: { type: GraphQLString },
    token: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  },
});

const GraphQLUserSessionInput = new GraphQLInputObjectType({
  name: "UserSessionInput",
  fields: {
    id: { type: GraphQLID },
    ip: { type: GraphQLString },
    token: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
    userId: { type: GraphQLID },
  },
});

const setUserSession = {
  type: GraphQLUserSession,
  args: { input: { type: GraphQLUserSessionInput } },
  async resolve(parent: any, { input }: any, context: any) {
    if (input.id) {
      return UserSession.update(input, { where: { id: input.id } }).then(
        async () => {
          const user = await User.findByPk(input.userId);
          return UserSession.findByPk(input.id);
        }
      );
    }

    return UserSession.create(input);
  },
};

export { GraphQLUserSession, setUserSession };
