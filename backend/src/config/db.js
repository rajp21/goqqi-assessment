import Sequelize from 'sequelize'; 
import { DB_DILECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from '.';



const sequelize = new Sequelize(DB_NAME, DB_USERNAME, "", {
    host: DB_HOST,
    dialect: DB_DILECT,
    pool: {
      max: 5, 
      min: 0, 
      acquire: 30000, 
      idle: 10000
    }
  });


  export default sequelize; 