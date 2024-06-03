import sequelize from "../config/db";
import { DataTypes } from 'sequelize';


const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}); 

export default User;