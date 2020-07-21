import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import File from "../../database/models/File";
import {GraphQLUpload} from "apollo-server-express";
import {createWriteStream, unlink} from "fs";
import md5 from "md5";
import GraphQLDateTime from "./DateTime";

const GraphQLFile = new GraphQLObjectType({
  name: "File",
  fields: {
    id: { type: GraphQLID },
    filename: { type: GraphQLString },
    mimetype: { type: GraphQLString },
    encoding: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime }
  }
});

const getFiles = {
  type: GraphQLList(GraphQLFile),
  args: {},
  resolve(parent: any, { args }: any, context: any): Promise<any> {
    return File.findAll();
  }
};

const setFile = {
  type: GraphQLFile,
  args: { file: { type: GraphQLNonNull(GraphQLUpload) } },
  async resolve(parent: any, args: any, context: any): Promise<any> {
    const { filename, mimetype, encoding, createReadStream } = await args.file;

    const file = await File.create({
      filename: md5(new Date().toISOString() + filename) + "_" + filename,
      mimetype: mimetype,
      encoding: encoding
    });
    const stream = createReadStream();
    const path = `${process.env.UPLOAD_DIR}/${file.filename}`;

    await new Promise((resolve, reject) => {
      const writeStream = createWriteStream(path);

      writeStream.on("finish", resolve);

      writeStream.on("error", (error: any) => {
        unlink(path, () => {
          reject(error);
        });
      });

      stream.on("error", (error: any) => writeStream.destroy(error));

      stream.pipe(writeStream);
    });

    return file;
  }
};

export { GraphQLFile, getFiles, setFile };
