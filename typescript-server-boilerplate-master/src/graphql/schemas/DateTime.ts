import { GraphQLScalarType, Kind } from "graphql";

const GraphQLDateTime = new GraphQLScalarType({
  name: "Date",
  serialize: value => {
    return value.getTime();
  },
  parseValue: value => {
    return new Date(value);
  },
  parseLiteral: ast => {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  }
});

export default GraphQLDateTime;
