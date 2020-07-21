import { DataTypes, Model } from "sequelize";
import database from "../index";
import File from "./File";

class User extends Model {
  public login: string;
  public password: string;
  public email: string;
  public readonly avatar: File;
}

User.init(
  {
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { unique: true, type: DataTypes.STRING },
  },
  {
    sequelize: database,
  }
);

User.belongsTo(File, { as: "avatar" });

export default User;
