import { setupMaster } from "cluster";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getFiles, setFile } from "./schemas/File";
import { getUser, getUserList, setUser, signIn, signUp } from "./schemas/User";
import { setUserSession } from "./schemas/UserSession";

const QueryRootType = new GraphQLObjectType({
  name: "Query",
  fields: {
    files: getFiles,
    users: getUserList,
    user: getUser,
  },
});

const MutationRootType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    file: setFile,
    user: setUser,
    signIn: signIn,
    signUp: signUp,
    userSession: setUserSession,
  },
});

const schema = new GraphQLSchema({
  query: QueryRootType,
  mutation: MutationRootType,
});

export default schema;
