import { DataTypes, Model } from "sequelize";
import database from "../index";
import User from "./User";

class UserSession extends Model {
  public id: number;
  public ip: string;
  public token: string;
  public isDeleted: boolean;
  public user: User;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

UserSession.init(
  {
    ip: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: database,
  }
);

export default UserSession;
