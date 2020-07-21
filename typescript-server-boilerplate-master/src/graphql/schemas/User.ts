import {
  graphql,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLObjectType,
} from "graphql";
import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql/type/scalars";
import { resolve } from "path";
import User from "../../database/models/User";
import UserSession from "../../database/models/UserSession";
import GraphQLDateTime from "./DateTime";
import { GraphQLUserSession } from "./UserSession";

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    sessions: { type: GraphQLList(GraphQLUserSession) },
  },
});

const GraphQLUserInput = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
  },
});

const getUserList = {
  type: GraphQLList(GraphQLUser),
  args: {},
  async resolve(parent: any, args: any, context: any): Promise<any> {
    return User.findAll();
  },
};
const getUser = {
  type: GraphQLUser,
  args: { input: { type: GraphQLUserInput } },
  async resolve(parent: any, { input }: any, context: any): Promise<any> {
    return User.findOne({ where: input });
  },
};

const setUser = {
  type: GraphQLUser,
  args: { input: { type: GraphQLUserInput } },
  async resolve(parent: any, { input }: any, context: any): Promise<any> {
    if (input.id)
      return User.update(input, { where: { id: input.id } }).then(() => {
        return User.findByPk(input.id);
      });

    return User.create(input);
  },
};

const signIn = {
  type: GraphQLUser,
  args: { input: { type: GraphQLUserInput } },
  async resolve(parent: any, { input }: any, context: any): Promise<any> {
    return User.findOne({ where: input });
  },
};
const signUp = {
  type: GraphQLUser,
  args: { input: { type: GraphQLUserInput } },
  async resolve(parent: any, { input }: any, context: any): Promise<any> {
    return User.create(input);
  },
};

export { GraphQLUser, getUserList, getUser, setUser, signIn, signUp };
