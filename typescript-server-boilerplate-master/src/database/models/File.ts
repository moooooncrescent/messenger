import {DataTypes, Model} from "sequelize";
import database from "../index";

class File extends Model {
  public readonly id: number;
  public readonly filename: string;
  public readonly mimetype: string;
  public readonly encoding: string;
  public isDeleted: boolean;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

File.init(
  {
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    encoding: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: "files",
    sequelize: database
  }
);

export default File;
