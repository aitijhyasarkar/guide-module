module.exports = (sequelize, DataTypes) => {
  const TestDatas = sequelize.define("TestDatas", {
    id: {
      autoIncrement: true,
      primaryKey   : true,
      type         : DataTypes.INTEGER,
    },
    name: { type: DataTypes.STRING },
  },
  { 
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  });

  return TestDatas;
};
