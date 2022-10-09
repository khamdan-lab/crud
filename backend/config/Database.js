import { Sequelize } from "sequelize";

const database =  new Sequelize('crud_db','khamdan','Kh@mdan123',{
    host: 'localhost',
    dialect: "mysql"
});

export default database;