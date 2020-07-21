import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// Config environment
export const DEV_MOD = process.env.NODE_ENV !== "production";
if (!DEV_MOD) {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

// Import Graphql schema and Database
import schema from "./graphql";
import database from "./database";

// Database connection
database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    database
      .sync()
      .then(() => {
        console.log("Databases was synchronized.");
      })
      .catch(error => {
        console.error("Sync error:", error);
      });
  })
  .catch(error => {
    console.error("Unable to connect to the database:", error);
  });

// Express server
const app = express();
app.use(cors());
app.use(express.static(process.env.UPLOAD_DIR));
if (!DEV_MOD) {
  const pathToClient = path.join(__dirname, process.env.PATH_TO_CLIENT);
  app.use(express.static(pathToClient));
  app.get("/", (req, res) => {
    res.sendFile(pathToClient + "/index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.send("Back-end server.");
  });
}

// Apollo server
const server = new ApolloServer({
  schema: schema,
  playground: true,
  uploads: {
    maxFileSize: 10000000,
    maxFiles: 20
  },
  context: async ({ req }) => {
    return { token: req.headers.authorization || "" };
  }
});
server.applyMiddleware({ app });

// Run server
app.listen({ port: process.env.BACKEND_PORT || 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000/`);
});
