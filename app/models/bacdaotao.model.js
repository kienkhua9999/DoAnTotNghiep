module.exports = (sequelize, Sequelize) => {
    const Bacdaotao = sequelize.define("bacdaotaos", {
      IDbacdaotao: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tenbacdaotao: {
        type: Sequelize.TEXT
      }
    
    });
    return Bacdaotao;
};