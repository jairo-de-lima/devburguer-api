import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Product from '../app/models/Products';
import Category from '../app/models/Category';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }
  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/devburguer',
    );
  }
}

export default new Database();
