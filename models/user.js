'use strict';
const { sequelize, DataTypes } = require('./sequelize-loader');

/* 
  usersテーブルのモデルを作成します
  sequelize.define()でモデルを定義します.第1引数にモデル名.第2引数にカラムの属性を指定したオブジェクト.第3引数にテーブル全体のオプションを指定したオブジェクトを渡します.
  freezeTableNameはテーブル名とモデル名を一致させます(sequelizeではモデル名の複数形がテーブル名になってしまう事への対処)
  timestampsはcreatedAtとupdatedAtを作成しないためのオプションです
 */
const User = sequelize.define(
  'users',
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = User;