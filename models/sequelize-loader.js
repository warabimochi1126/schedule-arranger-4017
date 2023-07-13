'use strict';
// sequelizeモジュールを読み込む
const { Sequelize, DataTypes } = require('sequelize');
// sequelizeとPostgresSQLを接続
const sequelize = new Sequelize(
  'postgres://postgres:postgres@db/schedule_arranger'
);

module.exports = {
  sequelize,
  DataTypes
};