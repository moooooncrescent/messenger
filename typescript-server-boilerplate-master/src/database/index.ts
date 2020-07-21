import {Sequelize} from "sequelize";

const database = new Sequelize(process.env.POSTGRES_URL, { logging: false });

export default database;
