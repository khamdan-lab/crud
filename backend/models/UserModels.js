import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const User = database.define('users',{
    name: {
       type: Sequelize.STRING,
    },

    email:{
        type: Sequelize.STRING,
    }, 
    gender:{
       type: Sequelize.STRING,
    } 
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await database.sync();
})();  