import sequelize, { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    // TODO: Implement this method
    return (`${this.fname} ${this.lname}`)
  }
}

// TODO: Human.init()

Human.init
(
  {
    humanId:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fname:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    modelName: 'human',
    timestamps: false,
    sequelize: db
  }
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()

Animal.init
(
  {
    animalId: 
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    species:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthYear:
    {
      type: DataTypes.INTEGER
    }
  },
  {
    modelName: 'animal',
    timestamps: false,
    sequelize: db
  }
)

// TODO: Define Relationship

Human.hasMany(Animal, { foreignKey: 'humanId' })
Animal.belongsTo(Human, { foreignKey: 'humanId' })

await db.sync()

export default db;
